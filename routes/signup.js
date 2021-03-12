const express=require('express');
const sql=require('mysql');
const router=express.Router();

router.post("/",(req,res,next)=>{
    console.log('Checking Data');
    console.log('req');
    res.send("<h1>f</h1>")
});
router.get("/",(req,res)=>{
    res.send('reached');
})
module.exports=router;