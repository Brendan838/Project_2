const router = require('express').Router();
const homeRoutes = require('./homepage');
const apiRoutes =require('./api')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
