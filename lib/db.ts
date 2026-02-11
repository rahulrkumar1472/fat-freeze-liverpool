import { Pool, type QueryResultRow } from "pg";

let pool: Pool | null = null;

function getPool() {
  if (pool) return pool;

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is required for booking and lead capture storage");
  }

  pool = new Pool({
    connectionString,
    max: 10,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  });

  return pool;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  const instance = getPool();
  return instance.query<T>(text, params);
}

export async function insertBooking(input: {
  appointmentDate: string;
  appointmentTime: string;
  fullName: string;
  phone: string;
  email: string;
  areaOfConcern: string;
  notes?: string;
  consent: boolean;
  source?: string;
}) {
  return query(
    `
      INSERT INTO bookings (
        appointment_date,
        appointment_time,
        full_name,
        phone,
        email,
        area_of_concern,
        notes,
        consent,
        source
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id
    `,
    [
      input.appointmentDate,
      input.appointmentTime,
      input.fullName,
      input.phone,
      input.email,
      input.areaOfConcern,
      input.notes ?? null,
      input.consent,
      input.source ?? "website_booking",
    ],
  );
}

export async function insertLeadCapture(input: {
  fullName: string;
  phone: string;
  email: string;
  consent: boolean;
  source?: string;
}) {
  return query(
    `
      INSERT INTO lead_captures (
        full_name,
        phone,
        email,
        consent,
        source
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `,
    [input.fullName, input.phone, input.email, input.consent, input.source ?? "popup_offer"],
  );
}
