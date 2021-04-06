var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');// inside require put the address of db.js
// we have used two time because in the first it shows garbage value
router.get('/', function(req, res, next){    
res.render('auth/login', {
email: '',
password: ''     
})
})
// to get the value of email id from the login
router.get('/login', function(req, res, next){    
res.render('auth/login', {
email: '',
password: ''    
})
})
//we are checking the value and matching it with our database
router.post('/authentication', function(req, res, next) {
var email = req.body.email;
var password = req.body.password;
connection.query('SELECT * FROM ngosignup WHERE email = ? AND password = ?', [email, password], function(err, rows, fields) {
if(err) throw err
if (rows.length <= 0) {
req.flash('error', 'Please correct enter email and Password!')
res.redirect('/login')
}
else { 
req.session.loggedin = true;
req.session.email = email;
res.redirect('/home');
}            
})
})
router.get('/home', function(req, res, next) {
    if (req.session.loggedin) {
    res.render('auth/home', {
    email: req.session.email,     
    });
    } else {
    req.flash('success', 'Please login first!');
    res.redirect('/login');
    }
    });