const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: {
        type: String,
    },
    src: {
        a: {
            type: String,
        },
        b: {
            type: String,
        },
    },
    big: {
        width: {
            type: Number,
        },
        widthtop: {
            type: Number,
        },
        widthunder: {
            type: Number,
        },
        height: {
            type: Number,
        },
        heighttop: {
            type: Number,
        },
        heightunder: {
            type: Number,
        },
        depth: {
            type: Number,
        },
        depthtop: {
            type: Number,
        },
        depthunder: {
            type: Number,
        },
        diameter: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        newPrice: {
            type: Number,
        },
        oldPrice: {
            type: Number,
        }
    },
    small: {
        width: {
            type: Number,
        },
        widthtop: {
            type: Number,
        },
        widthunder: {
            type: Number,
        },
        height: {
            type: Number,
        },
        heighttop: {
            type: Number,
        },
        heightunder: {
            type: Number,
        },
        depth: {
            type: Number,
        },
        depthtop: {
            type: Number,
        },
        depthunder: {
            type: Number,
        },
        diameter: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        newPrice: {
            type: Number,
        },
        oldPrice: {
            type: Number,
        }
    },
    collectionName: {
        type: String,
    },
    fav: {
        type: Number,
    },
    color: {
        type: Boolean
    },
    rub: {
        type: Boolean
    },
}, { timestamps: true, supressReservedKeysWarning: true })

const products = mongoose.model('Products', productsSchema)
module.exports = products