const express = require('express');
const mysql = require('mysql');
const {query} = require('express');
const connectionModule  = require('../controllers/connection');

const router= express.Router();
require('dotenv').config();

router.get('/',(req,res,next) => {
    // const id=3|req.body.id;
    // const email = req.session.ngoEmail;
    const email = '12@gmail.com'; //temp ngo mail
    // let query = `SELECT * from ngo.ngo where ngo_id=${id}`;
    let query = `SELECT * from ngo.ngodata where ngo_mail = "${email}" `;


// res.render('./dashboard/ngo',{
//     name:'NGO',
//     description:'desc',
//     formed:'formed',
// })
connectionModule.executeAndReturn(query).then((result)=>{
    console.log('Result is ',result);
    result=result[0];
    res.render('./dashboard/ngo',{
        name:result.ngo_name,
        description:result.ngo_info,
        mail: result.ngo_mail,
        image: result.image
    })
}).catch((err)=>{throw err;})

});
router.post('/',(req,res,next) =>{
    // const id=req.body.id;
    const email = "12@gmail.com";
    // let query = `SELECT * from ngo.ngo where ngo_id=${id}`;
    let query = `SELECT * from ngo.ngodata where ngo_mail= "${email}" `;
    
connectionModule.executeAndReturn(query).then((result)=>{
    console.log('Result is ',result);
    res.render('./dashboard/ngo',{
        name: result.ngo_name,
        // description: result.details,
        description: result.ngo_info,
   
        
    })
}).catch((err)=>{throw err;})
});

module.exports =router;