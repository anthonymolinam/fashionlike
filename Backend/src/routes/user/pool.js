const { Router } = require("express")
const userPoolCtrl = require("../../controllers/userPoolCtrl.js")
const { checkAuth, checkRoleAuth } = require("../../controllers/userAuthCtrl.js")

const router = Router()

// TODO: Queries
router.get("", checkAuth, checkRoleAuth(['admin']), userPoolCtrl.getUsers)
router.get("/:username", userPoolCtrl.findOneUser)

// TODO: Requests
router.put("/:username", userPoolCtrl.updatePassword)

module.exports = router