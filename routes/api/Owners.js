const express = require("express");
const mysql = require('mysql2');
const router = express.Router()

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(0)
  }
  console.log('Owners API Connected to MySQL!');
});

// API for owner objects
router.get('/owners', (req, res, next) => {
  connection.query(`SELECT * FROM owner limit 10`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

module.exports = router