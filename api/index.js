const express = require("express")
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()
const fs = require('fs').promises

const Abouts = require('../models/abouts.js')
const Contact = require('../models/contacts.js')
const Products = require('../models/products.js')
const Sliders = require('../models/sliders.js')
const Socials = require('../models/socials.js')
const Users = require('../models/users.js')

const MongoStore = require('connect-mongo');

const dbURL = 'mongodb+srv://beeconcrete:2547492bkr@beeconcrete.ngeqm.mongodb.net/beeconcrete?retryWrites=true&w=majority'

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connect'))


app.use(session({
    secret: 'b3eSeCret',
    maxAge: 60000,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: dbURL })
}))
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    let cart = []
    if (req.session.cart) {
        cart = req.session.cart
    }

    // bagTotalPrice
    let bagTotalPrice = 0
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
    });


    Products.find({}, (err, products) => {
        Sliders.find({}, (err, sliders) => {
            Abouts.find({}, (err, about) => {
                Socials.find({}, (err, social) => {
                    Contact.find({}, (err, contact) => {
                        res.status(200).json({
                            about: about,
                            contact: contact,
                            social: social,
                            sliders: sliders,
                            products: products,
                            favItem: {
                                items: req.session.favItem
                            },
                            cart: {
                                items: req.session.cart,
                                bagTotalPrice: bagTotalPrice
                            },
                            user: req.session.user,
                        })
                    })
                })
            })
        })
    })
})
app.post('/add-to-cart', (req, res) => {

    let product = req.body.product

    let cart = []

    // req.session.title = 'BeeConcrete'

    if (req.session.cart) {
        cart = req.session.cart
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count += product.count
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].big.newPrice
        } else {
            cart.push({
                ...product,
                totalPrice: product.count * product.big.newPrice
            })
        }
    } else {
        cart.push({
            ...product,
            totalPrice: product.count * product.big.newPrice
        })
    }

    // bagTotalPrice
    let bagTotalPrice = 0
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
    });

    req.session.cart = cart
    res.status(200).json({
        cart: {
            items: req.session.cart,
            bagTotalPrice: bagTotalPrice
        }
    })
})
app.post('/change-count', (req, res) => {
    let product = req.body.product

    let cart = []

    // req.session.title = 'BeeConcrete'

    if (req.session.cart) {
        cart = req.session.cart
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count = product.newCount
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].big.newPrice
        }
    }

    // bagTotalPrice
    let bagTotalPrice = 0
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
    });
    req.session.cart = cart

    res.status(200).json({
        cart: {
            items: req.session.cart,
            bagTotalPrice: bagTotalPrice
        }
    })
})
app.post('/remove-cart', (req, res) => {
    let product = req.body.product
    let cart = []

    if (req.session.cart) {
        cart = req.session.cart
    }

    let productIndex = cart.findIndex(item => item._id == product._id)

    if (productIndex > -1) {
        cart.splice(productIndex, 1)
        req.session.cart = cart
    }

    // bagTotalPrice
    let bagTotalPrice = 0
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
    });
    req.session.cart = cart

    res.status(200).json({
        cart: {
            items: req.session.cart,
            bagTotalPrice: bagTotalPrice
        }
    })

})

