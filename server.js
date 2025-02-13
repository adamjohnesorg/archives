const express = require("express");
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config({ path: path.join(__dirname, './.env') })

const PORT = process.env.PORT || 3000;

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

// Import API routes
const standingsRoutes = require("./routes/api/Standings");
const rostersRoutes = require("./routes/api/Rosters")
const championsRoutes = require("./routes/api/Champions")
const ownersRoutes = require("./routes/api/Owners")
const draftsRoutes = require("./routes/api/Drafts")
const playersRoutes = require("./routes/api/Players")

app.use("/api", standingsRoutes); // Prefix all API routes with '/api'
app.use("/api", rostersRoutes)
app.use("/api", championsRoutes)
app.use("/api", ownersRoutes)
app.use("/api", draftsRoutes)
app.use("/api", playersRoutes)

app.listen(process.env.PORT,
    console.log(`Server started on port ${process.env.PORT}`)
);