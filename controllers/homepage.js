const router = require('express').Router();

const userModel = require('../models/User');

router.get('/', async(req, res) => {
    res.render('homepage');
});

module.exports = router
