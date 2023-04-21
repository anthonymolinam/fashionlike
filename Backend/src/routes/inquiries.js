const router = require('express').Router()
const userCtrl = require('../controllers/inquiries.ctrl')
const { checkToken, checkRole } = require('../helpers/check_auth')

router.get('/allusers', userCtrl.getAllUsers)
router.get('/user/:username', userCtrl.getUser)

router.put('/update-password', checkRole(['admin', 'user']), userCtrl.changePassword)
router.put('/forgot-password', checkRole(['admin', 'user']), userCtrl.changePassword)

module.exports = router