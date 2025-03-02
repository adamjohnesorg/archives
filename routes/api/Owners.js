const express = require("express");
const connection = require('../../db')
const router = express.Router()

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