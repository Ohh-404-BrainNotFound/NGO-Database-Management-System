var express = require('express');
var router = express.Router();
// var multer = require('multer');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        port: 3306
      }
)

//we will use below code for uploading image feature
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/public/uploads")      //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
    //   var regex = new RegExp('[^.]+$');
    //   let extension = file.originalname.match(regex);
      cb(null, "aassasas")
    }
  })

  
var upload = multer({
    storage: storage,
  });
*/

router.post('/', async function(req, res, next) {
  var data = req.body;
  console.log(data);
  console.log('Reached at starting of Insertion')
  var sqlQuery = `INSERT INTO ngo.ngodata (ngo_name,ngo_mail,ngo_password,ngo_info,government_id,ngo_address,ngo_bank,ngo_account,ngo_ifsccode) VALUES('${data.ngo_name}','${data.ngo_email}','${data.ngo_pass}','${data.ngo_information}','${data.ngo_id}','${data.address}','${data.bank_name}','${data.account_no}','${data.ifsc_code}')`;
  console.log("Query", sqlQuery);
  await connection.query(sqlQuery, (err, result) => {
    if (err)
    throw err;
    console.log('Data Inserted Successfully');
  })
  console.log(req.body);
});

module.exports = router;
