DROP TABLE IF EXISTS reviews;
PRAGMA foreign_keys = ON ;
CREATE TABLE reviews(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id  INTEGER,
    room_type_id INTEGER,
    rating INTEGER,
    comment VARCHAR(150),
    review_date VARCHAR,
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(room_type_id) REFERENCES room_types(id)
);
INSERT INTO reviews(customer_id, room_type_id, rating, comment, review_date) VALUES (2, 1, 5, "Very good", "22/05/18");
INSERT INTO reviews(customer_id, room_type_id, rating, comment, review_date) VALUES (1, 2, 4, "Good", "30/05/18");
INSERT INTO reviews(customer_id, room_type_id, rating, comment, review_date) VALUES (3, 1, 5, "Excellent", "12/05/18");