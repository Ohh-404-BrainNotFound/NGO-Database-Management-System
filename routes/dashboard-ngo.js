var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const {isNgoLoggedIn, ngoEmail} = req.session;
  if(isNgoLoggedIn) {
    //parse ngoEmail to ngo-dashboard
    res.render('./dashboard/home-ngo',{})
  } else {
    res.redirect('/login')
  }
});

module.exports = router;
