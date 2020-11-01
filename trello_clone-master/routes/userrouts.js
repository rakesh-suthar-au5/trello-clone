var express = require('express');
var router = express.Router();
const user_controller = require('../controller/user')


router.post('/create',user_controller.create_user);

router.post('/login',user_controller.user_login);

module.exports = router;
