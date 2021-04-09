var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const { executeAndReturn } = require('../controllers/connection');

router.get('/', async function(req, res, next) {
  //for production
  // const ngoMail = req.session.ngEmail;
  // for development
  const ngoMail = '12@gmail.com';
  const getDonors = `select * from ngo.ngo_donor_record where ngo_id = "${ngoMail}" `;
  let donationData = await executeAndReturn(getDonors);
  res.render('./dashboard/donor',{donationData});
});

module.exports = router;