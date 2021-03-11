const express = require('express');
var sql = require('mysql');
require('dotenv').config();

var con = sql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: process.env.user,
  password: process.env.password,
  database: 'sql6398126',
  port:3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Usertable (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(255),lname VARCHAR(255),email VARCHAR(255), login_type VARCHAR(255),password VARCHAR(255), address VARCHAR(255),RegDate timestamp NULL DEFAULT current_timestamp())";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
});
