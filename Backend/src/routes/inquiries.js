const router = require("express").Router();
const userCtrl = require("../controllers/inquiries");
const { checkAuth, checkRoleAuth } = require("../helpers/check");

router.get("/allusers", checkAuth, checkRoleAuth(['admin']), userCtrl.getAllUsers);
router.get("/user/:username", userCtrl.getUser);

router.put("/changepwd", userCtrl.changePwd);

module.exports = router;