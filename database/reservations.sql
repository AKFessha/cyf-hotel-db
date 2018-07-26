DROP TABLE IF EXISTS reservations;
PRAGMA foreign_keys = ON;
CREATE TABLE reservations (
    id  INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id  INTEGER,
    room_id INTEGER,
    check_in_date VARCHAR,
    check_out_date VARCHAR,
    room_price INTEGER
    FOREIGN KEY (customer_id)  REFERENCES customers(id),
    FOREIGN KEY (room_id)  REFERENCES roomss(id),
 );
 INSERT INTO reservations(customer_id, room_id, check_in_date, check_out_date, room_price) VALUES (2, 1, "21/06/18", "29/06/18", 100);
 INSERT INTO reservations(customer_id, room_id, check_in_date, check_out_date, room_price) VALUES (3, 2, "12/06/18", "18/06/18", 120);
 INSERT INTO reservations(customer_id, room_id, check_in_date, check_out_date, room_price) VALUES (1, 3, "01/06/18", "09/06/18", 130);