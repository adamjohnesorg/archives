const express = require("express");
const connection = require('../../db')
const router = express.Router()

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