var express = require('express');
var router = express.Router();
const { upload } = require('../controllers/utls');
const { executeQuery } = require('../controllers/connection');

router.get('/', function(req, res, next) {
  res.render('./dashboard/add-member',{});
});

router.post('/' ,upload.single('member-image'), async (req,res) => {
  const email = '12@gmail.com';
  let insertMember = `insert into ngo.ngo_member (name, ngo_mail, designation, image) values("${req.body.name}" , "${email}", "${req.body.designation}" ,"${req.file.filename}")`;
  await executeQuery(insertMember);
})

module.exports = router;
