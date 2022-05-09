const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String
    },
    familyName: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    birthday: {
        type: String
    },
    provience: {
        type: String
    },
    address: {
        type: String
    },
    addressTitle: {
        type: String
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const users = mongoose.model('Users', usersSchema)
module.exports = users