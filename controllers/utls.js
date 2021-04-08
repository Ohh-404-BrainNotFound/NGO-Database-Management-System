
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
      cb(null, "aassasas.png")
    }
  })

  
var upload = multer({
    storage: storage,
  });

const sleep = (ms) => {
   return new Promise((resolve) => setTimeout(resolve, ms));
 };

module.exports = {upload, sleep};
