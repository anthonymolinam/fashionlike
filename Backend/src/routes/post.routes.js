const router = require('express').Router()
const { uploadFile, getAllPosts } = require('../controllers/posts.controller')
const upload = require('../helpers/multer')
const { checkRole } = require('../helpers/check_auth')

router.post('/upload', checkRole(['user', 'admin']), upload.single('postfile'), uploadFile)
router.get('/all', getAllPosts)

module.exports = router