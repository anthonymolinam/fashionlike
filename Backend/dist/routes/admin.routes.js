"use strict";

var router = require('express').Router();
var _require = require('../helpers/check_auth'),
  checkRole = _require.checkRole;
var _require2 = require('../controllers/admin.controller'),
  getAllUsers = _require2.getAllUsers,
  editPost = _require2.editPost,
  editUser = _require2.editUser,
  deletePost = _require2.deletePost,
  deleteUser = _require2.deleteUser;
router.get('/allusers', checkRole(['admin']), getAllUsers);
router.put('/post/:id', checkRole(['admin']), editPost);
router.put('/user/:id', checkRole(['admin']), editUser);
router["delete"]('/post/:id', checkRole(['admin']), deletePost);
router["delete"]('/user/:id', checkRole(['admin']), deleteUser);
module.exports = router;