const express = require("express");
const mysql = require('mysql2');
const router = express.Router()

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(0)
  }
  console.log('Players API Connected to MySQL!');
});

// API for players
router.get('/players', (req, res, next) => {
  connection.query(`SELECT player.*
                    FROM player`,
      (err, results) => { if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

module.exports = router