const express = require("express");
const connection = require('../../db')
const router = express.Router()

// API for roster objects
router.get('/rosters', (req, res, next) => {
  connection.query(`SELECT roster.*, owner.firstName, owner.lastName, standings.team
                    FROM roster
                    left join owner on roster.id = owner.id
                    left join standings on owner.id = standings.id and roster.rosterYear = standings.year`,
      (err, results) => { if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

module.exports = router