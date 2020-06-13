const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "project2_db"
});

//connects to the deployed Heroku DB 
// const connection = mysql.createConnection({
//    host:"qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",	
//    user: "oaw9hcazqkwi0fd7",	
//    password: "opcanhk0crezoflj",	
//    port: 3306,	
//    database: "dfbs7vcu2m1nh29q"
// });

module.exports = connection;
