var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"/public/uploads")      //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
    //   var regex = new RegExp('[^.]+$');
    //   let extension = file.originalname.match(regex);
      cb(null, "aassasas")
    }
  })

  
var upload = multer({
    storage: storage,
  });

router.post('/', upload.single('ngologo'), function(req, res, next) {
    console.log(req.file);
});

module.exports = router;
