const { Router } = require("express");
const { login, signup } = require("../controllers/userAuthCtrl.js");

const router = Router();

// TODO: Authentication
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;