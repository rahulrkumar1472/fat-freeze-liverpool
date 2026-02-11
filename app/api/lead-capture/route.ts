import { NextResponse } from "next/server";
import { insertLeadCapture } from "@/lib/db";
import { sendLeadCaptureNotification } from "@/lib/mail";
import { consumeRateLimit, getClientIp } from "@/lib/rate-limit";
import { popupLeadSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rate = consumeRateLimit(`leads:${ip}`, 8, 60_000);

  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many attempts. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload" }, { status: 400 });
  }

  const parsed = popupLeadSchema.safeParse(body);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid lead payload";
    return NextResponse.json({ message: firstError }, { status: 400 });
  }

  if (parsed.data.honeypot && parsed.data.honeypot.trim().length > 0) {
    return NextResponse.json({ message: "Submission rejected" }, { status: 400 });
  }

  const source = parsed.data.source ?? "popup_incentive";

  try {
    await insertLeadCapture({
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      consent: parsed.data.consent,
      source,
    });

    await sendLeadCaptureNotification({
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      source,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead capture failed", error);
    return NextResponse.json({ message: "Could not submit lead at this time." }, { status: 500 });
  }
}
