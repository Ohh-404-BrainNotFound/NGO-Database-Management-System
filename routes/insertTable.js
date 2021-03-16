const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const router = express.Router();
var con = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
    }
)

router.post("/", async (req, res, next) => {
    var data = req.body;
    console.log(data);
    await con.connect(async (err) => {
        if (err)
            throw err;
        // var countRows='SELECT COUNT(*) from users';
        // var rows=await con.query(countRows,(err,result)=>{
        //     if(err)
        //     throw err;
        //     console.log('Counting Query Successfully');
        // })
        var rows = 1;
        console.log('Reached at starting of Insertion')
        var sqlQuery = `INSERT INTO ngo.user VALUES(1,'${data.fname}','${data.lname}','${data.email}','${data.login_type}','${data.pass}','${data.address}','${data.date}','${data.number}')`;
        console.log("Query", sqlQuery);
        await con.query(sqlQuery, (err, result) => {
            if (err)
                throw err;
            console.log('Data Inserted Successfully');
        })
    });
});
module.exports = router;