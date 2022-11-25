const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
//Importing controllers
const commentCtrl = require('../controllers/comments');

//Create comment
router.post('/auth/posts/:post_id/comments', auth, commentCtrl.createComment);
//Deletes a comment
router.delete('/auth/comments/:post_id', auth, commentCtrl.deleteComment);


module.exports = router; 