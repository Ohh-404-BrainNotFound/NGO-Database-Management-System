var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.session.userEmail);
  res.render('./dashboard/home-user',{});
});

module.exports = router;
