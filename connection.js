require('dotenv').config();
const mysql = require('mysql2')

 const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })

conn.connect((err)=>{
  if(err){
    console.log("Error connecting to Database");
  } else {
    console.log("Connection to Database established");
  }
});

module.exports = conn;