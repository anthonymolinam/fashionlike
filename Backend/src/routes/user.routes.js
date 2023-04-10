const { Router } = require("express");
const userCtrl = require("../controllers/userCtrl");
const { checkRoleAuth } = require("../utils/check");

const router = Router();

router.get("/list", checkRoleAuth(['admin']), userCtrl.getAllUsers);
router.get("/:username", userCtrl.getUser);

router.put("/pwd", userCtrl.changePwd);

module.exports = router;