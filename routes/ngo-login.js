const express = require('express');
var router = express.Router();
const connection = require('../controllers/connection');
const executeAndReturn = connection.executeAndReturn;

router.get('/', (req, res, next) => {
  res.render('ngo-login');//login page name
});

router.post('/', async (req, res) => {
    let emailAddress = req.body.email_address;
    let password = req.body.password;
    let sql= `SELECT * FROM ngosignup WHERE email_address = ${emailAddress} AND password = ${password} ?`;
    let ngoInfo = await executeAndReturn(sql);
    if(ngoInfo.length > 0) {
      req.session.isNgoLoggedIn = true;
      res.session.ngoEmail = emailAddress;
      res.redirect('/dashboard');
    } else {
      //parsing appropriate error message
      res.render('ngo-login',{});
    }
})

module.exports = router;
