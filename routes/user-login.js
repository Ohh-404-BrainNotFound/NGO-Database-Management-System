const express = require('express');

const router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { executeAndReturn } = require('../controllers/connection');

const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
      }
)


router.get("/", async (req, res, next) => {
    res.render('login');
});

router.post("/", async (req,res) => {
    let emailAddress = req.body.email;
    let password = req.body.password;
    let query = `SELECT * FROM ngo.user WHERE email = "${emailAddress}" AND password = "${password}"; `;
    await connection.query(query, async (err, result) => {
        if (err) {
            res.render('login',{});
        throw err
        }
        else{
           const sql='SELECT * from ngo.user'
    let userInfo = await executeAndReturn(sql);
    // await console.log("oye",userInfo);
        if(result.length > 0) {
            req.session.isUserLoggedIn = true;
            console.log(result);
            // const mail = result[0].email;
            // console.log(req.session.ok);
            req.session.userEmail = emailAddress;
            /*console.log("authenticated");
            var token = jwt.sign({ mail }, process.env.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });*/
            res.redirect('/dashboard-user');
        }
    // }
    // })
    // const sql='SELECT * from ngo.user'
    // let userInfo = await executeAndReturn(sql);
    // if(userInfo.length > 0) {
    //   req.session.isUserLoggedIn = true;
    //   res.session.userEmail = emailAddress;
    //   // res.redirect('/dashboard');
    // console.log("authenticated");
    // res.render('dashboard',{});
    // } else {
    //   //parsing appropriate error message
    //   res.render('ngo-login',{});
    }
})
})

module.exports = router;