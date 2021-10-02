const router = require('express').Router();
const User = require('../models/User');

router.get('/', async(req, res) => {
    res.render('main');
});

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     res.render('login');
//   });
  
module.exports = router
