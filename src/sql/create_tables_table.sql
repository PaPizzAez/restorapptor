CREATE TABLE tables
(
    id     SERIAL PRIMARY KEY,
    x      INTEGER NOT NULL,
    y      INTEGER NOT NULL,
    size   INTEGER,
    width  INTEGER,
    height INTEGER,
    type   VARCHAR(10) DEFAULT 'rect',
    status VARCHAR(20)
);

-- Insert queries for the tables
INSERT INTO tables (x, y, width, height, status)
VALUES (95, 60, 30, 40, 'RESERVED');

INSERT INTO tables (x, y, width, height, status)
VALUES (195, 60, 30, 40, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (307, 60, 30, 40, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (435, 60, 30, 40, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (430, 335, 75, 80, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (615, 415, 75, 80, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (430, 497, 75, 80, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (620, 597, 75, 80, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (430, 668, 75, 80, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (806, 483, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (973, 483, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (1135, 483, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (693, 900, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (837, 900, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (980, 900, 50, 50, 'AVAILABLE');

INSERT INTO tables (x, y, width, height, status)
VALUES (1120, 800, 55, 135, 'AVAILABLE');

INSERT INTO tables (x, y, size, status, type)
VALUES (773, 622, 70, 'RESERVED', 'circle');

INSERT INTO tables (x, y, size, status, type)
VALUES (885, 625, 70, 'RESERVED', 'circle');

INSERT INTO tables (x, y, size, status, type)
VALUES (995, 620, 70, 'RESERVED', 'circle');

INSERT INTO tables (x, y, size, status, type)
VALUES (1120, 620, 70, 'RESERVED', 'circle');

INSERT INTO tables (x, y, size, status, type)
VALUES (830, 780, 70, 'RESERVED', 'circle');

INSERT INTO tables (x, y, size, status, type)
VALUES (953, 780, 70, 'RESERVED', 'circle');
