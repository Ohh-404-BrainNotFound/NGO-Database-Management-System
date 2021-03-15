var express=require('express');
var sql=require('mysql');
var router=express.Router();

router.post("/",(req,res,next)=>{
   
});
router.get("/",(req,res)=>{
    res.send('reached');
})
module.exports=router;