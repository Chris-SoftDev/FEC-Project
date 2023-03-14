DROP TABLE IF EXISTS host, property, reservations, booked_days, reviews, ratings, images, languages, currencies;

CREATE TABLE host (
    host_id SERIAL PRIMARY KEY,
    host_info JSONB,
    cohost_info JSONB
);

CREATE TABLE property (
    property_id SERIAL PRIMARY KEY,
    host_id INTEGER,
    safety JSONB,
    cancellation_policy JSONB,
    house_rules JSONB,
    location JSONB,
    amenities JSONB,
    bedrooms JSONB,
    nightly_rate INTEGER,
    cleaning_fee INTEGER, 
    service_fee INTEGER,
    CONSTRAINT fk_host FOREIGN KEY(host_id) REFERENCES host(host_id) ON DELETE CASCADE 
);

CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    property_id INTEGER,
    from_date DATE,
    to_date DATE,
    guests JSONB,
    CONSTRAINT fk_property FOREIGN KEY(property_id) REFERENCES property(property_id) ON DELETE CASCADE
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  img_url TEXT,
  review_date DATE NOT NULL
);

CREATE TABLE ratings (
    cleanliness INTEGER NOT NULL CHECK (cleanliness >= 1 AND cleanliness <= 5),
    accuracy INTEGER NOT NULL CHECK (accuracy >= 1 AND accuracy <= 5),
    communication INTEGER NOT NULL CHECK (communication >= 1 AND communication <= 5),
    location INTEGER NOT NULL CHECK (location >= 1 AND location <= 5),
    check_in INTEGER NOT NULL CHECK (check_in >= 1 AND check_in <= 5),
    value INTEGER NOT NULL CHECK (value >= 1 AND value <= 5)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  large_img VARCHAR(500),
  left_img VARCHAR(500),
  right_img VARCHAR(500)
);

CREATE TABLE languages (
    language_id SERIAL PRIMARY KEY,
    language VARCHAR NOT NULL, 
    country VARCHAR NOT NULL
);

CREATE TABLE currencies (
    currency_id SERIAL PRIMARY KEY,
    currency VARCHAR NOT NULL, 
    symbol TEXT NOT NULL
);