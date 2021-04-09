
const multer = require('multer');

const currentDirectory = __dirname;
const uploadDirectory = currentDirectory.slice(0,-12);
// D:\Academics\Sem-4-DBMS-Project\NGO-dbms-backend\controllers\
// \controllers
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDirectory + "/public/uploads") 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  
var upload = multer({
    storage: storage,
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
module.exports = {upload, sleep, makeid};
