var express = require('express');
var router = express.Router();
const { executeAndReturn } = require('../controllers/connection');

router.get('/', async function(req, res, next) {
  let query = `select * from ngo.ngodata`;
  await executeAndReturn(query)
  .then((response) => {
    console.log(response);
    res.render('./dashboard/ngo-list',{response});
  })
});

module.exports = router;
