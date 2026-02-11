import { NextResponse } from "next/server";
import { insertBooking } from "@/lib/db";
import { sendBookingEmails } from "@/lib/mail";
import { consumeRateLimit, getClientIp } from "@/lib/rate-limit";
import { bookingSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rate = consumeRateLimit(`bookings:${ip}`, 6, 60_000);

  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many booking attempts. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid booking payload";
    return NextResponse.json({ message: firstError }, { status: 400 });
  }

  if (parsed.data.honeypot && parsed.data.honeypot.trim().length > 0) {
    return NextResponse.json({ message: "Submission rejected" }, { status: 400 });
  }

  const bookingReference = `FFL-${Date.now().toString(36).toUpperCase()}`;

  try {
    await insertBooking({
      appointmentDate: parsed.data.appointmentDate,
      appointmentTime: parsed.data.appointmentTime,
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      areaOfConcern: parsed.data.areaOfConcern,
      notes: parsed.data.notes,
      consent: parsed.data.consent,
      source: "website_booking",
    });

    await sendBookingEmails({
      bookingReference,
      appointmentDate: parsed.data.appointmentDate,
      appointmentTime: parsed.data.appointmentTime,
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      areaOfConcern: parsed.data.areaOfConcern,
      notes: parsed.data.notes,
    });

    return NextResponse.json({ ok: true, reference: bookingReference });
  } catch (error) {
    console.error("Booking submission failed", error);
    return NextResponse.json(
      { message: "Could not complete booking. Please contact the clinic directly." },
      { status: 500 },
    );
  }
}
