const router = require('express').Router()
const { checkRole } = require('../helpers/check_auth')

router.put('/update/post', checkRole(['admin']), )
router.put('/update/user', checkRole(['admin']), )

router.delete('/delete/user', checkRole(['admin']), )
router.delete('/delete/post', checkRole(['admin']), )

module.exports = router