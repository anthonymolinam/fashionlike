"use strict";

var router = require('express').Router();
var _require = require('../controllers/posts.controller'),
  uploadFile = _require.uploadFile,
  getAllPosts = _require.getAllPosts;
var upload = require('../helpers/multer');
var _require2 = require('../helpers/check_auth'),
  checkRole = _require2.checkRole;
router.post('/upload', checkRole(['user', 'admin']), upload.single('postfile'), uploadFile);
router.get('/all', getAllPosts);
module.exports = router;