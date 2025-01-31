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

console.log(process.env.USERNAME)

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// API for roster objects
app.get('/roster', (req, res, next) => {
    connection.query('SELECT * FROM roster', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results)
    });
  });

// API for standings objects
app.get('/standings', (req, res, next) => {
  connection.query('SELECT * FROM standings', (err, results) => {
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
  connection.query('SELECT * FROM champions', (err, results) => {
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
  connection.query('SELECT * FROM draft', (err, results) => {
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
  connection.query('SELECT * FROM owner', (err, results) => {
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