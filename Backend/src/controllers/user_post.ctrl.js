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
    } catch (error) {
        res.json({ error })
    }
}

const saveIdFile = async (imageId, description) => {
    try {
        await Post.create({ description, image: url + imageId })
        return 'post created'
    } catch (error) {
        return null
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json({ posts })
    } catch (error) {
        res.json(null)
    }
}

module.exports = {
    uploadFile,
    getAllPosts
}