// New Product
app.post('/new-product', (req, res) => {

    let product = req.body.product
    let imgName1 = product.name.split(' ').join('_') + '_a.jpg'
    let imgName2 = product.name.split(' ').join('_') + '_b.jpg'
    let img = req.body.product.file
    let data = img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    let resizeAdrees = 'static/resize/' + imgName1
    let smallAdrees = 'static/small/' + imgName1


    const productAdd = new Products({
        name: product.name,
        src: {
            a: imgName1,
            b: imgName2
        },
        big: {
            width: product.big.width,
            widthtop: product.big.widthtop,
            widthunder: product.big.widthunder,
            height: product.big.height,
            heighttop: product.big.heighttop,
            heightunder: product.big.heightunder,
            depth: product.big.depth,
            depthtop: product.big.depthtop,
            depthunder: product.big.depthunder,
            diameter: product.big.diameter,
            weight: product.big.weight,
            newPrice: product.big.newPrice,
            oldPrice: product.big.oldPrice
        },
        small: {
            width: product.small.width,
            widthtop: product.small.widthtop,
            widthunder: product.small.widthunder,
            height: product.small.height,
            heighttop: product.small.heighttop,
            heightunder: product.small.heightunder,
            depth: product.small.depth,
            depthtop: product.small.depthtop,
            depthunder: product.small.depthunder,
            diameter: product.small.diameter,
            weight: product.small.weight,
            newPrice: product.small.newPrice,
            oldPrice: product.small.oldPrice
        },
        collectionName: product.collectionName,
        fav: 3802,
        color: product.color,
        rub: product.rub
    })
    // Image Upload

    async function upImg() {
        const upOne = await fs.writeFile(resizeAdrees, buf, (err) => {
            if (err) {
                console.log(err);
            }
        });
        const upTwo = await fs.writeFile(smallAdrees, buf, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    upImg()

    productAdd.save()
        .then((result) => {
            Products.find({}, (err, docs) => {
                res.status(200).json({
                    products: docs,
                })
            })
        })

})
app.post('/update-product', (req, res) => {
    const product = req.body.product
    const id = product._id
    Products.findOneAndUpdate({ _id: id },
        {
            $set: {
                name: product.name,
                src: {
                    a: product.src.a,
                    b: product.src.b,
                },
                big: {
                    width: product.big.width,
                    widthtop: product.big.widthtop,
                    widthunder: product.big.widthunder,
                    height: product.big.height,
                    heighttop: product.big.heighttop,
                    heightunder: product.big.heightunder,
                    depth: product.big.depth,
                    depthtop: product.big.depthtop,
                    depthunder: product.big.depthunder,
                    diameter: product.big.diameter,
                    weight: product.big.weight,
                    newPrice: product.big.newPrice,
                    oldPrice: product.big.oldPrice
                },
                small: {
                    width: product.small.width,
                    widthtop: product.small.widthtop,
                    widthunder: product.small.widthunder,
                    height: product.small.height,
                    heighttop: product.small.heighttop,
                    heightunder: product.small.heightunder,
                    depth: product.small.depth,
                    depthtop: product.small.depthtop,
                    depthunder: product.small.depthunder,
                    diameter: product.small.diameter,
                    weight: product.small.weight,
                    newPrice: product.small.newPrice,
                    oldPrice: product.small.oldPrice
                },
                collectionName: product.collectionName,
                fav: 3802,
                color: product.color,
                rub: product.rub
            }
        },
        {
            new: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            }

        })

    Products.find({}, (err, docs) => {
        res.status(200).json({
            products: docs,
        })
    })

})
app.post('/del-product', (req, res) => {
    const id = req.body.id
    Products.findOneAndDelete({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        }
        Products.find({}, (err, docs) => {
            res.status(200).json({
                products: docs,
            })
        })
    })

})

// Silder
app.post('/new-slider', (req, res) => {
    let slide = req.body.slide

    const sliderAdd = new Sliders({
        name: slide.name,
        src: {
            a: slide.src.a
        }
    })
    sliderAdd.save()
        .then((result) => {
            Sliders.find({}, (err, docs) => {
                res.status(200).json({
                    slider: docs,
                })
            })
        })

})
app.post('/del-slider', (req, res) => {
    const name = req.body.name
    Sliders.findOneAndDelete({ name: name }, (err) => {
        if (err) {
            console.log(err);
        }
        Sliders.find({}, (err, docs) => {
            res.status(200).json({
                sliders: docs,
            })
        })
    })
})

