const express = require('express');
const router = express.Router();
// const connectionModule = require('../controllers/connection')
// const executeAndReturn = connectionModule.executeAndReturn;
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();

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

router.post("/", async(req,res) => {
    let emailAddress = req.body.email;
    let password = req.body.password;
    let query = `SELECT * FROM ngo.user WHERE email = "${emailAddress}" AND password = "${password}"; `;
    await connection.query(query, (err, result) => {
        if (err) {
            res.render('login',{});
        throw err
        }
        else{
        // return result;
        req.session.ok = "ok";
        if(result.length > 0) {
            req.session.isUserLoggedIn = true;
            req.session.ok = req.session.ok + "0k";
            console.log(result);
            // console.log(req.session.ok);
            req.session.userEmail = emailAddress;
            console.log("authenticated");
            res.redirect('/dashboard-user');
        }
    }
    })
    //console.log(sql);
    let userInfo = await executeAndReturn(sql);
    if(userInfo.length > 0) {
      req.session.isUserLoggedIn = true;
      res.session.userEmail = emailAddress;
      // res.redirect('/dashboard');
    console.log("authenticated");
    } else {
      //parsing appropriate error message
      res.render('ngo-login',{});
    }
})

module.exports = router;