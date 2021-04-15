var express = require('express');
var router = express.Router();
const { query } = require('express');
const mysql = require('mysql');
require('dotenv').config();
const connectModule = require("../controllers/connection");
const execute = connectModule.executeQuery;
const { executeAndReturn } = require("../controllers/connection");
const utils = require('../controllers/utls');
const upload = utils.upload;
const fs = require('fs');

router.get('/', async function(req, res, next) {
  let email = req.session.ngoEmail;
  console.log(email);
  let query = `SELECT * FROM ngo.ngodata WHERE ngo_mail = "${email}" `;
  await executeAndReturn(query)
  .then((data) => {
    let ngoInfo = data[0];
    res.render('./dashboard/ngo-profile',{ngoInfo});
  });
});

router.post('/',upload.single('ngoimage') ,async (req,res)=> {
    console.log(req.file);
    const {ngo_name, govtid, bank_name, acc_no, ifsc_code, info, address, password  } = req.body;
    let query = `update ngo.ngodata set ngo_name = "${ngo_name}" , government_id = "${govtid}",  ngo_info = "${info}", ngo_ifsccode = "${ifsc_code}", ngo_bank = "${bank_name}", ngo_account = "${acc_no}" ,ngo_password = "${password}" , ngo_address = "${address}" where ngo_mail = "${req.session.ngoEmail}" `
    await execute(query)
    .then(async () => {
      if(req.file) {
        let ngoImage = {
          img: fs.readFileSync(req.file.path),
          file_name: req.file.filename
        };
        var imgQuery = `update ngo.ngodata SET image = "${ngoImage.file_name}" where email = "${req.session.ngoEmail}" `
        await execute(imgQuery)
        .then(() => {
          res.redirect('/dashboard-ngo');
        }) 
    }else {
      res.redirect('/dashboard-user');
    }
    })
  })

  router.post('/delete', async (req, res) => {
    let deleteQuery = `delete from ngo.user where email = "${req.body.ngoEmail}" `;
    await executeQuery(deleteQuery)
    .then(() => {
      res.redirect('/dashboard-ngo');
    })
  })
  

module.exports = router;