let express = require('express');
let router = express.Router();
let db=require('../lib/db');//where you have stored the db.js
//GET users listing. 
router.get('/login', function(req, res, next) {
  res.render('login-form');
});
router.post('/login', function(req, res){
    let emailAddress = req.body.email_address;
    let password = req.body.password;
    let sql='SELECT * FROM ngosignup WHERE email_address =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            res.redirect('/dashboard');
        }else{
            res.render('login-form',{alertMsg:"Your Email Address or password is wrong"});
        }
    })
})
module.exports = router;
