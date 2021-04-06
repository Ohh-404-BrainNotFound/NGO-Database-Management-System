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

module.exports = {connection, executeQuery};