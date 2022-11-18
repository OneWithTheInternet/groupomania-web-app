const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
//Importing controllers
const postsCtrl = require('../controllers/posts');

//Create post
router.post('/auth/posts', auth, multer, postsCtrl.createPost);
//Display all posts
router.get('/posts', auth, postsCtrl.displayAllPosts);
//Display one post
router.get('/posts/:_id', auth, postsCtrl.displayPost);
//Delete post
router.delete('/auth/posts/:_id', auth, postsCtrl.deletePost);

module.exports = router;