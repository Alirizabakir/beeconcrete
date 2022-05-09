const mongoose = require('mongoose')
const Schema = mongoose.Schema

const slidersSchema = new Schema({
    name: {
        type: String
    },
    src: {
        a: {
            type: String
        }
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const sliders = mongoose.model('Sliders', slidersSchema)
module.exports = sliders