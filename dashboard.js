var express = require('express');
var router = express.Router();
router.get('/dashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('dashboard',{email:req.session.ngo_email})
    }else{
        res.redirect('/login');
    }
});
module.exports = router;
