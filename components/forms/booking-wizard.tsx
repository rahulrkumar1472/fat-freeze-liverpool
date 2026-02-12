"use client";

import { FormEvent, useMemo, useState } from "react";
import { areaPages } from "@/lib/content/areas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type BookingPayload = {
  appointmentDate: string;
  appointmentTime: string;
  fullName: string;
  phone: string;
  email: string;
  areaOfConcern: string;
  notes: string;
  consent: boolean;
  honeypot: string;
};

function buildTimeOptions() {
  const options: string[] = [];
  for (let hour = 10; hour <= 20; hour += 1) {
    const hoursLabel = hour.toString().padStart(2, "0");
    options.push(`${hoursLabel}:00`);
    if (hour < 20) {
      options.push(`${hoursLabel}:30`);
    }
  }
  return options;
}

const timeOptions = buildTimeOptions();

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successReference, setSuccessReference] = useState<string | null>(null);

  const [payload, setPayload] = useState<BookingPayload>({
    appointmentDate: "",
    appointmentTime: "",
    fullName: "",
    phone: "",
    email: "",
    areaOfConcern: "",
    notes: "",
    consent: false,
    honeypot: "",
  });

  const today = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const canGoStep2 =
    payload.fullName.trim().length > 1 && payload.phone.trim().length > 6 && payload.email.trim().includes("@");

  const canGoStep3 = payload.appointmentDate && payload.appointmentTime && payload.areaOfConcern.trim().length > 1;

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string; reference?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Booking failed");
      }

      setSuccessReference(data.reference ?? "Pending");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Booking failed");
    } finally {
      setLoading(false);
    }
  }

  if (successReference) {
    return (
      <Card className="rounded-3xl border-[#98d5b9] bg-[#ecfff7] p-6 shadow-none">
        <h2 className="font-display text-2xl font-semibold text-emerald-900">Booking confirmed</h2>
        <p className="mt-3 text-sm leading-7 text-emerald-900">
          Thank you. Your consultation request has been submitted successfully.
        </p>
        <p className="mt-3 text-sm font-semibold text-emerald-900">Reference: {successReference}</p>
        <p className="mt-4 text-xs text-emerald-800">
          You will receive a confirmation email shortly. This is not a weight-loss treatment. Results vary by individual.
        </p>
      </Card>
    );
  }

  return (
    <form onSubmit={submit} className="section-shell p-6 sm:p-8">
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {[
          { id: 1, label: "Personal details" },
          { id: 2, label: "Area and appointment" },
          { id: 3, label: "Confirm and consent" },
        ].map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] ${
              step === item.id
                ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary-hover)]"
                : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-muted)]"
            }`}
          >
            Step {item.id}: {item.label}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="grid gap-4">
          <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Step 1: Personal details</h2>
          <div className="grid gap-2">
            <Label htmlFor="booking-name">Full name</Label>
            <Input
              id="booking-name"
              type="text"
              value={payload.fullName}
              onChange={(event) => setPayload((prev) => ({ ...prev, fullName: event.target.value }))}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="booking-email">Email</Label>
            <Input
              id="booking-email"
              type="email"
              value={payload.email}
              onChange={(event) => setPayload((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="booking-phone">Phone</Label>
            <Input
              id="booking-phone"
              type="tel"
              value={payload.phone}
              onChange={(event) => setPayload((prev) => ({ ...prev, phone: event.target.value }))}
              required
            />
          </div>
          <Button
            type="button"
            disabled={!canGoStep2}
            onClick={() => setStep(2)}
          >
            Continue
          </Button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4">
          <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Step 2: Area and appointment</h2>
          <div className="grid gap-2">
            <Label htmlFor="booking-area">Area of concern</Label>
            <Select
              id="booking-area"
              value={payload.areaOfConcern}
              onChange={(event) => setPayload((prev) => ({ ...prev, areaOfConcern: event.target.value }))}
              required
            >
              <option value="">Select an area</option>
              {areaPages.map((area) => (
                <option key={area.slug} value={area.heroTitle}>
                  {area.heroTitle}
                </option>
              ))}
              <option value="General consultation">General consultation</option>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="booking-date">Preferred date</Label>
            <Input
              id="booking-date"
              type="date"
              min={today}
              value={payload.appointmentDate}
              onChange={(event) => setPayload((prev) => ({ ...prev, appointmentDate: event.target.value }))}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="booking-time">Preferred time (10:00 - 20:00)</Label>
            <Select
              id="booking-time"
              value={payload.appointmentTime}
              onChange={(event) => setPayload((prev) => ({ ...prev, appointmentTime: event.target.value }))}
              required
            >
              <option value="">Select a time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="booking-notes">Notes (optional)</Label>
            <Textarea
              id="booking-notes"
              value={payload.notes}
              onChange={(event) => setPayload((prev) => ({ ...prev, notes: event.target.value }))}
              className="min-h-28"
            />
          </div>
          <input
            tabIndex={-1}
            autoComplete="off"
            value={payload.honeypot}
            onChange={(event) => setPayload((prev) => ({ ...prev, honeypot: event.target.value }))}
            className="hidden"
            aria-hidden
          />
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={() => setStep(1)}
              variant="secondary"
            >
              Back
            </Button>
            <Button
              type="button"
              disabled={!canGoStep3}
              onClick={() => setStep(3)}
            >
              Continue
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-5">
          <h2 className="font-display text-2xl font-semibold text-[var(--accent-navy)]">Step 3: Confirm and consent</h2>
          <label className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm text-[var(--text-muted)]">
            <input
              type="checkbox"
              checked={payload.consent}
              onChange={(event) => setPayload((prev) => ({ ...prev, consent: event.target.checked }))}
              className="mt-1"
              required
            />
            <span>
              I consent to our clinic contacting me about this enquiry and storing my submitted data to manage booking logistics in line with the privacy policy.
            </span>
          </label>

          <Card className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-none">
            <CardContent className="p-0 text-sm text-[var(--text-muted)]">
              <ul className="space-y-1">
                <li>Name: {payload.fullName}</li>
                <li>Email: {payload.email}</li>
                <li>Phone: {payload.phone}</li>
                <li>Area: {payload.areaOfConcern}</li>
                <li>Date: {payload.appointmentDate}</li>
                <li>Time: {payload.appointmentTime}</li>
              </ul>
            </CardContent>
          </Card>

          {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={() => setStep(2)}
              variant="secondary"
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={!payload.consent || loading}
            >
              {loading ? "Submitting..." : "Confirm booking"}
            </Button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
