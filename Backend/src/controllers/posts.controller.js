const { toDrive, saveIdFile } = require('../helpers/save_file')
const PostSchema = require('../models/post')
const { checkToken } = require('../helpers/check_auth')

const uploadFile = async (req, res) => {
    try {
        const tokenData = await checkToken(req.headers.authorization)
        const { mimetype, filename, path } = req.file
        const { description } = req.body

        const drive = await toDrive(filename, mimetype, path)
        const postCreate = await saveIdFile(description, drive.data.id, tokenData.id)

        res.json({ postCreate })
    } catch (e) {
        return res.json({ error: 'Upload failed' })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostSchema.findAll({order: [['createdAt', 'DESC']]})
        res.json(posts)
    } catch (e) {
        return res.json(null)
    }
}

module.exports = {
    uploadFile,
    getAllPosts
}