const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
//Importing controllers
const commentCtrl = require('../controllers/comments');

//Create comment
router.post('/auth/posts/:_id/comments', auth, commentCtrl.createComment);
//Display post comments
router.get('/posts/:post_id/comments', auth, commentCtrl.displayPostComments);
//Deletes a comment
router.delete('/auth/comments/:_id', auth, commentCtrl.deleteComment);


module.exports = router; 