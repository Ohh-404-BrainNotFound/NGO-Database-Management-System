var express = require('express');
const verify = require('../middleware/verify');
var router = express.Router();

/* GET users listing. */
router.get('/', /*verify,*/ function(req, res, next) {
  // if(isNgoLoggedIn)
  res.render('./dashboard/home-user',{});
  // else
  // res.render('login');
});

module.exports = router;
