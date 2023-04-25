const router = require('express').Router()
const { uploadFile, getAllPosts } = require('../controllers/user_post.ctrl')
const upload = require('../helpers/multer')
const { checkRole } = require('../helpers/check_auth')

router.post('/upload/post', checkRole(['user', 'admin']), upload.single('postfile'), uploadFile)
router.get('/posts', checkRole(['user', 'admin']), getAllPosts)

module.exports = router