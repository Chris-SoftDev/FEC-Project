DROP TABLE IF EXISTS languages, currencies;

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
