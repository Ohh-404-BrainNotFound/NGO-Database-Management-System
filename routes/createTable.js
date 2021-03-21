const express = require('express');
var sql = require('mysql');
require('dotenv').config();
var router = express.Router();

var con = sql.createConnection({
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    port:3306
  }); 
  

router.get('/', async function(req, res, next) {
 await  con.connect(async function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE DATABASE ngo \n CREATE TABLE Usertable (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(255),lname VARCHAR(255),email VARCHAR(255), login_type VARCHAR(255),password VARCHAR(255), address VARCHAR(255),RegDate date, phoneNumber char(10))";
    await con.query(sql, function (err, result) {
      if (err) throw err; 
      console.log("Table created");
    });
  });
});

module.exports = router;




