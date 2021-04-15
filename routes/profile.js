var express = require('express');
var router = express.Router();
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
    console.log(userInfo);
    res.render('./dashboard/profile',{userInfo});
  })
});

router.post('/',upload.single('userimage') , async (req,res)=> {
  const {fname, lname, email, password, phoneNumber, address} = req.body;
  let query = `update ngo.user set fname = "${fname}" , lname = "${lname}"  , password = "${password}" , phoneNumber = "${phoneNumber}" , address = "${address}" where email = "${req.session.userEmail}" `
  await executeQuery(query)
  .then(async () => {
    if(req.file) {
      let userImage = {
        img: fs.readFileSync(req.file.path),
        file_name: req.file.filename
      };
      var imgQuery = `update ngo.user SET image = "${userImage.file_name}" where email = "${req.session.userEmail}" `
      await executeQuery(imgQuery)
      .then(() => {
        res.redirect('/dashboard-user');
      })
    }else {
      res.redirect('/dashboard-user');
    }
  })
})

router.post('/delete', async (req, res) => {
  let deleteQuery = `delete from ngo.user where email = "${req.body.userEmail}" `;
  await executeQuery(deleteQuery)
  .then(() => {
    res.redirect('/dashboard-user');
  })
})

module.exports = router;
