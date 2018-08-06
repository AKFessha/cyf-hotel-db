const express = require("express");
const router = express.Router();
const filename = "./database/database.sqlite";
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename
  }
});

//Get customers
router.get("/customers", function(req, res) {
  const sqlStatement = "select * from customers";
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});

//Get rooms
router.get("/rooms", function(req, res) {
  const sqlStatement = "select * from rooms";
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});
//Get room_types
router.get("/room_types", function(req, res) {
  const sqlStatement = "select * from room_types";
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});
//Filtering by id and surname
router.get("/customers/:id", function(req, res) {
  const sqlStatement = `select * from customers where id=${req.params.id}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
});

router.get("/customers/:surname", function(req, res) {
  const sqlStatement = `select * from customers where surname ilike "%${
    req.params.surname
  }%"`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
});
//delete
router.delete("/customers/:id", function(req, res) {
  const sqlStatement = `delete from customers where id=${req.params.id}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});
// post
router.post("/customers/", function(req, res) {
  const body = req.body;

  const sqlStatement = `INSERT INTO customers (title, firstname, surname, email) VALUES ("${
    body.title
  }", "${body.firstname}", "${body.surname}","${body.email}")`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});
//update
router.put("/customers/:id", function(req, res) {
  const body = req.body;
  const customerId = req.params.id;
  const sqlStatement = `UPDATE customers 
  SET title =" ${body.title}",
   firstname ="${body.firstname}"
  WHERE id =${customerId}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});

// get '/reservations'

router.get("/reservations", (req, res) => {
  const sqlStatement = "select * from reservations";
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});

// get '/reservations/:id'
router.get("/reservations/:id", (req, res) => {
  const sqlStatement = `select * from reservations where id = ${req.params.id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});

// delete '/reservations/:id'
router.delete("/reservations/:id", (req, res) => {
  const sqlStatement = `delete  from reservations where id =${req.params.id} `;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
});

// get '/reservations/starting-on/:startDate'
router.get("/reservations/starting-on/:startDate");
const sqlStatement = `selct`;
// get '/reservations/active-on/:date'
// TODO: add code here

// post '/reservations'
router.post("/reservations", (req, res) => {
  const body = req.body;
  const sqlStatement = `insert into reservations(customer_id, room_id, check_in_date, check_out_date, room_price) values ("${
    body.customer_id
  }", "${body.room_id}", "${body.check_in_date}", "${body.check_out_date}", "${
    body.room_price
  }")`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.status(200);
});
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }

// get `/detailed-invoices'
// TODO: add code here

// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

// get '/reviews'

router.get("/reviews", (req, res) => {
  const sqlStatement = "select * from reviews";
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});
router.get("/reviews/:id", (req, res) => {
  const sqlStatement = `select * from reviews where id = ${req.params.id}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
  res.status(200);
});

//Post review
router.post("/reviews", (req, res) => {
  const body = req.body;
  const sqlStatement = `INSERT INTO reviews(customer_id, room_type_id, rating, comment, review_date) VALUES(${
    body.customer_id
  }, ${body.room_type_id}, ${body.rating}, ${body.comment}, ${
    body.review_date
  })`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.status(200);
});

//Delete review
router.get("/reviews/:id", (req, res) => {
  const sqlStatement = `delete from customers where id =${req.params.id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.status(200);
});

//Update review
router.put("/reviews/:id", (req, res) => {
  const body = req.body;
  const reviewId = req.params.id;
  const sqlStatement = `update reviews set rating =${body.rating}, comment=${
    body.comment
  } where id = ${reviewId}
 `;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.status(200);
});
module.exports = router;
