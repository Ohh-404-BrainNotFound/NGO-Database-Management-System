var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const connectModule = require("../controllers/connection");
const execute = connectModule.executeQuery;
const utils = require('../controllers/utls');
const upload = utils.upload;
const fs = require('fs');

const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
      }
)


router.get('/', async function(req, res, next) {
  let email = req.session.userEmail;
  console.log(email);
  let query = `SELECT * FROM ngo.user WHERE email = "${req.session.userEmail}" `;
  await connection.query(query, (err, result) => {
      if (err) {
          res.render('login',{});
      throw err
      }
      else{
        let userInfo = result[0];
       res.render('./dashboard/profile',{userInfo});
  }
  })
});

router.post('/',upload.single('userimage') ,async (req,res)=> {
  console.log(req.file);
  const {fname, lname, email, password, phoneNumber, address} = req.body;
  let query = `update ngo.user set fname = "${fname}" ,  lname = "${lname}"  , password = "${password}" , phoneNumber = "${phoneNumber}" , address = "${address}" where email = "${req.session.userEmail}" `
  await execute(query);
  let userImage = {
    img: fs.readFileSync(req.file.path),
    file_name: req.file.filename
  };
  var imgQuery = `update ngo.user SET image = "${userImage.file_name}" where email = "${req.session.userEmail}" `
  await execute(imgQuery);
})

module.exports = router;
