CREATE TABLE page_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(255),
    timestamp timestamp without time zone,
    event_details JSON
);

CREATE TABLE ad_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(255),
    timestamp timestamp without time zone,,
    event_details JSON
);