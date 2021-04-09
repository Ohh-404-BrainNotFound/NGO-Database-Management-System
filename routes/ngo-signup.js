var express = require('express');
const connectionModule  = require('../controllers/connection');

const execute = connectionModule.executeQuery;
var router = express.Router();
router.post('/', async function(req, res, next) {
  var data = req.body;
  console.log(data);
  const sqlQuery = `INSERT INTO ngo.ngodata (ngo_name,ngo_mail,ngo_password,ngo_info,government_id,ngo_address,ngo_bank,ngo_account,ngo_ifsccode) VALUES('${data.ngo_name}','${data.ngo_email}','${data.ngo_pass}','${data.ngo_information}','${data.ngo_id}','${data.address}','${data.bank_name}','${data.account_no}','${data.ifsc_code}')`;
  await execute(sqlQuery)
  let mail = data.ngo_email;/*
  var token = jwt.sign({ mail }, process.env.secret, {
    expiresIn: 86400 // expires in 24 hours
  });
  res.status(200).send({ auth: true, token: token });*/
});

module.exports = router;
