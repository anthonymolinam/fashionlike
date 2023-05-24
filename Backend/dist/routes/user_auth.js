"use strict";

var _require = require("express"),
  Router = _require.Router;
var userCtrl = require("../controllers/user.ctrl.js");
var router = Router();
router.post("/login", userCtrl.login);
router.post("/signup", userCtrl.signup);
router.get("/:username", userCtrl.search);
module.exports = router;