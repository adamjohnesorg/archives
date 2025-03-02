const express = require("express");
const connection = require('../../db')
const router = express.Router()

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