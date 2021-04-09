const express = require('express');
const router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { executeAndReturn } = require('../controllers/connection');

router.get("/", async (req, res, next) => {
    res.render('login');
});

router.post("/", async (req,res) => {
    let emailAddress = req.body.email;
    let password = req.body.password;
    let query = `SELECT * FROM ngo.user WHERE email = "${emailAddress}" AND password = "${password}"; `;
    let userInfo = await executeAndReturn(query);
        if(userInfo.length > 0) {
            req.session.isUserLoggedIn = true;
            console.log(userInfo);
            req.session.userEmail = emailAddress;
            /*console.log("authenticated");
            var token = jwt.sign({ mail }, process.env.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });*/
            res.redirect('/dashboard-user');
        }
    // }
})

module.exports = router;