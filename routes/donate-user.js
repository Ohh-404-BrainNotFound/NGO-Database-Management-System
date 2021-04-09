// # TODO swap donate-user with donor user once application functionaliy done 
var express = require('express');
const verify = require('../middleware/verify');
var router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { executeAndReturn } = require('../controllers/connection');
 
router.get('/', /*verify,*/async function(req, res, next) {
  let userDonationsQuery = `select * from ngo.donor where user_email = "${req.session.userEmail}" `;
  let donationData = await executeAndReturn(userDonationsQuery);
  if(donationData.length > 2) {
    res.render('./dashboard/donor-user',{donationData});
  } 
});

module.exports = router;
