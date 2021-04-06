var express = require('express');
var router = express.Router();
var db=require('../lib/db');//where you have saved the db.js
router.get('/register', function(req, res, next) {
  res.render('registration-form');
});
// to store user input detail on post request
router.post('/register', function(req, res, next) {
    //the value(name="") which you have put in the form  to be used after body.
    inputData ={
        ngo_name: req.body.ngo_name,
        email_address: req.body.email_address,
        ngo_password: req.body.password,
        ngo_confirm_password: req.body.confirm_password,
        ngo_info: req.body.ngo_info,
        government_id: req.body.government_id,
        ngo_address: req.body.ngo_address,
        ngo_bank:req.body.ngo_bank,
        ngo_account: req.body.ngo_account,
        ngo_ifsc: req.body.ifsc
    }
 if(inputData.confirm_password != inputData.password){
    var msg ="Password & Confirm Password is not Matched";
 }else{
     
    // save users data into database
    var sql = 'INSERT INTO ngosignup SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('registration-form',{alertMsg:msg});// the form address inside render
});
module.exports = router;

