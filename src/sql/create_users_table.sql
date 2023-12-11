CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(32) UNIQUE COLLATE utf8mb4_general_ci,
    password VARCHAR(200) COLLATE utf8mb4_general_ci
);
