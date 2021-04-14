const express = require('express');
const router = express.Router();
const { executeAndReturn } = require('../controllers/connection');

router.get('/', async function(req, res, next) {
  // let ngoMail = req.session.ngoEmail;
  let ngoMail = "12@gmail.com";
  let query = `select * from ngo.ngo_member where ngo_mail = "${ngoMail}" `;
  await executeAndReturn(query)
  .then((data) => {
    res.render('./dashboard/member',{memberData: data});
  });
});

module.exports = router;
