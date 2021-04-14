var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const { executeAndReturn, executeQuery } = require('../controllers/connection');
const utils = require('../controllers/utls');
const upload = utils.upload;
const fs = require('fs');

router.get('/', async function(req, res, next) {
  let email = req.session.userEmail;
  console.log(email);
  let query = `SELECT * FROM ngo.user WHERE email = "${req.session.userEmail}" `;
  await executeAndReturn(query)
  .then((result) => {
    const userInfo = result[0];
    res.render('./dashboard/profile',{userInfo});
  })
});

router.post('/',upload.single('userimage') , async (req,res)=> {
  console.log(req.file);
  const {fname, lname, email, password, phoneNumber, address} = req.body;
  let query = `update ngo.user set fname = "${fname}" ,  lname = "${lname}"  , password = "${password}" , phoneNumber = "${phoneNumber}" , address = "${address}" where email = "${req.session.userEmail}" `
  await executeQuery(query);
  let userImage = {
    img: fs.readFileSync(req.file.path),
    file_name: req.file.filename
  };
  var imgQuery = `update ngo.user SET image = "${userImage.file_name}" where email = "${req.session.userEmail}" `
  await execute(imgQuery);
})

module.exports = router;
