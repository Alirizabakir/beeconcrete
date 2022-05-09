const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    content: {
        type: String
    },
    src: {
        a: {
            type: String
        }
    },
    link: {
        type: String
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const contact = mongoose.model('Contact', contactSchema)
module.exports = contact