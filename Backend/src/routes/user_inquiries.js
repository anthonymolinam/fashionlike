const router = require('express').Router()
const { getAllUsers, getUser, changePassword } = require('../controllers/user_inquiries.ctrl')
const { checkToken, checkRole } = require('../helpers/check_auth')

router.get('/allusers', getAllUsers)
router.get('/user/:username', getUser)

router.put('/update-password', checkRole(['admin', 'user']), changePassword)
router.put('/forgot-password', checkRole(['admin', 'user']), changePassword)

module.exports = router