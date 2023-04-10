const { Router } = require("express");
const userCtrl = require("../controllers/userCtrl");
const { checkAuth, checkRoleAuth } = require("../utils/check");

const router = Router();

router.get("/list", checkAuth, checkRoleAuth(['admin', 'user']), userCtrl.getAllUsers);
router.get("/:username", userCtrl.getUser);

router.put("/pwd", userCtrl.changePwd);

module.exports = router;