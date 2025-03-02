const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on load
  queueLimit: 0,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true
});

// Export the connection pool with promises for async/await support
module.exports = pool