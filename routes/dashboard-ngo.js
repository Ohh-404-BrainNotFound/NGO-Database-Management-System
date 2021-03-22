var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./dashboard/home-ngo',{});
});

module.exports = router;
