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
  console.log('Standings API Connected to MySQL!');
});

// API for standings objects
router.get('/standings', (req, res, next) => {
  connection.query(`SELECT * FROM standings`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for standings and names
router.get('/fullstandingsrecent', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.year desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for PF
router.get('/fullstandingspfheavy', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pf desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

router.get('/fullstandingspflight', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pf`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for PA
router.get('/fullstandingspaheavy', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pa desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

router.get('/fullstandingspalight', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pa`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for members-standings
router.get('/fullstandingsmembers', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by owner.lastName`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for record-standings
router.get('/fullstandingsbestrecords', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by CAST(SUBSTRING_INDEX(standings.record, '-', 1) AS UNSIGNED) desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

router.get('/fullstandingsworstrecords', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by CAST(SUBSTRING_INDEX(standings.record, '-', 1) AS UNSIGNED)`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

module.exports = router