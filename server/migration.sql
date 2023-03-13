DROP TABLE IF EXISTS languages, currencies, reviews, ratings, property;

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

CREATE TABLE property (
    property_id SERIAL,
    host_info JSONB,
    cohost_info JSONB,
    safety JSONB,
    cancellation_policy JSONB,
    house_rules JSONB,
    nightly_rate INTEGER,
    location JSONB
);

