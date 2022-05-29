const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    areacode: {
        type: String
    },
    phone: {
        type: String
    },
    day: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    country: {
        type: String
    },
    ctiy: {
        type: String
    },
    town: {
        type: String
    },
    district: {
        type: String
    },
    address: {
        type: String
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const users = mongoose.model('Users', usersSchema)
module.exports = users