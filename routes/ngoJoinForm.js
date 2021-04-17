const express=require('express');
const mysql= require('mysql');
require('dotenv').config();
const {query} =require('express');
const { executeAndReturn } = require('../controllers/connection');
const connectionModule  = require('../controllers/connection');

const execute =connectionModule.executeQuery;

const router=express.Router();



//Making a connection

router.get('/',(req,res,next) => {
    res.render('./dashboard/ngo-join-form',{});
});

router.post("/", async (req,res,next) => {

    let content = await req.body;
    let email= content.email;
    let password= content.password;
    await console.log('Content is', content);
    await console.log(typeof content);

    let query =`SELECT * from ngo.user where ngo.user.email='${email}' and ngo.user.password='${password}'`;
    await console.log('QUERY is ', query);
    executeAndReturn(query).then(async (result)=>{
        let desciption = content.description||"";
        await console.log('Result is ', result);
        var insertQuery=`INSERT INTO ngo.member (fName,lName,email,password,address, phoneNumber,JoinReason)
        VALUES ('${result.fName}','${result.lName}','${email}','${password}','${result.address}'
            ,'${result.phoneNumber}','${content.description}');
        `;
        await execute(insertQuery);
        res.status(200).send('Successfully Inserted');

    }).catch((err)=>{
throw err;
    });
});
module.exports=router;