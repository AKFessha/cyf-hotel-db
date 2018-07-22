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
//Filtering by id and surname
outer.get("/customers/:id", function(req, res) {
  const sqlStatement = `select * from customers where id=${req.params.id}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
});

router.get("/customers/:surname", function(req, res) {
  const sqlStatement = `select * from customers where surname=${
    req.params.surname
  }`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
});
router.delete("/customers/:id", function(req, res) {
  const sqlStatement = `delete * from customers where id=${req.params.id}`;
  knex.raw(sqlStatement).then(function(data) {
    res.json(data);
  });
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
  res.send("Success");
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
  res.send("Success");
});

// get '/reservations'
// TODO: add code here

// get '/reservations/:id'
// TODO: add code here

// delete '/reservations/:id'
// TODO: add code here

// get '/reservations/starting-on/:startDate'
// TODO: add code here

// get '/reservations/active-on/:date'
// TODO: add code here

// post '/reservations'
// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }
// TODO: add code here

// get `/detailed-invoices'
// TODO: add code here

// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

module.exports = router;
