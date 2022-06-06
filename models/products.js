const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: {
        type: String,
    },
    src: {
        type: String,
    },
    sizeType: {
        xsmall: Boolean,
        small: Boolean,
        normal: Boolean,
        large: Boolean,
        xlarge: Boolean
    },
    sizes: {
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
        depth: {
            type: Number,
        },
        diameter: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        volume: {
            type: Number,
        },
    },
    newPrice: {
        type: Number,
    },
    oldPrice: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    objectType: {
        type: String
    },
    collectionName: {
        type: String,
    },
    fav: {
        type: Number,
    },
    color: {
        white: Boolean,
        gray: Boolean,
        darkGray: Boolean,
    },
    rub: {
        smooth: Boolean,
        rough: Boolean,
        roughter: Boolean,
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const products = mongoose.model('Products', productsSchema)
module.exports = products