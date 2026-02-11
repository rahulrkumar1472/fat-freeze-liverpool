import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS are required for email delivery");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

const sender = process.env.MAIL_FROM ?? "confirmation@fatfreezeliverpool.co.uk";
const internalRecipient = process.env.MAIL_TO_INTERNAL ?? siteConfig.enquiryEmail;

function getBccRecipients() {
  const bcc = process.env.MAIL_BCC_OWNER ?? process.env.CLINIC_BCC_EMAIL;
  if (!bcc) return undefined;
  return bcc
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export async function sendBookingEmails(input: {
  bookingReference: string;
  appointmentDate: string;
  appointmentTime: string;
  fullName: string;
  phone: string;
  email: string;
  areaOfConcern: string;
  notes?: string;
}) {
  const transport = getTransporter();
  const bcc = getBccRecipients();

  const customerHtml = `
    <p>Hi ${input.fullName},</p>
    <p>Thanks for booking your consultation with ${siteConfig.clinicName}.</p>
    <p><strong>Reference:</strong> ${input.bookingReference}<br/>
    <strong>Date:</strong> ${input.appointmentDate}<br/>
    <strong>Time:</strong> ${input.appointmentTime}<br/>
    <strong>Area of concern:</strong> ${input.areaOfConcern}</p>
    <p>Our team will contact you if any adjustments are needed.</p>
    <p>This is not a weight-loss treatment. Results vary by individual.</p>
    <p>${siteConfig.clinicName}<br/>
    ${siteConfig.address}<br/>
    ${siteConfig.phone}</p>
  `;

  const clinicHtml = `
    <p>New consultation booking received.</p>
    <p><strong>Reference:</strong> ${input.bookingReference}<br/>
    <strong>Name:</strong> ${input.fullName}<br/>
    <strong>Phone:</strong> ${input.phone}<br/>
    <strong>Email:</strong> ${input.email}<br/>
    <strong>Date:</strong> ${input.appointmentDate}<br/>
    <strong>Time:</strong> ${input.appointmentTime}<br/>
    <strong>Area:</strong> ${input.areaOfConcern}</p>
    <p><strong>Notes:</strong> ${input.notes || "None provided"}</p>
  `;

  await Promise.all([
    transport.sendMail({
      from: sender,
      to: input.email,
      bcc,
      subject: `Consultation confirmed | ${input.bookingReference}`,
      html: customerHtml,
    }),
    transport.sendMail({
      from: sender,
      to: internalRecipient,
      bcc,
      replyTo: input.email,
      subject: `New booking: ${input.fullName} | ${input.appointmentDate} ${input.appointmentTime}`,
      html: clinicHtml,
    }),
  ]);
}

export async function sendLeadCaptureNotification(input: {
  fullName: string;
  phone: string;
  email: string;
  source: string;
}) {
  const transport = getTransporter();
  const bcc = getBccRecipients();

  await transport.sendMail({
    from: sender,
    to: internalRecipient,
    bcc,
    replyTo: input.email,
    subject: `New popup lead: ${input.fullName}`,
    html: `
      <p>New popup lead captured.</p>
      <p><strong>Name:</strong> ${input.fullName}<br/>
      <strong>Phone:</strong> ${input.phone}<br/>
      <strong>Email:</strong> ${input.email}<br/>
      <strong>Source:</strong> ${input.source}</p>
    `,
  });
}
