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
  let email = req.session.ngoEmail;
  console.log(email);
  let query = `SELECT * FROM ngo.ngodata WHERE ngo_mail = "${email}" `;
  await connection.query(query, (err, result) => {
      if (err) {
          res.render('ngo-login',{});
      throw err
      }
      else{
        let ngoInfo = result[0];
        console.log(ngoInfo);
       res.render('./dashboard/ngo-profile',{ngoInfo});
  }
  })
});

router.post('/',upload.single('ngoimage') ,async (req,res)=> {
    console.log(req.file);
    const {ngo_name, govtid, bank_name, acc_no, ifsc_code, info, address, password  } = req.body;
    let query = `update ngo.ngodata set ngo_name = "${ngo_name}" , government_id = "${govtid}",  ngo_info = "${info}", ngo_ifsccode = "${ifsc_code}", ngo_bank = "${bank_name}", ngo_account = "${acc_no}" ,ngo_password = "${password}" , ngo_address = "${address}" where ngo_mail = "${req.session.ngoEmail}" `
    await execute(query);
    if(req.file) {
    let ngoImage = {
      img: fs.readFileSync(req.file.path),
      file_name: req.file.filename
    };
    var imgQuery = `update ngo.ngodata SET image = "${ngoImage.file_name}" where email = "${req.session.ngoEmail}" `
    await execute(imgQuery); 
}
  })
  

module.exports = router;