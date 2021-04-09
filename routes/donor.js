var express = require('express');
var router = express.Router();
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

router.get('/', function(req, res, next) {
  //for production
  // const ngoMail = req.session.ngEmail;
  // for development
  const ngoMail = '12@gmail.com';
  const getDonors = `select * from ngo.ngo_donor_record where ngo_id = "${ngoMail}" `;
  connection.query(getDonors,(err,result) => {
    if(err)
    console.log(err);
    else {
      res.render('./dashboard/donor',{donationData: result});
    }
  })
});

module.exports = router;