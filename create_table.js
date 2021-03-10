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
  var sql = "CREATE TABLE Usertable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
});