const router = require('express').Router()

const { checkRole } = require('../helpers/check_auth')
const { getAllUsers, editPost, editUser, deletePost, deleteUser } = require('../controllers/admin.controller')

router.get('/allusers', checkRole(['admin']), getAllUsers)

router.put('/post/:id', checkRole(['admin']), editPost)
router.put('/user/:id', checkRole(['admin']), editUser)

router.delete('/post/:id', checkRole(['admin']), deletePost)
router.delete('/user/:id', checkRole(['admin']), deleteUser)

module.exports = router