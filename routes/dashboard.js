var express = require('express');
const verify = require('../middleware/verify');
var router = express.Router();
const { executeAndReturn, executeQuery } = require('../controllers/connection');
const { makeid, userImageUpload } = require('../controllers/utls');
const fs = require('fs');

//Removign Get Request for Dashboard
router.get("/",(req,res,next) => {

  const obj = {
    name: req.session.fName,
  };
  const stringified = JSON.stringify(obj);
  res.render('./dashboard/welcome-user',obj)
});

router.post("/",(req,res,next) => {
  const user = req.body;
  res.render('./dashboard/welcome-user',{
    name:user.fName
  })
});

router.get('/ngo-list', async function(req, res, next) {
  let query = `select * from ngo.ngodata`;
  await executeAndReturn(query)
  .then((response) => {
    console.log(response);
    res.render('./dashboard/ngo-list',{
      response,
      image:response.image||'DoT.jpg'
    });
  })
});

router.get('/donations', /*verify,*/async function(req, res, next) {
  const email = req.session.userEmail||"test@gmail.com";
  let userDonationsQuery = `select * from ngo.donor where user_email = "${email}" `;
  let donationData = await executeAndReturn(userDonationsQuery);
  if(donationData.length > 2) {
    res.render('./dashboard/donor-user',{donationData});
  } 
});

router.get('/profile', async function(req, res, next) {
  let email = req.session.userEmail||"test@gmail.com";
  console.log(email);
  let query = `SELECT * FROM ngo.user WHERE email = "${email}" `;
  await executeAndReturn(query)
  .then((result) => {
    const userInfo = result[0];
    console.log(userInfo);
    res.render('./dashboard/profile',{userInfo});
  })
});

router.post('/profile',userImageUpload.single('userimage') , async (req,res)=> {
  const {fname, lname, email, password, phoneNumber, address} = req.body;
  const useremail = req.session.userEmail||"test@gmail.com";
  let query = `update ngo.user set fname = "${fname}" , lname = "${lname}"  , password = "${password}" , phoneNumber = "${phoneNumber}" , address = "${address}" where email = "${useremail}" `
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

router.post('/profile/delete', async (req, res) => {
  const email = req.body.userEmail||"test@gmail.com";
  let deleteQuery = `delete from ngo.user where email = "${email}" `;
  await executeQuery(deleteQuery)
  .then(() => {
    res.redirect('/dashboard-user');
  })
})

router.get('/donor-user/:id', async function(req, res, next) {
  req.session.forDonation = req.params.id;
  let query = `select image from ngo.ngodata where ngo_mail = "${req.params.id}";`
  await executeAndReturn(query)
  .then((data) => {
    res.render('./dashboard/donate',{data});
  })
});

//below data is just for testing purpose 
router.post('/donor-user', async (req,res) => {
    const ngoName = "test";
    const userEmail = req.session.userEmail||"test@gmail.com";
    const ngoEmail = "ngo@gmail.com";
    // const ngoEmail =  req.session.forDonation;
    const donationAmount = req.body.donation;
    const donorId = await makeid(6);
    let userInfoQuery = `SELECT * FROM ngo.user WHERE email = "${userEmail}"`;
    await executeAndReturn(userInfoQuery)
    .then(async (response)=> {
      const { fname } = response[0];
      const donorName = fname;
      let userDonationQuery = `INSERT INTO ngo.donor (donor_id, donor_name, user_email, amount, ngo_name) VALUES('${donorId}','${donorName}','${userEmail}','${donationAmount}','${ngoName}')`;
      await executeQuery(userDonationQuery)
      .then(async ()=> {
        let ngoDonationQuery = `INSERT INTO ngo.ngo_donor_record (donor_id, donor_name, ngo_id, amount, ngo_name, user_email) VALUES('${donorId}','${donorName}','${ngoEmail}','${donationAmount}','${ngoName}','${userEmail}')`;
        await executeQuery(ngoDonationQuery)
        .then(()=>{
          res.redirect('/success');
        })
      })
    })
  })


module.exports = router;
