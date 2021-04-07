var express = require('express');
var router = express.Router();
const connectionModule  = require('../controllers/connection');
const execute = connectionModule.executeQuery;

router.post('/', async function(req, res, next) {
  var data = req.body;
  console.log(data);
  const sqlQuery = `INSERT INTO ngo.ngodata (ngo_name,ngo_mail,ngo_password,ngo_info,government_id,ngo_address,ngo_bank,ngo_account,ngo_ifsccode) VALUES('${data.ngo_name}','${data.ngo_email}','${data.ngo_pass}','${data.ngo_information}','${data.ngo_id}','${data.address}','${data.bank_name}','${data.account_no}','${data.ifsc_code}')`;
  await execute(sqlQuery)
});

module.exports = router;
