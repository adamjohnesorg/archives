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

app.get('/', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
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