-- Safe follow-up migration for environments that already ran 001 without consent columns.
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS consent BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE lead_captures ADD COLUMN IF NOT EXISTS consent BOOLEAN NOT NULL DEFAULT FALSE;
