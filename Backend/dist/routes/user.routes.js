"use strict";

var router = require('express').Router();
var _require = require('../controllers/user.controller'),
  getUser = _require.getUser,
  changePassword = _require.changePassword;
var _require2 = require('../helpers/check_auth'),
  checkRole = _require2.checkRole;
router.get('/:username', getUser);
router.put('/update-password', checkRole(['admin', 'user']), changePassword);
router.put('/forgot-password', checkRole(['admin', 'user']), changePassword);
module.exports = router;