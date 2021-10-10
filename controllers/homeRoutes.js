const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


//if user is not logged in, this redirects them to the login screen


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/snips');
    return;
  }
  res.render('login');
});



//about page
router.get('/about', (req, res) => {
  
  res.render('about');
});
// main user page
router.get('/snips', withAuth, async (req, res) => {

  try {
      const getData = await Post.findAll({
      include: [{model: User}],
        where: {
          user_id: req.session.user_id
        }
      });

    
       const postData = await getData.map((post) =>
        post.get({ plain: true}));
     
      res.render('userMain', {postData});
      
 
  
  
    } 
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//handlebar view if user clicks on a saved snippet
router.get('/snippet/:id', withAuth, async (req, res) => {
    const postId = req.params.id
    console.log(req.session.id)
    console.log("This is the postID", postId)
    const getData = await Post.findAll({
        include: [{model: User}],
          where: {
            user_id: req.session.user_id
          }
    });
    
    const postData = await getData.map((post) =>
          post.get({ plain: true})
        );

    const populateText = postData.find((element)=>{
    if (element.id == postId){
    return element
    }
    });

    console.log(postData)
       console.log(populateText)
    res.render('activeSnip', {postData, populateText});
});


//Button for posting brand new snippet
router.post('/snips', withAuth, async (req, res) => {
res.json(req.body)
console.log(req.body)

await Post.create({
      title: req.body.title,
      saved_code: req.body.saved_code,
      //user_id: req.session.user_id
      user_id: req.session.user_id

 });
});

//this route deletes a snippet
router.delete('/snippet/:id', withAuth, async (req, res) => {
  console.log("you smacked the delete route!")
  res.json("you smacked the delete route!");
  Post.destroy({
    where: {
    id: req.params.id
    }
});
});

//this route updates a snippet
router.put('/snippet/:id', async (req, res) => {
  res.json(req.body)
console.log(req.body)
console.log("you smacked the put route bruh!")

await Post.update(
req.body, {
where: {
      
      id: req.params.id
}
 });
});







//------------------------------------------------------------------------------------
// Brendan is just testing/messing with test routes below this


//this get route is for the main page, which is also the page to create new snippets
router.get('/test', async (req, res) => {
 

  console.log('user id is visited')
  try {
      const getData = await Post.findAll({
      include: [{model: User}],
        where: {
          user_id: 1
        }
      });

      const postData = await getData.map((post) =>
        post.get({ plain: true})
      );

     // console.log("This is the data from the database" ,postData)
      res.render('userMain', { postData
        //loggedIn: req.session.logged_in,
      });
        } 
        catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

// this get route renders a page similar to userMain, but updates the text areas and is pointing to a url/postID 
router.get('/test/:id', async (req, res) => {
  const postId = req.params.id
  console.log("This is the postID", postId)
  const getData = await Post.findAll({
      include: [{model: User}],
        where: {
          user_id: 1
        }
  });

  const postData = await getData.map((post) =>
         post.get({ plain: true})
       );

  const populateText = postData.find((element)=>{
  if (element.id == postId){
  return element
  }
  });

  console.log(populateText)

  res.render('activeSnip', {postData, populateText});
});




//this route posts a new snippet
router.post('/test', async (req, res) => {
res.json(req.body)
console.log(req.body)

await Post.create({
      title: req.body.title,
      saved_code: req.body.saved_code,
      //user_id: req.session.user_id
      user_id: 1

 });
});

// this route deletes a snippet
router.delete('/test/:id', async (req, res) => {
  console.log("you smacked the delete route!")
  res.json("you smacked the delete route!");
  Post.destroy({
    where: {
    id: req.params.id
    }
});
});

//this route updates a snippet
router.put('/test/:id', async (req, res) => {
  res.json(req.body)
console.log(req.body)
console.log("you smacked the put route bruh!")

await Post.update(
req.body, {
where: {
      
      id: req.params.id
}
 });
});

module.exports = router;
