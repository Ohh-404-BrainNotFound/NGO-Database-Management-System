
const multer = require('multer');

const currentDirectory = __dirname;
const uploadDirectory = currentDirectory.slice(0,-12);
// D:\Academics\Sem-4-DBMS-Project\NGO-dbms-backend\controllers\
// \controllers
var userImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDirectory + "/public/uploads") 
    },
    filename: function (req, file, cb) {
      var regex = new RegExp('[^.]+$');
      let extension = file.originalname.match(regex);
      cb(null, req.session.userEmail + "." + extension)
    }
  })

  
var userImageUpload = multer({
    storage: userImageStorage,
  });

var ngoImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDirectory + "/public/uploads") 
    },
    filename: function (req, file, cb) {
      var regex = new RegExp('[^.]+$');
      let extension = file.originalname.match(regex);
      cb(null, req.session.ngoEmail + "." + extension)
    }
})

var ngoMemberImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory + "/public/uploads") 
  },
  filename: function (req, file, cb) {
    var regex = new RegExp('[^.]+$');
    let extension = file.originalname.match(regex);
    cb(null, file.originalname + "." + extension)
  }
})
  
var ngoImageUpload = multer({
    storage: ngoImageStorage,
  });

var ngoMemberImageUpload = multer({
    storage: ngoMemberImageStorage,
  });


const sleep = (ms) => {
   return new Promise((resolve) => setTimeout(resolve, ms));
 };
 
const makeid = (length) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
module.exports = {userImageUpload, ngoImageUpload, sleep, makeid, ngoMemberImageUpload};
