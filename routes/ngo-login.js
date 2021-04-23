const express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('../controllers/connection');
const executeAndReturn = connection.executeAndReturn;
require('dotenv').config();

router.get('/', (req, res, next) => {
  res.render('ngo-login');//login page name
});

router.post('/', async (req, res) => {
    let emailAddress = req.body.email_address;
    let password = req.body.password;
    console.log("ayya");
    let query = `SELECT * FROM ngo.ngodata WHERE ngo_mail = "${emailAddress}" AND ngo_password = "${password}" `;
    let ngoInfo = await executeAndReturn(query);
    if(ngoInfo.length > 0) {
      req.session.isNgoLoggedIn = true;
      req.session.ngoEmail = emailAddress;
      console.log("authenticated");
      res.redirect('/dashboard-ngo');
      // var token = jwt.sign({ emailAddress }, process.env.secret, {
      //   expiresIn: 86400 // expires in 24 hours
      // });
      // res.
      // status(200)
      // send({ auth: true, token: token });  
      // next();
    } else {
      res.redirect('/ngo-login');
    }
  });

module.exports = router;
