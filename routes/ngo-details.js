const express = require('express');

const router= express.Router();

router.get('/',(req,res,next) => {
    res.render('./dashboard/ngo-details',{
        name:'NGO',
        description:'desc',
        formed:'formed',
    })
});
router.post('/',(req,res,next) =>{
    console.log(req.body);
res.render('./dashboard/ngo-details',{
    name:'NGO',
    description:'desc',
    formed:'formed',
})
});

module.exports =router;