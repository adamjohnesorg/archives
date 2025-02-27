allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [
      'http://localhost:8080', // Keep for local testing
    ];

module.exports = allowedOrigins;