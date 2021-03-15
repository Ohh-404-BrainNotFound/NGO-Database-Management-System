var express = require("express");
var router = express.Router();
var mysql = require("mysql");
require("dotenv").config();
var con = mysql.createConnection({
  host:'localhost',
        user:process.env.user,
        password:process.env.password,
        port:3306
});
/* GET users listing. */
router.post("/", async (req, res, next) => {
  var data = req.body;
  console.log("login",data);
  // await con.connect(async (err) => {
  //   if (err) throw err;

    
    var query = `SELECT COUNT(*) from ngo.user where ngo.user.fname='${data.username}' and ngo.user.password='${data.password}'`;
    await con.query(query, (err, result) => {
      if (err) throw err;
      console.log("Login", result);
    });
  });
// });
router.get("/", function (req, res, next) {
  res.render("login", {});
});

module.exports = router;
