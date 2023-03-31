const { Router } = require("express")
const userCtrl = require("../../controllers/userAuthCtrl.js")

const router = Router()

// TODO: Authentication
router.post("/login", userCtrl.login)
router.post("/signup", userCtrl.signup)

// TODO: Authorization

module.exports = router