// # TODO swap donate-user with donor user once application functionaliy done 
var express = require('express');
const verify = require('../middleware/verify');
var router = express.Router();
const mysql = require('mysql');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { executeQuery } = require('../controllers/connection');
const { makeid } = require('../controllers/utls');
 
const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
      }
)

router.get('/', /*verify,*/async function(req, res, next) {
  let userDonationsQuery = `select * from ngo.donor where user_email = "${req.session.userEmail}" `;
  await connection.query(userDonationsQuery, (err, result) => {
      if(err)
      console.log(err);
      else {
          res.render('./dashboard/donor-user',{donationData: result});
      }
  })
});

module.exports = router;
