const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  console.log('You hit signup route' + req.body);
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      req.session.save(() => {
          res.status(200).json(dbUserData);
      });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
  console.log('You hit login route', req.body);
    try {
        const dbUserData = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
    
        if (!dbUserData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        const validPassword = await dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            console.log("user logged in", dbUserData)
            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' });
          });
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }
      });
      
      router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
      
      module.exports = router;

