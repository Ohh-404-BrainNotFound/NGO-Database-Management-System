const express=require('express');
const router=express.Router();

router.get('/',(req,res,next) => {
    res.render('./dashboard/ngo-join-form',{});
});

module.exports=router;