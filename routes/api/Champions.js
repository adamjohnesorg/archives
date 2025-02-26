const express = require("express");
const mysql = require('mysql2');
const router = express.Router()

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(0)
  }
  console.log('Champions API Connected to MySQL!');
});

// API for champions objects
router.get('/champions', (req, res, next) => {
  connection.query(`SELECT champions.*, owner.firstName, owner.lastName, owner.championships, standings.team FROM champions
                    left join owner on champions.id=owner.id
                    left join standings on standings.id=owner.id and standings.year=champions.year`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

router.get('/currentchamp', (req, res, next) => {
  connection.query(`SELECT * FROM champions left join owner on champions.id = owner.id where champions.year=` + parseInt(new Date().getFullYear() - 1), (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});


module.exports = router