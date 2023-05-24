"use strict";

var multer = require('multer');
var _require = require('path'),
  join = _require.join;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, join(__dirname, '../../media/images'));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});
module.exports = upload;