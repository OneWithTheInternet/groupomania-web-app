const express = require('express');
const router = express.Router();
//Importing controllers
const postsCtrl = require('../controllers/posts');

//Calling controllers
router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.displayAllPosts);

module.exports = router;