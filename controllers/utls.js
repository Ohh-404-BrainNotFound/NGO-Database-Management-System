
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/public/uploads") 
    },
    filename: function (req, file, cb) {
      cb(null, "aassasas")
    }
  })

  
var upload = multer({
    storage: storage,
  });

module.exports = {upload};