// Social
app.post('/new-social', (req, res) => {
    let social = req.body.social
    let imgName = social.imgName.split(' ').join('_') + '.jpg'
    let img = req.body.social.file
    let data = img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    let adrees = 'static/instagram/' + imgName

    const socialAdd = new Socials({
        name: social.name,
        src: {
            a: imgName
        },
        description: social.description,
        link: social.link,
    })
    async function upImg() {
        const upOne = await fs.writeFile(adrees, buf, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    upImg()
    socialAdd.save()
        .then((result) => {
            Socials.find({}, (err, docs) => {
                res.status(200).json({
                    social: docs,
                })
            })
        })

})
app.post('/del-social', (req, res) => {
    const id = req.body.id
    Socials.findOneAndDelete({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        }
        Socials.find({}, (err, docs) => {
            res.status(200).json({
                social: docs,
            })
        })
    })
})

// User
app.post('/login', (req, res) => {
    let user = req.body.user
    Users.findOne({ email: user.email }, (err, docs) => {
        req.session.user = docs
        res.status(200).json({
            user: req.session.user,
        })
    })


})
app.post('/sign-up', (req, res) => {
    let user = req.body.user
    const userAdd = new Users({
        name: user.name,
        familyName: user.familyName,
        email: user.email,
        number: null,
        provience: null,
        address: null,
        addressTitle: null,
        birthday: null
    })

    userAdd.save()
        .then((result) => {
            Users.findOne({ email: user.email }, (err, docs) => {
                res.status(200).json({
                    user: docs
                })
            })
        })
})
app.post('/update-user', (req, res) => {
    const user = req.body.user
    const id = user.id
    Users.findByIdAndUpdate({ _id: id },
        {
            $set: {
                name: user.name,
                familyName: user.familyName,
                email: user.email,
                number: user.number,
                provience: user.provience,
                address: user.address,
                addressTitle: user.addressTitle,
                birthday: user.birthday
            }
        },
        {
            new: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                Users.findById({ _id: id }, (err, docs) => {
                    req.session.user = docs
                    res.status(200).json({
                        user: docs,
                    })
                })
            }
        })
})
app.post('/del-user', (req, res) => {
    const id = req.body.id
    Users.findByIdAndDelete({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json({
            delete: true
        })
    })
})
app.post('/logout', (req, res) => {
    res.status(200).json({
        process: true
    })
})
// About
app.post('/update-about', (req, res) => {
    const about = req.body.about
    const id = about._id
    Products.findOneAndUpdate({ _id: id },
        {
            $set: {
                header: about.header,
                parOne: about.par1,
                parTwo: about.par2,
                parThree: about.par3
            }
        },
        {
            new: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            }

        })

    Abouts.find({}, (err, docs) => {
        res.status(200).json({
            about: docs,
        })
    })

    // const aboutAdd = new Abouts({
    //     header: about.header,
    //     parOne: about.par1,
    //     parTwo: about.par2,
    //     parThree: about.par3,
    // })
    // aboutAdd.save()
    //     .then(response => {

    //     })


})
// FavItem
app.post('/favItem', (req, res) => {

    let product = req.body.product
    let favItem = []


    if (req.session.favItem) {
        favItem = req.session.favItem
    }

    if (product.status) {
        if (favItem.length > 0) {
            let itemIndex = favItem.findIndex(item => item._id == product._id)

            if (itemIndex > -1) {
                console.log('Push');
            } else {
                favItem.push({
                    ...product,
                })
                Products.findOneAndUpdate({ _id: product._id },
                    {
                        $set: {
                            fav: product.fav + 1,
                        }
                    },
                    {
                        new: true,
                    },
                    (err) => {
                        if (err) {
                            console.log(err);
                        }
    
                    })
            }
        } else {
            favItem.push({
                ...product,
            })
            Products.findOneAndUpdate({ _id: product._id },
                {
                    $set: {
                        fav: product.fav + 1,
                    }
                },
                {
                    new: true,
                },
                (err) => {
                    if (err) {
                        console.log(err);
                    }

                })
        }
    } else {
        if (favItem.length > 0) {
            let itemIndex = favItem.findIndex(item => item._id == product._id)
            if (itemIndex > -1) {
                favItem.splice(itemIndex, 1)
            }
            Products.findOneAndUpdate({ _id: product._id },
                {
                    $set: {
                        fav: product.fav - 1,
                    }
                },
                {
                    new: true,
                },
                (err) => {
                    if (err) {
                        console.log(err);
                    }

                })
        }
    }
    req.session.favItem = favItem
    res.status(200).json({
        favItem: {
            items: favItem
        }
    })
})
// Contact 

// Users

// Search Product
// app.get('/products/:id', (req, res) => {
//     const id = req.params.id
//     Products.findById(id)
//         .then((result) => {
//             res.status(200).json({
//                 cart: {
//                     items: result
//                 }
//             })
//         })
//         .catch((err)=> console.log(err, 'Olmadı'))
// })

module.exports = {
    path: '/api',
    handler: app
}