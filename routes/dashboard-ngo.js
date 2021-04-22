var express = require('express');
var router = express.Router();
const verify = require("../middleware/verify")
const { executeAndReturn } = require('../controllers/connection')

router.get('/', /*verify ,*/ (req, res, next) => {
  let query = `select ngo_name from ngo.ngodata where ngo_mail = "${req.session.ngoEmail}"`;
  // const {isNgoLoggedIn, ngoEmail} = req.session;
  // if(req.session.isNgoLoggedIn) {
      res.render('./dashboard/welcome-ngo',{})
  // } else {
    // res.redirect('/login')
  // }
});

module.exports = router;
