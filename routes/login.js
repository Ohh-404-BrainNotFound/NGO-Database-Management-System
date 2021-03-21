var express = require("express");
var router = express.Router();
var mysql = require("mysql");
require("dotenv").config();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {ensureGuest,ensureAuth} = require("../middleware/authMiddleware");

const MAXAGE = 3*60*60*24;

const getToken = (id)=>{
    return jwt.sign({id},process.env.authpassword,{
        expiresIn:MAXAGE
    })
}

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
      // if user is correct 
      const token = getToken(data[0]._id);
            res.cookie("jwt",token,{
                httpOnly:true,
                maxAge:MAXAGE*1000
            });
            res.redirect("");
      
      if (err) throw err;
      console.log("Login", result);
    });
  });
// });
router.get("/",ensureGuest, function (req, res, next) {
  res.render("login", {});
});


router.get("/logout",ensureAuth,(req,res)=>{
  res.cookie("jwt","",{maxAge:1});
  res.redirect("/");
})

module.exports = router;
