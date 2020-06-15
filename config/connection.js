// Requiring the mysql package so it can be used
const mysql = require("mysql");
// requiring the .env file to secure protected data with environmental variables
require("dotenv").config();

// connects to the deployed Heroku Database
const connection = mysql.createConnection({
   host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
   user:"oaw9hcazqkwi0fd7",
   password:"opcanhk0crezoflj",
   port:3306,
   database: "dfbs7vcu2m1nh29q"
});

module.exports = connection;
