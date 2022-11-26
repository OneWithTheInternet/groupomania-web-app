const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
//Importing controllers
const usersCtrl = require('../controllers/users');

//Calling controllers
router.post('/users/signup', usersCtrl.createUser);
router.post('/users/login', usersCtrl.loginUser);
router.get('/users/:user_id', auth, usersCtrl.displayOneUser);
router.delete('/users/delete-user', auth, usersCtrl.deleteUser);

module.exports = router;