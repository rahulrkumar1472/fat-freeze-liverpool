-- Fat Freeze Liverpool initial schema
-- Run with your migration runner or psql against PostgreSQL.

CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  area_of_concern VARCHAR(140) NOT NULL,
  notes TEXT,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  source VARCHAR(80) NOT NULL DEFAULT 'website_booking',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_email_idx ON bookings (email);

CREATE TABLE IF NOT EXISTS lead_captures (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  source VARCHAR(80) NOT NULL DEFAULT 'popup_offer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS lead_captures_created_at_idx ON lead_captures (created_at DESC);
CREATE INDEX IF NOT EXISTS lead_captures_email_idx ON lead_captures (email);
