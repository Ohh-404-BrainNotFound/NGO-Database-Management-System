const express = require('express');
const router = express.Router();
const { executeAndReturn } = require('../controllers/connection');

router.get('/', async function(req, res, next) {
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

module.exports = router;
