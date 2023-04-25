const { toDrive } = require('../helpers/googleapi')
const Post = require('../models/post')
const url = 'https://drive.google.com/uc?id='

const uploadFile = async (req, res) => {
    try {
        const { mimetype, filename, path } = req.file
        const { description } = req.body

        const drive = await toDrive(filename, mimetype, path)
        const postCreate = await saveIdFile(drive.data.id, description)

        res.json({ postCreate })
    } catch (e) {
        return res.json({ error: 'Upload failed' })
    }
}

const saveIdFile = async (imageId, description) => {
    try {
        await Post.create({ description, image: url + imageId })
        return 'post created'
    } catch (e) {
        return null
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json({ posts })
    } catch (e) {
        return res.json(null)
    }
}

module.exports = {
    uploadFile,
    getAllPosts
}