const express = require("express");
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, './.env') })

const PORT = process.env.PORT || 3000;

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

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
  console.log('Connected to MySQL!');
});

// API for roster objects
app.get('/roster', (req, res, next) => {
    connection.query(`SELECT distinct roster.*, owner.firstName, owner.lastName, standings.team
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

// API for standings objects
app.get('/standings', (req, res, next) => {
  connection.query(`SELECT * FROM standings`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for champions objects
app.get('/champions', (req, res, next) => {
  connection.query(`SELECT * FROM champions`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for draft objects
app.get('/draft', (req, res, next) => {
  connection.query(`SELECT * FROM draft`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for owner objects
app.get('/owner', (req, res, next) => {
  connection.query(`SELECT * FROM owner limit 10`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for owner objects
app.get('/currentchamp', (req, res, next) => {
  connection.query(`SELECT * FROM champions left join owner on champions.id = owner.id where champions.year=` + parseInt(new Date().getFullYear() - 1), (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

// API for standings and names
app.get('/fullstandingsrecent', (req, res, next) => {
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
app.get('/fullstandingspfheavy', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pf desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

app.get('/fullstandingspflight', (req, res, next) => {
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
app.get('/fullstandingspaheavy', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by standings.pa desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

app.get('/fullstandingspalight', (req, res, next) => {
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
app.get('/fullstandingsmembers', (req, res, next) => {
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
app.get('/fullstandingsbestrecords', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by CAST(SUBSTRING_INDEX(standings.record, '-', 1) AS UNSIGNED) desc`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

app.get('/fullstandingsworstrecords', (req, res, next) => {
  connection.query(`SELECT standings.*, owner.firstName, owner.lastName FROM standings left join owner on standings.id = owner.id order by CAST(SUBSTRING_INDEX(standings.record, '-', 1) AS UNSIGNED)`, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results)
  });
});

app.listen(process.env.PORT,
    console.log(`Server started on port ${process.env.PORT}`)
);