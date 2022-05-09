const mongoose = require('mongoose')
const Schema = mongoose.Schema

const socialsSchema = new Schema({
    name: {
        type: String
    },
    src: {
        a: {
            type: String
        }
    },
    description: {
        type: String
    },
    link: {
        type: String
    }
}, { timestamps: true, supressReservedKeysWarning: true })

const socials = mongoose.model('Socials', socialsSchema)
module.exports = socials