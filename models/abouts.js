const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutsSchema = new Schema({
    header: {
        type: String
    },
    parOne: {
        type: String
    }, 
    parTwo: {
        type: String
    },
    parThree: {
        type: String
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const abouts = mongoose.model('Abouts', aboutsSchema)
module.exports = abouts