const express = require('express')
const router = express.Router()
const Posts = require('../services/post-service')
const Comments = require('../services/comment-service')
const User = require('../models/user-model')

// get a list of posts from the db

router.get('/posts', async (req, res, next) => {
  const postMap = await Posts.findAll()
  let postData = []
  // For loop to filter the main data from postMap
  for (var i = 0; i < postMap.length; i++) {
    postData.push({
      title: postMap[i].title,
      slug: postMap[i].slug,
      id: postMap[i].id,
      body: postMap[i].body,
      img: postMap[i].img,
      addedby: postMap[i].addedBy.username
    })
  }
  res.send(postData)
  // Or i can use map method like below commented out.
  // const other = postMap.map((data)=>{return data.title;});
  // res.send(other);
})

// Pots by ID - Map

router.get('/posts/:id', async (req, res, next) => {

  // Object IDyi de kullanarak find yap, o object IDyi taşıyan postun IDsini döndür
  Posts.findSlug({ 'slug': req.params.id }).then((data) => {
    res.send(data)
  }).catch(next)
})


// Slug Search Route, Get ID if it is already in DB REMOVE This Route

router.get('/postslug/:id', async function (req, res, next) {
  // const searchedslug=  Posts.findSlug({slug: req.params.id}); // Find the post with that ID
  // res.send(searchedslug).catch(next);

  await Posts.findSlug({ slug: req.params.id }).then(function (post) {
    res.send(post)
  }).catch(next)
})

// add a new post to the db
router.post('/addpost', async (req, res, next) => {
  const newpost = await Posts.add(req.body)
  res.send(newpost)
})

// Add comment to existing post

router.post('/posts/:id/add', async function (req, res, next) {
  // const searchedpost= await Posts.findById({_id: req.params.id}); // Find the post with that ID
  // const commentdata = await Comments.add(req.body); // Add the comment to comments colletion

  // searchedpost.comments.push(commentdata.id); // Push the commment ID to Post's comment array
  // const updated = searchedpost.save();
  // res.send(updated).catch(next);

  Posts.findById({ _id: req.params.id }).then((searchedpost) => {
    Comments.add(req.body).then((commentdata) => {
      searchedpost.comments.push(commentdata.id)
      const updated = searchedpost.save()
      res.send(updated)
    }).catch(next)
  })
})

// delete a post from the db
router.delete('/posts/:id', function (req, res, next) {
  Posts.findByIdAndRemove({ _id: req.params.id }).then(function (post) {
    res.send(post)
  }).catch(next)
})

// ROUTES FOR COMMENTS

// get a list of comments from the db

router.get('/comments', async (req, res, next) => {
  const postMap = await Comments.findAll()
  let postData = []
  // For loop to filter the main data from postMap
  for (var i = 0; i < postMap.length; i++) {
    postData.push({
      text: postMap[i].text,
      id: postMap[i].id,
      user: postMap[i].author.username
    })
  }
  res.send(postData)
})

// add a new comment to the db
router.post('/addcomment', async (req, res, next) => {
  const newcomment = await Comments.add(req.body)
  res.send(newcomment)
})

// Get the comment by ID
router.get('/comments/:id', function (req, res, next) {
   Comments.find({ id: req.params.id }).then(function (post) {
    res.send(post)
  }).catch(next)
})

//Update a comment in the db
router.put('/comments/:id', function (req, res, next) {
  Comments.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Comments.findOne({ _id: req.params.id }).then(function (post) {
      res.send(post)
    })
  }).catch(next)
})

// delete a comment from the db
router.delete('/comments/:id', function (req, res, next) {
  Comments.findByIdAndRemove({ _id: req.params.id }).then(function (post) {
    res.send(post)
  }).catch(next)
})

// USER ROUTES USER IS NOT DEFINED YET
router.get('/allusers', async (req, res, next) => {
  const newpost = await User.find(req.body)
  res.send(newpost)
})

// Slug Search Route, Get ID if it is already in DB

router.get('/slugs/:id', async function (req, res, next) {
  // const searchedslug=  Posts.findSlug({slug: req.params.id}); // Find the post with that ID
  // res.send(searchedslug).catch(next);

  await Posts.findSlug({ slug: req.params.id }).then(function (post) {
    res.send(post)
  }).catch(next)
})


// Get the post ID that Carries :id comment
router.get('/checkthepostid/:id', (req, res, next) => {
    Posts.findSlug({'comments': req.params.id}).then((postdata) => { // POST DATA ICINDE POSTA AIT SEYLER VAR
    res.send(postdata[0]._id)
  }).catch(next)
})




// Profile page, get user data other than comments

router.get('/infos/:id', async (req, res, next) => {
  await User.find({ 'username': req.params.id }).then((data) => {
    let userData = []
    userData.push({
      image: data[0].image,
      bio: data[0].bio,
      gender: data[0].gender
    })
    res.send(userData)
  })
})

// Test Route
router.get('/profile/:user', (req, res, next) => {
  res.send('MY PAGE')
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else { res.redirect('/login') }
})

// Vote Routes

//Update vote in DB
router.put('/votes/:id', function (req, res, next) {

  Comments.findByIdAndUpdate(req.params.id, { $set: { meta: {upvotes: req.body.meta.upvotes} }}, { new: true }).then(function (post) {
    console.log( req.body.meta.upvotes)
      res.send( post)
    }).catch(next)


    
  })

//   Comments.findByIdAndUpdate(req.params.id , { $set: {
//     meta: {upvotes: req.body.meta.upvotes}

// }}, {new: true}, ).then(function (post) {
//   console.log( req.body.meta.upvotes)
//     res.send( post)
//   }).catch(next)
// })





module.exports = router