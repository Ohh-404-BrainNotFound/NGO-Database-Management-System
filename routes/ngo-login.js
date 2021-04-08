const express = require('express');

var router = express.Router();
const jwt = require('jsonwebtoken');
// const connection = require('../controllers/connection');
// const executeAndReturn = connection.executeAndReturn;
// const util = require('../controllers/utls');
// const sleep = util.sleep;

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



router.get('/', (req, res, next) => {
  res.render('ngo-login');//login page name
});

router.post('/', async (req, res) => {
    let emailAddress = req.body.email_address;
    let password = req.body.password;
    let query = `SELECT * FROM ngo.ngodata WHERE ngo_email = "${emailAddress}" AND ngo_password = "${password}" `;
    await connection.query(query, (err, result) => {
      if (err) {
          res.render('login',{});
      throw err
      }
      else{
      // return result;
      if(result.length > 0) {
          req.session.isNgoLoggedIn = true;
          res.session.ngoEmail = emailAddress;
          console.log("authenticated");
          var token = jwt.sign({ emailAddress }, process.env.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          res.status(200).send({ auth: true, token: token });
          res.redirect('/dashboard-ngo');
      }
  }
  })
})

module.exports = router;
