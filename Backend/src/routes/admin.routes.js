const router = require('express').Router()

const { checkRole } = require('../helpers/check_auth')
const { editPost, editUser, deletePost, deleteUser } = require('../controllers/admin.controller')

router.put('/update/post/:id', checkRole(['admin']), editPost)
router.put('/update/user/:id', checkRole(['admin']), editUser)

router.delete('/delete/post/:id', checkRole(['admin']), deletePost)
router.delete('/delete/user/:id', checkRole(['admin']), deleteUser)

module.exports = router