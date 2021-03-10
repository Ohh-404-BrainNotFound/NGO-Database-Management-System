const express = require('express');
var sql = require('mysql');

var con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hariom123@',
  database: 'ngo'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE ngo", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});
});
