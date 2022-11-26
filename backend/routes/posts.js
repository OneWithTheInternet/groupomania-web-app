const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
//Importing controllers
const postsCtrl = require('../controllers/posts');

//Create post
router.post('/posts', auth, multer, postsCtrl.createPost);
//Display all posts
router.get('/posts', auth, postsCtrl.displayAllPosts);
//Display one post
router.get('/posts/:post_id', auth, postsCtrl.displayPost);
//Display post comments
router.get('/posts/:post_id/comments', auth, postsCtrl.displayPostComments);
//Delete post
router.delete('/auth/posts/:post_id', auth, postsCtrl.deletePost);

module.exports = router;