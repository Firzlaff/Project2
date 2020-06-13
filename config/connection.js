// Requiring the mysql package so it can be used
const mysql = require("mysql");
// requiring the .env file to secure protected data with environmental variables
require("dotenv").config();

// connects to the deployed Heroku Database
const connection = mysql.createConnection({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   port: process.env.PORT,
   database: process.env.DATA_BASE
});

module.exports = connection;
