const jwt = require("jsonwebtoken");
// const userData = require("../models/user");

const ensureAuth = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,"MySecretPassword",(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect("/auth/login");
            }else{
                next();
            }
        })
    }else{
        res.redirect("/auth/login");
    }
}

const ensureGuest = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,"MySecretPassword",(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                next();
            }else{
                res.redirect("/dashboard");
            }
        })
    }else{
        next();
    }
}

const checkUser = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.authpassword,async(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }else{
                try {
                    const result = await userData.find({_id:decodedToken.id});
                    res.locals.user = result[0];
                    next();
                } catch (error) {
                    res.locals.user = null;
                    console.log(error);
                }
            }
        })
    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = {ensureAuth,checkUser,ensureGuest};