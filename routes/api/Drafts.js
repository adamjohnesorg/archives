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
  console.log('Drafts API Connected to MySQL!');
});

// API for draft objects
router.get('/drafts', (req, res, next) => {
  connection.query(`SELECT draft.*, owner.firstName, owner.lastName, standings.team
                    FROM draft
                    left join owner on draft.id = owner.id
                    left join standings on owner.id = standings.id and draft.year = standings.year
                    order by year, pick`,
      (err, results) => { if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

module.exports = router