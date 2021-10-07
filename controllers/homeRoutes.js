const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', withAuth, async (req, res) => {
//   try {
//     res.render('homepage', {
//       logged_in: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//render all posts
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPost = await Post.findAll();

    const post = dbPost.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      post,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
