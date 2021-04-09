var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { executeQuery, executeAndReturn } = require('../controllers/connection');
const { makeid } = require('../controllers/utls');
 
router.get('/', function(req, res, next) {
  res.render('./dashboard/donate',{});
});

//below data is just for testing purpose 
router.post('/', async (req,res) => {
    const ngoName = "test";
    const userEmail = req.session.userEmail;
    const ngoEmail = "12@gmail.com";
    const donationAmount = req.body.donation;
    const donorId = await makeid(6);
    let userInfoQuery = `SELECT * FROM ngo.user WHERE email = "${userEmail}"`;
    let userData = await executeAndReturn(userInfoQuery);
    const { fname } = userData[0];
    const donorName = fname;
    // await connection.query(userInfoQuery, async (err, result) => {
    //   if(err)
    //   throw err;
    //   else {
    //     console.log(result[0]);
    //     const {fname } = result[0];
    //     const donorName = fname;
        
    //   }
    // });
    let userDonationQuery = `INSERT INTO ngo.donor (donor_id, donor_name, user_email, amount, ngo_name) VALUES('${donorId}','${donorName}','${userEmail}','${donationAmount}','${ngoName}')`;
    await executeQuery(userDonationQuery);
    let ngoDonationQuery = `INSERT INTO ngo.ngo_donor_record (donor_id, donor_name, ngo_id, amount, ngo_name) VALUES('${donorId}','${donorName}','${ngoEmail}','${donationAmount}','${ngoName}')`;
    await executeQuery(ngoDonationQuery);
})

module.exports = router;
