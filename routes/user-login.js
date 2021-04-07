const express = require('express');
const router = express.Router();
const connectionModule = require('../controllers/connection')
const execute = connectionModule.executeQuery;

router.get("/", async (req, res, next) => {
    
});
module.exports = router;