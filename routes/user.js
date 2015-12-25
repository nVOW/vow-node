var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/register', userController.actionRegister);

module.exports = router;
