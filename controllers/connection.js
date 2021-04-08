const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
      }
)

const executeQuery = async (query)=> {
    await connection.query(query, (err, result) => {
        if (err)
        throw err;
        console.log('Data Inserted Successfully');
    })
}

const executeAndReturn = async (query)=> {
    connection.query(query, async (err, result) => {
        if (err)
            throw err;
        else {
             return result;
        }
    })
}

const executeAndCheck = async (query, checkData) => {
    await connection.query(query, checkData, (err, result) => {
        if (err)
        throw err;
        else
        return 1;
    })
}

module.exports = {connection, executeQuery, executeAndReturn, executeAndCheck};