var express = require('express');
var router = express.Router();
const verify = require("../middleware/verify")

router.get('/', /*verify ,*/ (req, res, next) => {
  // const {isNgoLoggedIn, ngoEmail} = req.session;
  // if(req.session.isNgoLoggedIn) {
    res.render('./dashboard/home-ngo',{})
  // } else {
    // res.redirect('/login')
  // }
});

module.exports = router;
