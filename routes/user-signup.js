const express = require('express');
const router = express.Router();
const connectionModule = require('../controllers/connection')
const execute = connectionModule.executeQuery;
const jwt = require('jsonwebtoken');

router.get("/", (req,res)=>{
    res.render('login');
})

router.post("/", async (req, res, next) => {
    var data = req.body;
    var sqlQuery = `INSERT INTO ngo.user (fName,lName,email,login_type,password,address,regDate,phoneNumber) VALUES('${data.fname}','${data.lname}','${data.email}','${data.login_type}','${data.pass}','${data.address}','${data.date}','${data.number}')`;
    await execute(sqlQuery);
    var email = data.email;
  /*  var token = jwt.sign({ email }, process.env.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });*/
});
module.exports = router;