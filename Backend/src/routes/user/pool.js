const { Router } = require("express")
const userPoolCtrl = require("../../controllers/userPoolCtrl.js")
const { checkAuth, checkRoleAuth } = require("../../controllers/userAuthCtrl.js")

const router = Router()

// TODO: Queries
router.get("", userPoolCtrl.getUsers)
router.get("/:username", userPoolCtrl.getUser)

// TODO: Requests
router.put("/:username", userPoolCtrl.updatePwd)

module.exports = router