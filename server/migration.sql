DROP TABLE IF EXISTS languages, currencies, property;

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


CREATE TABLE property (
    property_id SERIAL,
    host_info JSONB,
    cohost_info JSONB,
    safety JSONB,
    cancellation_policy JSONB,
    house_rules JSONB
);