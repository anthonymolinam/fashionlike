"use strict";

var router = require('express').Router();
var _require = require('../controllers/auth.controller'),
  login = _require.login,
  signup = _require.signup;
router.post('/login', login);
router.post('/signup', signup);
module.exports = router;