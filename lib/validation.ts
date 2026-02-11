import { z } from "zod";

const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function isValidTimeWithinWindow(time: string) {
  if (!timePattern.test(time)) return false;
  const [hour, minute] = time.split(":").map(Number);
  if (hour < 10 || hour > 20) return false;
  if (hour === 20 && minute > 0) return false;
  return true;
}

function isFutureOrToday(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return date >= today;
}

export const bookingSchema = z.object({
  appointmentDate: z
    .string()
    .min(1, "Appointment date is required")
    .refine((date) => isFutureOrToday(date), "Appointment date must be today or later"),
  appointmentTime: z
    .string()
    .min(1, "Appointment time is required")
    .refine((time) => isValidTimeWithinWindow(time), "Time must be between 10:00 and 20:00"),
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Valid email is required"),
  areaOfConcern: z.string().trim().min(2, "Area of concern is required").max(140),
  notes: z.string().trim().max(1500).optional().or(z.literal("")),
  consent: z.boolean().refine((value) => value, "Consent is required"),
  honeypot: z.string().optional(),
});

export const popupLeadSchema = z.object({
  fullName: z.string().trim().min(2, "Name is required").max(120),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Valid email is required"),
  consent: z.boolean().refine((value) => value, "Consent is required"),
  honeypot: z.string().optional(),
  source: z.string().trim().max(120).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type PopupLeadInput = z.infer<typeof popupLeadSchema>;
