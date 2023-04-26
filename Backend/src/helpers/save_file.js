require('dotenv').config()
const { google } = require('googleapis')
const fs = require('fs')

const credentials = require('../../credentials.json')
const PostSchema = require('../models/post')

const url = 'https://drive.google.com/uc?id='

const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/drive']
)

const drive = google.drive({
    version: 'v3',
    auth
})

const toDrive = (name, mimeType, path) => {
    try {
        return drive.files.create({
            resource: {
                name,
                parents: [process.env.DRIVEFOLDER_ID]
            },
            media: {
                mimeType,
                body: fs.createReadStream(path)
            },
            fields: 'id'
        })
    } catch (error) {
        return error
    }
}

const saveIdFile = async (description, imageId, userId) => {
    try {
        const x = await PostSchema.create({ description, image: url + imageId, userId})
        return x
    } catch (e) {
        return null
    }
}

module.exports = { toDrive, saveIdFile }