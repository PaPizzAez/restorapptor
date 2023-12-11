CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    tableId BIGINT(20) UNSIGNED,
    userName VARCHAR(32),
    foodList JSON,
    FOREIGN KEY (tableId) REFERENCES tables(id),
    FOREIGN KEY (userName) REFERENCES users(name)
);
