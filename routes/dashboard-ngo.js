var express = require('express');
var router = express.Router();
const verify = require("../middleware/verify")
const { executeAndReturn } = require('../controllers/connection')

router.get('/', /*verify ,*/ (req, res, next) => {
  let query = `select ngo_name from ngo.ngodata where ngo_mail = "${req.session.ngoEmail}"`;
  // const {isNgoLoggedIn, ngoEmail} = req.session;
  // if(req.session.isNgoLoggedIn) {
      res.render('./dashboard/welcome-ngo',{})
  // } else {
    // res.redirect('/login')
  // }
});

router.get('/donors', async function(req, res, next) {
  //for production
  // const ngoMail = req.session.ngEmail;
  // for development
  const ngoMail = '12@gmail.com';
  const getDonors = `select * from ngo.ngo_donor_record where ngo_id = "${ngoMail}" `;
  await executeAndReturn(getDonors)
  .then((donationData) => {
    let total = 0;
    donationData.map((data) => {
      total += data.amount;
    })
    res.render('./dashboard/donor',{donationData, total});
  })
});

router.get('/members', async function(req, res, next) {
  // let ngoMail = req.session.ngoEmail;
  let ngoMail = "12@gmail.com";
  let query = `select * from ngo.ngo_member where ngo_mail = "${ngoMail}" `;
  await executeAndReturn(query)
  .then((data) => {
    res.render('./dashboard/member',{memberData: data});
  });
});

const connectModule = require("../controllers/connection");
const execute = connectModule.executeQuery;
const utils = require('../controllers/utls');
const upload = utils.upload;
const fs = require('fs');

router.get('/ngo-profile/', async function(req, res, next) {
  let email = req.session.ngoEmail;
  console.log(email);
  let query = `SELECT * FROM ngo.ngodata WHERE ngo_mail = "${email}" `;
  await executeAndReturn(query)
  .then((data) => {
    let ngoInfo = data[0];
    res.render('./dashboard/ngo-profile',{ngoInfo});
  });
});

router.post('/ngo-profile/',upload.single('ngoimage') ,async (req,res)=> {
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
        var imgQuery = `update ngo.ngodata SET image = "${ngoImage.file_name}" where ngo_mail = "${req.session.ngoEmail}" `
        await execute(imgQuery)
        .then(() => {
          res.redirect('/dashboard-ngo');
        }) 
    }else {
      res.redirect('/dashboard-user');
    }
    })
  })

  router.post('/ngo-profile/delete', async (req, res) => {
    let deleteQuery = `delete from ngo.user where email = "${req.body.ngoEmail}" `;
    await executeQuery(deleteQuery)
    .then(() => {
      res.redirect('/dashboard-ngo');
    })
  })

  router.get('/top-donors', async function(req, res, next) {
    //for actual use
    //const ngoEmail = req.session.ngoEmail;
    //for testing purpose
      const ngoEmail = '12@gmail.com';
      let getMaxDonors = ` SELECT donor_name , sum(amount) as total_donation from ngo.ngo_donor_record group by donor_name order by sum(amount) desc limit 3; `;
      await executeAndReturn(getMaxDonors)
      .then((data) => {
        console.log(data);
        res.render('./dashboard/topdonor',{donorData: data});
      })
    });

    // const { upload } = require('../controllers/utls');
const { executeQuery } = require('../controllers/connection');

router.get('/add-member', function(req, res, next) {
  res.render('./dashboard/add-member',{});
});

router.post('/add-member' ,upload.single('member-image'), async (req,res) => {
  const email = '12@gmail.com';
  let insertMember = `insert into ngo.ngo_member (name, ngo_mail, designation, image) values("${req.body.name}" , "${email}", "${req.body.designation}" ,"${req.file.filename}")`;
  await executeQuery(insertMember);
})

module.exports = router;
