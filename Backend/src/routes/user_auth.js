const router = require("express").Router();
const { login, signup } = require("../controllers/user_auth_ctrl.js");

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;