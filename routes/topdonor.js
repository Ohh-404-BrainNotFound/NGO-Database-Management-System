const express = require('express');
const router = express.Router();
const { executeAndReturn } = require('../controllers/connection');

router.get('/', function(req, res, next) {
//for actual use
//const ngoEmail = req.session.ngoEmail;
//for testing purpose
const ngoEmail = '12@gmail.com';
  res.render('./dashboard/topdonor',{});
});

module.exports = router;
