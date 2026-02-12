"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const lastShownKey = "ffl_popup_last_shown";
const convertedKey = "ffl_popup_converted";
const delayMs = Number(process.env.NEXT_PUBLIC_POPUP_DELAY_MS ?? 12000);
const cooldownHours = Number(process.env.NEXT_PUBLIC_POPUP_COOLDOWN_HOURS ?? 72);

type LeadPayload = {
  fullName: string;
  phone: string;
  email: string;
  consent: boolean;
  honeypot: string;
};

export function PopupLeadCapture() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shownRef = useRef(false);
  const [payload, setPayload] = useState<LeadPayload>({
    fullName: "",
    phone: "",
    email: "",
    consent: false,
    honeypot: "",
  });

  useEffect(() => {
    const converted = window.localStorage.getItem(convertedKey);
    if (converted) return;

    const shownRaw = window.localStorage.getItem(lastShownKey);
    if (shownRaw) {
      const shownAt = Number(shownRaw);
      const elapsed = Date.now() - shownAt;
      const cooldownMs = cooldownHours * 60 * 60 * 1000;
      if (elapsed < cooldownMs) return;
    }

    const openPopup = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      window.localStorage.setItem(lastShownKey, Date.now().toString());
      setOpen(true);
    };

    const timer = window.setTimeout(openPopup, delayMs);

    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY > 10) return;
      openPopup();
    };

    document.addEventListener("mouseleave", handleExitIntent);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          source: "popup_incentive",
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Could not submit lead");
      }

      window.localStorage.setItem(convertedKey, "1");
      setSuccess(true);
      window.setTimeout(() => setOpen(false), 1800);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not submit lead");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(15,23,42,0.35)] p-4">
      <Card className="mx-auto mt-20 w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:mt-24">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge variant="teal">Liverpool offer</Badge>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--accent-navy)]">
              Claim 30% off your first treatment with us
            </h2>
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="px-3"
            onClick={() => setOpen(false)}
            aria-label="Close popup"
          >
            Close
          </Button>
        </div>

        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
          Complete your details below and one of our friendly team will contact you to arrange your appointment and help you claim your 30% offer. New customers only.
        </p>

        {success ? (
          <Card className="mt-4 rounded-2xl border border-[#98d5b9] bg-[#ecfff7] p-4 shadow-none">
            <p className="text-sm font-semibold text-emerald-900">Thanks, your enquiry has been sent.</p>
            <p className="mt-1 text-xs text-emerald-800">Our clinic team will contact you using your preferred details.</p>
          </Card>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <div className="grid gap-1">
              <Label htmlFor="popup-name">Name</Label>
              <Input
                id="popup-name"
                type="text"
                value={payload.fullName}
                onChange={(event) => setPayload((prev) => ({ ...prev, fullName: event.target.value }))}
                required
              />
            </div>

            <div className="grid gap-1">
              <Label htmlFor="popup-phone">Phone</Label>
              <Input
                id="popup-phone"
                type="tel"
                value={payload.phone}
                onChange={(event) => setPayload((prev) => ({ ...prev, phone: event.target.value }))}
                required
              />
            </div>

            <div className="grid gap-1">
              <Label htmlFor="popup-email">Email</Label>
              <Input
                id="popup-email"
                type="email"
                value={payload.email}
                onChange={(event) => setPayload((prev) => ({ ...prev, email: event.target.value }))}
                required
              />
            </div>

            <input
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              value={payload.honeypot}
              onChange={(event) => setPayload((prev) => ({ ...prev, honeypot: event.target.value }))}
              aria-hidden
            />

            <label className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-xs text-[var(--text-muted)]">
              <input
                type="checkbox"
                checked={payload.consent}
                onChange={(event) => setPayload((prev) => ({ ...prev, consent: event.target.checked }))}
                className="mt-0.5"
                required
              />
              <span>
                I consent to our clinic contacting me about this enquiry and processing my details under the privacy policy.
              </span>
            </label>

            {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

            <Button
              type="submit"
              disabled={loading || !payload.consent}
            >
              {loading ? "Sending..." : "Claim My 30% Offer"}
            </Button>

            <p className="text-xs text-[var(--text-muted)]">This is not a weight-loss treatment. Results vary by individual.</p>
          </form>
        )}
      </Card>
    </div>
  );
}
