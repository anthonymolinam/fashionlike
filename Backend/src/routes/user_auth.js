const { Router } = require("express")
const userCtrl = require("../controllers/user.ctrl.js")

const router = Router()
router.post("/login", userCtrl.login)
router.post("/signup", userCtrl.signup)
router.get("/:username", userCtrl.search)

module.exports = router