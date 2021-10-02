const router = require('express').Router();
const User = require('../models/User');

// route to get all dishes
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => { 
      res.json(err);
    });
      const users = userData.map((user) => user.get({ plain: true }));
      res.render('all', { users });
    });

// route to get one dish
router.get('/user/:id', async (req, res) => {
  try{ 
      const userData = await User.findByPk(req.params.id);
      if(!userData) {
          res.status(404).json({message: 'No user with this id!'});
          return;
      }
      const user = userModelData.get({ plain: true });
      res.render('user', user);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
