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
    console.log('Reached at starting of Insertion')
    // var sqlQuery='INSERT INTO user VALUES()'
});
});
module.exports=router;