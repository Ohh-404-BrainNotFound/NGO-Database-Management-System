const express = require('express');
const mysql = require('mysql');
const {query} = require('express');
const connectionModule  = require('../controllers/connection');

const router= express.Router();
require('dotenv').config();

const connection = mysql.createConnection({

    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    port: 3306
});

router.get('/',(req,res,next) => {
    const id=3|req.body.id;
    let query = `SELECT * from ngo.ngo where ngo_id=${id}`;

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
        description:result.details,
    })
}).catch((err)=>{throw err;})
});
router.post('/',(req,res,next) =>{
    const id=req.body.id;
    let query = `SELECT * from ngo.ngo where ngo_id=${id}`;

// res.render('./dashboard/ngo',{
//     name:'NGO',
//     description:'desc',
//     formed:'formed',
// })
connectionModule.executeAndReturn(query).then((result)=>{
    console.log('Result is ',result);
    res.render('./dashboard/ngo',{
        name:result.ngo_name,
        description:result.details,
    })
}).catch((err)=>{throw err;})
});

module.exports =router;