const router = require('express').Router()
const { uploadFile, getAllPosts } = require('../controllers/user_post.ctrl')
const upload = require('../helpers/multer')

router.post('/upload/post', upload.single('pubFile'), uploadFile)
router.get('/posts', getAllPosts)

module.exports = router