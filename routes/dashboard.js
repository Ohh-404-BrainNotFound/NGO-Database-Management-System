var express = require('express');
const verify = require('../middleware/verify');
var router = express.Router();

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
module.exports = router;
