CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE  appllication_user(
        uuid uuid DEFAULT uuid_generate_v4(),
        username VARCHAR NOT NULL,
        password VARCHAR NOT NULL,
        PRIMARY KEY(uuid)
);

INSERT INTO appllication_user(username, password) VALUES ('Bianca',crypt('Admin','17042021'));

