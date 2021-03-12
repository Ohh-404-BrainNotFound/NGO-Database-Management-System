const express=require('express');
const sql=require('mysql');
const router=express.Router();

router.post("/signup",(req,res)=>{
    console.log('Checking Data');
    console.log('req');
    res.send('<h1>Hey there</h1>')
});

module.exports=router;