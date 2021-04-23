const express = require('express');
const { executeQuery } =  require('../controllers/connection');
const queries = require('../db-generation');

const router = express.Router();
const createDb = `create database ngo`;
const selectDb = `use ngo`;

router.get('/', async function(req, res, next) {
    await executeQuery(createDb)
    .then(async () => {
        await executeQuery(selectDb)
        .then(() => {
            queries.map(async (query) => {
                await executeQuery(query.query);
            });
            res.render('frontpage',{});
        })
    })
});

module.exports = router;
