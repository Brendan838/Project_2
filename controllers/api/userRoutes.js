const router = require('express').Router();
const User = require('../../models/User');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const userData = await User.create({
    dish_name: req.body.user_name,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(userData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
