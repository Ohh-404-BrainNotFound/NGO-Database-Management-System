const express = require('express');
var sql = require('mysql');

var connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hariom123@',
  database: 'ngo'
});

conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE ngo", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});
});