const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage')

router.use('/api', apiRoutes);


router.get('/', homeRoutes, async(req, res) => {
    res.render('homepage');
});



module.exports = router
