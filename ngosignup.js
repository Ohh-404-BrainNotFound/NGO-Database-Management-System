var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

router.get('/register', function(req, res, next){    
res.render('auth/register', {
ngomail: '',
ngo_name: '',
ngo_password: '',
ngo_info: '',
government_id: '',
ngo_address:'',
ngo_bank:'',
ngo_account:'',
ngo_ifsccode:''    
})
})
// user registration
router.post('/post-register', function(req, res, next){    
req.assert('ngomail', 'A valid email is required').isEmail()          
req.assert('ngo_name', 'name is required').notEmpty()   
req.assert('ngo_password', 'password is required').notEmpty()  
req.assert('ngo_info', 'info is required').notEmpty()  
req.assert('government_id', 'government_id is required').notEmpty()  
req.assert('ngo_address', 'address is required').notEmpty()  
req.assert('ngo_bank', 'bank name is required').notEmpty()  
req.assert('ngo_account', 'Bank account is required').notEmpty()  
req.assert('ngo_ifsccode', 'Bank ifsc code is required').notEmpty()  
var errors = req.validationErrors()
if( !errors ) {   //No errors were found.  Passed Validation!
var user = {
ngomail: req.sanitize('ngomail').escape().trim(),
ngo_name: req.sanitize('ngo_name').escape().trim(),
ngo_password: req.sanitize('ngo_password').escape().trim(),
ngo_info: req.sanitize('ngo_info').escape().trim(),
government_id: req.sanitize('government_id').escape().trim(),
ngo_address: req.sanitize('ngo_address').escape().trim(),
ngo_bank: req.sanitize('ngo_bank').escape().trim(),
ngo_account: req.sanitize('ngo_account').escape().trim(),
ngo_ifsccode: req.sanitize('ngo_ifsccode').escape().trim()
}
connection.query('INSERT INTO ngosignup SET ?', user, function(err, result) {
if (err) {
req.flash('error', err)
res.render('auth/register', {
    ngomail: '',
    ngo_name: '',
    ngo_password: '',
    ngo_info: '',
    government_id: '',
    ngo_address:'',
    ngo_bank:'',
    ngo_account:'',
    ngo_ifsccode:''                    
})
} else {                
req.flash('success', 'You have successfully signup!');
res.redirect('/login');
}
})
}
else {   //Display errors to user
var error_msg = ''
errors.forEach(function(error) {
error_msg += error.msg + '<br>'
})                
req.flash('error', error_msg)     
}
})