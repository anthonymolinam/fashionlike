"use strict";

var _require = require("express"),
  Router = _require.Router;
var _require2 = require("../controllers/userAuthCtrl.js"),
  login = _require2.login,
  signup = _require2.signup;
var router = Router();

// TODO: Authentication
router.post("/login", login);
router.post("/signup", signup);
module.exports = router;