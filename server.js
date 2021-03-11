const express = require('express');
var sql = require('mysql');

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
  con.query("CREATE DATABASE ngo", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});
});
