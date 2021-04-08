var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const connectModule = require("../controllers/connection");
const execute = connectModule.executeQuery;

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

router.post('/',async (req,res)=> {
  //disbale safe mode and then the below query for update will run
  const {fname, lname, email, password, phoneNumber, address} = req.body.info;
  let query = `update ngo.user set fname = "${fname}" ,  lname = "${lname}"  , password = "${password}" , phoneNumber = "${phoneNumber}" , address = "${address}" where email = "${req.session.userEmail}" `
  await execute(query);
})

module.exports = router;
