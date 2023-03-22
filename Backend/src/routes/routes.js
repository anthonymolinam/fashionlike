const { Router } = require('express')
const userCtrl = require('../controllers/user.ctrl.js')

const router = Router()
// user Authentication
router.post('/login', userCtrl.login)
    .post('/signup', userCtrl.signup)

module.exports = router