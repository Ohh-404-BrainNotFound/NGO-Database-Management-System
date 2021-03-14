var express=require('express');
var sql=require('mysql');
var router=express.Router();

router.post("/",(req,res,next)=>{
    console.log("data",req.body)
    console.log('Checking Data');
    console.log('req');
   res.render('frontpage',{});
});
router.get("/",(req,res)=>{
    res.send('reached');
})
module.exports=router;