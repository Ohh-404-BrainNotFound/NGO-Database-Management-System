const express=require('express');
const mysql=require('sql');
require('dotenv').config();
const router=require('router');

var con=mysql.CreateConnection(
    {
        host:'localhost',
        user:process.env.user,
        password:process.env.password,
        port:3306
    }
)

router.post("/",async (req,res,next)=>{
    var data=req.body;
console.log(data);
await con.connect(async (err)=>{
    if(err)
    throw err;
    var countRows='SELECT COUNT(*) from users';
    // var rows=await con.query(countRows,(err,result)=>{
    //     if(err)
    //     throw err;
    //     console.log('Counting Query Successfully');
    // })
    var rows=5;
    console.log('Reached at starting of Insertion')
    var sqlQuery=`INSERT INTO user VALUES(${rows+1},${data.fname},${data.lname},${data.email},${data.login_type},${data.pass},${data.address},${data.date},${data.number})`;
    await con.query(sqlQuery,(err,result)=>{
        if(err)
        throw err;
        console.log('Data Inserted Successfully');
    })
});
});
module.exports=router;