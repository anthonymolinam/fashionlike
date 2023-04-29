const router = require('express').Router()
const { getUser, changePassword } = require('../controllers/user.controller')
const { checkRole } = require('../helpers/check_auth')

router.get('/:username', getUser)

router.put('/update-password', checkRole(['admin', 'user']), changePassword)
router.put('/forgot-password', checkRole(['admin', 'user']), changePassword)

module.exports = router