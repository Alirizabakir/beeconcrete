const express = require("express")
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()
const fs = require('fs').promises
var requestIp = require('request-ip');

const ejsLayouts = require('express-ejs-layouts');
const microtime = require('microtime');
const crypto = require('crypto');
const nodeBase64 = require('nodejs-base64-converter');
const request = require('request');
const path = require('path');


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

app.set('views', path.join(__dirname, '../pages/payPages'));

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));

// --->>>
var merchant_id = '286946';
var merchant_key = 'EQeHt9mxLPBqKE9g';
var merchant_salt = 'fQ4k1JBPxejRWpu4';
var basket = JSON.stringify([
    ['Örnek Ürün 1', '18.00', 1],
    ['Örnek Ürün 2', '33.25', 2],
    ['Örnek Ürün 3', '45.42', 1]
]);
var user_basket = nodeBase64.encode(basket);
const neww = new Date()
var merchant_oid = 'BEE' + (neww.getTime() + Math.floor(Math.random() * 1000) + 2).toString(); // Sipariş numarası: Her işlemde benzersiz olmalıdır!! Bu bilgi bildirim sayfanıza yapılacak bildirimde geri gönderilir.
// Sayfada görüntülenecek taksit adedini sınırlamak istiyorsanız uygun şekilde değiştirin.
// Sıfır (0) gönderilmesi durumunda yürürlükteki en fazla izin verilen taksit geçerli olur.
var max_installment = '0';
var no_installment = '0'  // Taksit yapılmasını istemiyorsanız, sadece tek çekim sunacaksanız 1 yapın.
var user_ip = '94.123.177.12';
var email = 'aarizabkr@gmail.com'; // Müşterinizin sitenizde kayıtlı veya form vasıtasıyla aldığınız eposta adresi.
var payment_amount = 100 * 100; // Tahsil edilecek tutar. 9.99 için 9.99 * 100 = 999 gönderilmelidir.
var currency = 'TL';
var test_mode = '0'; // Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir.
var user_name = 'Ali Rıza'; // Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız ad ve soyad bilgisi
var user_address = 'Kahramanmaraş'; // Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız adres bilgisi
var user_phone = '05301783802'; // Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız telefon bilgisi

// Başarılı ödeme sonrası müşterinizin yönlendirileceği sayfa
// Bu sayfa siparişi onaylayacağınız sayfa değildir! Yalnızca müşterinizi bilgilendireceğiniz sayfadır!
var merchant_ok_url = 'https://www.beeconcrete.com.tr/order-ok';
// Ödeme sürecinde beklenmedik bir hata oluşması durumunda müşterinizin yönlendirileceği sayfa
// Bu sayfa siparişi iptal edeceğiniz sayfa değildir! Yalnızca müşterinizi bilgilendireceğiniz sayfadır!
var merchant_fail_url = 'https://www.beeconcrete.com.tr/order-failed';
var timeout_limit = 30; // İşlem zaman aşımı süresi - dakika cinsinden
var debug_on = 1; // Hata mesajlarının ekrana basılması için entegrasyon ve test sürecinde 1 olarak bırakın. Daha sonra 0 yapabilirsiniz.
var lang = 'tr'; // Türkçe için tr veya İngilizce için en gönderilebilir. Boş gönderilirse tr geçerli olur.


app.post("/pay-go", function (req, res) {
    var ip;
    if (req.headers['x-forwarded-for']) {
        ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.socket && req.socket.remoteAddress) {
        ip = req.socket.remoteAddress;
    } else {
        ip = req.ip;
    }

    user_ip = ip
    const payData = req.body.payData
    user_name = payData.user.name
    user_email = payData.user.email
    user_phone = payData.user.phone
    user_address = payData.user.address
    merchant_oid = payData.merchant_oid
    basket = JSON.stringify(payData.basket)
    payment_amount = payData.totalPrice * 100
    var hashSTR = `${merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}`;

    var paytr_token = hashSTR + merchant_salt;

    var token = crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');

    var options = {
        method: 'POST',
        url: 'https://www.paytr.com/odeme/api/get-token',
        headers:
            { 'content-type': 'application/x-www-form-urlencoded' },
        formData: {
            merchant_id: merchant_id,
            merchant_key: merchant_key,
            merchant_salt: merchant_salt,
            email: email,
            payment_amount: payment_amount,
            merchant_oid: merchant_oid,
            user_name: user_name,
            user_address: user_address,
            user_phone: user_phone,
            merchant_ok_url: merchant_ok_url,
            merchant_fail_url: merchant_fail_url,
            user_basket: user_basket,
            user_ip: user_ip,
            timeout_limit: timeout_limit,
            debug_on: debug_on,
            test_mode: test_mode,
            lang: lang,
            no_installment: no_installment,
            max_installment: max_installment,
            currency: currency,
            paytr_token: token,


        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var res_data = JSON.parse(body);

        if (res_data.status == 'success') {
            res.status(200).json({
                iframetoken: res_data.token
            })
        } else {
            res.end(body);
        }
    });


});


app.post("/report", function (req, res) {

    // ÖNEMLİ UYARILAR!
    // 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
    // 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
    // veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
    // 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
    // siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.
    var callback = req.body;

    // POST değerleri ile hash oluştur.
    paytr_token = callback.merchant_oid + merchant_salt + callback.status + callback.total_amount;
    var token = crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');

    // Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
    // Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.

    if (token != callback.hash) {
        throw new Error("PAYTR notification failed: bad hash");
    }

    if (callback.status == 'success') {
        //basarili
        console.log('Başarılı');
    } else {
        //basarisiz
        console.log('Başarısız');
    }

    res.send('OK');

});

// --->>>>
app.get('/', (req, res) => {
    let cart = []
    let favItem = []

    if (req.session.cart) {
        cart = req.session.cart
    } else {
        req.session.cart = cart
    }
    if (req.session.favItem) {
        favItem = req.session.favItem
    } else {
        req.session.favItem = favItem
    }
    // bagTotalPrice
    let favTotalPrice = 0
    favItem.forEach(item => {
        favTotalPrice += item.totalPrice
    });
    let packaging = 0
    let cargoPrice = 0
    let bagTotalPrice = 0
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
        if (item.sizes) {
            cargoPrice += item.sizes.volume * 2.5 * item.count
            packaging += item.sizes.width * item.sizes.height * item.sizes.depth * 1.5 * item.count / 1000
        }
    });
    Products.find({}, (err, products) => {
        req.session.allProducts = products
        Sliders.find({}, (err, sliders) => {
            Abouts.find({}, (err, about) => {
                Socials.find({}, (err, social) => {
                    Contact.find({}, (err, contact) => {
                        social.reverse()
                        res.status(200).json({
                            about: about,
                            contact: contact,
                            social: social,
                            sliders: sliders,
                            products: products,
                            favItem: {
                                items: req.session.favItem,
                                favTotalPrice: favTotalPrice
                            },
                            cart: {
                                items: req.session.cart,
                                productTotal: bagTotalPrice,
                                bagTotalPrice: bagTotalPrice + cargoPrice + packaging,
                                cargoPrice: cargoPrice,
                                packaging: packaging
                            },
                            user: req.session.user,
                            lang: req.session.lang
                        })
                    })
                })
            })
        })
    })
})
app.post('/add-to-cart', (req, res) => {

    let product = req.body.product
    console.log(product);
    let cart = []
    let userId = null

    if (req.session.user) {
        userId = req.session.user._id
    }

    // req.session.title = 'BeeConcrete'

    if (req.session.cart) {
        cart = req.session.cart
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count += product.count
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
        } else {
            cart.push({
                ...product,
                totalPrice: product.count * product.newPrice
            })
        }
    } else {
        cart.push({
            ...product,
            totalPrice: product.count * product.newPrice
        })
    }

    // bagTotalPrice
    let packaging = 0
    let cargoPrice = 0
    let bagTotalPrice = 0
    let userCart = []
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
        userCart.push({ id: item._id, count: item.count, selectRub: item.selectRub, selectColor: item.selectColor })

        if (item.sizes) {
            cargoPrice += item.sizes.volume * 2.5 * item.count
            packaging += item.sizes.width * item.sizes.height * item.sizes.depth * 1.5 * item.count / 1000
        }
    });

    if (req.session.user) {
        Users.findOneAndUpdate({ _id: userId },
            {
                $set: {
                    cart: userCart,
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
    req.session.cart = cart
    res.status(200).json({
        cart: {
            items: req.session.cart,
            productTotal: bagTotalPrice,
            bagTotalPrice: bagTotalPrice + cargoPrice + packaging,
            cargoPrice: cargoPrice,
            packaging: packaging
        }
    })
})
app.post('/change-count', (req, res) => {
    let product = req.body.product

    let cart = []
    let userId = null

    if (req.session.user) {
        userId = req.session.user._id
    }

    // req.session.title = 'BeeConcrete'

    if (req.session.cart) {
        cart = req.session.cart
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count = product.newCount
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
        }
    }

    // bagTotalPrice
    let packaging = 0
    let cargoPrice = 0
    let bagTotalPrice = 0
    let userCart = []
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
        userCart.push({ id: item._id, count: item.count, selectColor: item.selectColor, selectRub: item.selectRub })

        if (item.sizes) {
            cargoPrice += item.sizes.volume * 2.5 * item.count
            packaging += item.sizes.width * item.sizes.height * item.sizes.depth * 1.5 * item.count / 1000
        }
    });

    if (req.session.user) {
        Users.findOneAndUpdate({ _id: userId },
            {
                $set: {
                    cart: userCart,
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
    req.session.cart = cart
    res.status(200).json({
        cart: {
            items: req.session.cart,
            productTotal: bagTotalPrice,
            bagTotalPrice: bagTotalPrice + cargoPrice + packaging,
            cargoPrice: cargoPrice,
            packaging: packaging
        }
    })
})
app.post('/remove-cart', (req, res) => {
    let product = req.body.product
    let cart = []
    let userId = null

    if (req.session.user) {
        userId = req.session.user._id
    }

    if (req.session.cart) {
        cart = req.session.cart
    }

    let productIndex = cart.findIndex(item => item._id == product._id)

    if (productIndex > -1) {
        cart.splice(productIndex, 1)
        req.session.cart = cart
    }

    // bagTotalPrice

    let packaging = 0
    let cargoPrice = 0
    let bagTotalPrice = 0
    let userCart = []
    cart.forEach(item => {
        bagTotalPrice += item.totalPrice
        userCart.push({ id: item._id, count: item.count })

        if (item.sizes) {
            cargoPrice += item.sizes.volume * 2.5 * item.count
            packaging += item.sizes.width * item.sizes.height * item.sizes.depth * 1.5 * item.count / 1000
        }
    });

    if (req.session.user) {
        Users.findOneAndUpdate({ _id: userId },
            {
                $set: {
                    cart: userCart,
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
    req.session.cart = cart
    res.status(200).json({
        cart: {
            items: req.session.cart,
            productTotal: bagTotalPrice,
            bagTotalPrice: bagTotalPrice + cargoPrice + packaging,
            cargoPrice: cargoPrice,
            packaging: packaging
        }
    })

})
app.post('/empty-cart', (req, res) => {
    let product = req.body.product

    // bagTotalPrice
    let bagTotalPrice = 0

    req.session.cart = []

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
    let src = product.name.toLowerCase().split(' ').join('_') + '.jpg'
    let img0 = req.body.product.file0
    let img1 = req.body.product.file1
    let img2 = req.body.product.file2
    let data0 = img0.replace(/^data:image\/\w+;base64,/, "");
    let data1 = img1.replace(/^data:image\/\w+;base64,/, "");
    let data2 = img2.replace(/^data:image\/\w+;base64,/, "");
    let buf0 = Buffer.from(data0, 'base64');
    let buf1 = Buffer.from(data1, 'base64');
    let buf2 = Buffer.from(data2, 'base64');
    let resizeAdrees = 'static/resize/' + src
    let smallAdrees = 'static/small/' + src
    let sizeAdrees = 'static/art/' + src

    const productAdd = new Products({
        name: product.name,
        src: src,
        sizeType: {
            xsmall: product.sizeType.xsmall,
            small: product.sizeType.small,
            normal: product.sizeType.normal,
            large: product.sizeType.large,
            xlarge: product.sizeType.xlarge,
        },
        sizes: {
            width: product.sizes.width,
            height: product.sizes.height,
            depth: product.sizes.depth,
            diameter: product.sizes.diameter,
            weight: product.sizes.weight,
            volume: product.sizes.volume,
        },
        newPrice: product.newPrice,
        oldPrice: product.oldPrice,
        stock: product.stock,
        objectType: product.objectType,
        collectionName: product.collectionName,
        fav: 0,
        color: {
            white: product.color.white,
            gray: product.color.gray,
            darkGray: product.color.darkGray,
        },
        rub: {
            smooth: product.rub.smooth,
            rough: product.rub.rough,
            roughter: product.rub.roughter,
        },
    })
    // Image Upload

    async function upImg() {
        const upOne = await fs.writeFile(resizeAdrees, buf0, (err) => {
            if (err) {
                console.log(err);
            }
        });
        const upTwo = await fs.writeFile(smallAdrees, buf1, (err) => {
            if (err) {
                console.log(err);
            }
        });
        const upThree = await fs.writeFile(sizeAdrees, buf2, (err) => {
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
    let src = product.name.toLowerCase().split(' ').join('_') + '.jpg'
    let img0 = req.body.product.file0
    let img1 = req.body.product.file1
    let img2 = req.body.product.file2
    if (img0 != null && img1 != null && img2 != null) {
        let data0 = img0.replace(/^data:image\/\w+;base64,/, "");
        let data1 = img1.replace(/^data:image\/\w+;base64,/, "");
        let data2 = img2.replace(/^data:image\/\w+;base64,/, "");
        let buf0 = Buffer.from(data0, 'base64');
        let buf1 = Buffer.from(data1, 'base64');
        let buf2 = Buffer.from(data2, 'base64');
        let resizeAdrees = 'static/resize/' + src
        let smallAdrees = 'static/small/' + src
        let sizeAdrees = 'static/art/' + src

        async function upImg() {
            const upOne = await fs.writeFile(resizeAdrees, buf0, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            const upTwo = await fs.writeFile(smallAdrees, buf1, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            const upThree = await fs.writeFile(sizeAdrees, buf2, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
        upImg()
    }

    Products.findOneAndUpdate({ _id: id },
        {
            $set: {
                name: product.name,
                src: src,
                sizeType: {
                    xsmall: product.sizeType.xsmall,
                    small: product.sizeType.small,
                    normal: product.sizeType.normal,
                    large: product.sizeType.large,
                    xlarge: product.sizeType.xlarge,
                },
                sizes: {
                    width: product.sizes.width,
                    height: product.sizes.height,
                    depth: product.sizes.depth,
                    diameter: product.sizes.diameter,
                    weight: product.sizes.weight,
                    volume: product.sizes.volume,
                },
                newPrice: product.newPrice,
                oldPrice: product.oldPrice,
                stock: product.stock,
                objectType: product.objectType,
                collectionName: product.collectionName,
                fav: product.fav,
                color: {
                    white: product.color.white,
                    gray: product.color.gray,
                    darkGray: product.color.darkGray,
                },
                rub: {
                    smooth: product.rub.smooth,
                    rough: product.rub.rough,
                    roughter: product.rub.roughter,
                },
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
        src: slide.src
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
app.post('/logOut', (req, res) => {
    req.session.user = null
    req.session.cart = []
    req.session.favItem = []

    res.status(200).json({
        favItem: {
            items: req.session.favItem,
            favTotalPrice: '0'
        },
        cart: {
            items: req.session.cart,
            productTotal: '0',
            bagTotalPrice: '0',
            cargoPrice: '0',
            packaging: '0'
        },
    })
})
app.post('/login', (req, res) => {
    let user = req.body.user
    let surname = user.name.split(' ').slice(-1)
    let userFav = []
    let userCart = []
    let fav = []
    let cart = []
    Users.findOne({ email: user.email }, (err, docs) => {
        if (docs != null) {
            req.session.user = docs
            userFav = docs.favorites
            userCart = docs.cart

            userFav.forEach(a => {
                if (req.session.allProducts) {
                    req.session.allProducts.find((item, index) => {
                        if (item._id == a.id) {
                            let product = { ...item, count: a.count }
                            if (req.session.favItem) {
                                fav = req.session.favItem
                            }
                            if (fav.length > 0) {
                                let itemIndex = fav.findIndex(itemI => itemI._id == product._id)

                                if (itemIndex > -1) {
                                    fav[itemIndex].count = product.count
                                    fav[itemIndex].totalPrice = fav[itemIndex].count * fav[itemIndex].newPrice
                                } else {
                                    fav.push({
                                        ...product,
                                        totalPrice: product.count * product.newPrice
                                    })
                                }
                            } else {
                                fav.push({
                                    ...product,
                                    totalPrice: product.count * product.newPrice
                                })
                            }
                        }
                    })
                }
            })
            userCart.forEach(a => {
                if (req.session.allProducts) {
                    req.session.allProducts.find((item, index) => {
                        if (item._id == a.id) {
                            let product = { ...item, count: a.count, selectRub: a.selectRub, selectColor: a.selectColor }
                            if (req.session.cart) {
                                cart = req.session.cart
                            }
                            if (cart.length > 0) {
                                let itemIndex = cart.findIndex(itemI => itemI._id == product._id)

                                if (itemIndex > -1) {
                                    cart[itemIndex].count = product.count
                                    cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
                                } else {
                                    cart.push({
                                        ...product,
                                        totalPrice: product.count * product.newPrice
                                    })
                                }
                            } else {
                                cart.push({
                                    ...product,
                                    totalPrice: product.count * product.newPrice
                                })
                            }
                        }
                    })
                }
            })
           
            // bagTotalPrice
            let favTotalPrice = 0
            fav.forEach(item => {
                favTotalPrice += item.totalPrice
            });
            let packaging = 0
            let cargoPrice = 0
            let bagTotalPrice = 0
            cart.forEach(item => {
                bagTotalPrice += item.totalPrice
                if (item.sizes) {
                    cargoPrice += item.sizes.volume * 2.5 * item.count
                    packaging += item.sizes.width * item.sizes.height * item.sizes.depth * 1.5 * item.count / 1000
                }
            });
            req.session.favItem = fav
            req.session.cart = cart
            res.status(200).json({
                user: req.session.user,
                favItem: {
                    items: req.session.favItem,
                    favTotalPrice: favTotalPrice
                },
                cart: {
                    items: req.session.cart,
                    productTotal: bagTotalPrice,
                    bagTotalPrice: bagTotalPrice + cargoPrice + packaging,
                    cargoPrice: cargoPrice,
                    packaging: packaging
                },
            })

        } else {
            const userAdd = new Users({
                name: user.name,
                surname: surname[0],
                email: user.email,
                areacode: user.areacode,
                phone: user.phone,
                day: user.day,
                month: user.month,
                year: user.year,
                country: user.country,
                ctiy: user.ctiy,
                town: user.town,
                district: user.district,
                address: user.address,
                favorites: [],
                cart: []
            })

            userAdd.save()
                .then((result) => {
                    Users.findOne({ email: user.email }, (err, docs) => {
                        req.session.user = docs
                        res.status(200).json({
                            user: req.session.user,
                        })
                    })
                })
        }
    })
})

app.post('/update-user', (req, res) => {
    const user = req.body.user
    const id = user.id
    Users.findByIdAndUpdate({ _id: id },
        {
            $set: {
                name: user.name,
                surname: user.surname,
                email: user.email,
                areacode: user.areacode,
                phone: user.phone,
                day: user.day,
                month: user.month,
                year: user.year,
                country: user.country,
                ctiy: user.ctiy,
                town: user.town,
                district: user.district,
                address: user.address,
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
app.post('/liked', (req, res) => {

    let product = req.body.product
    let userId = null
    let cart = []

    // req.session.title = 'BeeConcrete'
    if (req.session.user._id) {
        userId = req.session.user._id
    }
    if (req.session.favItem) {
        cart = req.session.favItem
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count += product.count
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
        } else {
            cart.push({
                ...product,
                totalPrice: product.count * product.newPrice
            })
        }
    } else {
        cart.push({
            ...product,
            totalPrice: product.count * product.newPrice
        })
    }
    Products.findOneAndUpdate({ _id: product._id },
        {
            $set: {
                fav: product.fav,
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
    // bagTotalPrice
    let userFav = []
    let favTotalPrice = 0
    cart.forEach(item => {
        favTotalPrice += item.totalPrice
        userFav.push({ id: item._id, count: item.count })
    });
    Users.findOneAndUpdate({ _id: userId },
        {
            $set: {
                favorites: userFav,
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
    req.session.favItem = cart
    res.status(200).json({
        favItem: {
            items: req.session.favItem,
            favTotalPrice: favTotalPrice
        }
    })
})
app.post('/change-liked-count', (req, res) => {
    let product = req.body.product

    let cart = []
    let userId = null

    // req.session.title = 'BeeConcrete'
    if (req.session.user._id) {
        userId = req.session.user._id
    }

    if (req.session.favItem) {
        cart = req.session.favItem
    }

    if (cart.length > 0) {
        let itemIndex = cart.findIndex(item => item._id == product._id)

        if (itemIndex > -1) {
            cart[itemIndex].count = product.newCount
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
        }
    }

    // bagTotalPrice
    let userFav = []
    let favTotalPrice = 0
    cart.forEach(item => {
        favTotalPrice += item.totalPrice
        userFav.push({ id: item._id, count: item.count })
    });
    Users.findOneAndUpdate({ _id: userId },
        {
            $set: {
                favorites: userFav,
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
    req.session.favItem = cart

    res.status(200).json({
        favItem: {
            items: req.session.favItem,
            favTotalPrice: favTotalPrice
        }
    })
})
app.post('/unliked', (req, res) => {
    let product = req.body.product
    let userId = null
    let cart = []

    // req.session.title = 'BeeConcrete'
    if (req.session.user._id) {
        userId = req.session.user._id
    }

    if (req.session.cart) {
        cart = req.session.favItem
    }

    let productIndex = cart.findIndex(item => item._id == product._id)

    if (productIndex > -1) {
        cart.splice(productIndex, 1)
        req.session.favItem = cart
    }
    Products.findOneAndUpdate({ _id: product._id },
        {
            $set: {
                fav: product.fav,
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
    // bagTotalPrice
    let userFav = []
    let favTotalPrice = 0
    cart.forEach(item => {
        favTotalPrice += item.totalPrice
        userFav.push({ id: item._id, count: item.count })
    });
    Users.findOneAndUpdate({ _id: userId },
        {
            $set: {
                favorites: userFav,
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
    req.session.favItem = cart

    res.status(200).json({
        favItem: {
            items: req.session.favItem,
            favTotalPrice: favTotalPrice
        }
    })

})
// Lang
app.post('/lang', (req, res) => {
    const selectlang = req.body.lang
    const lang = {
        tr: {
            headerList: [
                {
                    title: 'ANA SAYFA',
                    link: ''
                },
                {
                    title: 'ÜRÜNLER',
                    link: 'products'
                },
                {
                    title: 'SOSYAL',
                    link: 'social'
                },
                {
                    title: 'HAKKIMIZDA',
                    link: 'about-us'
                },
                {
                    title: 'İLETİŞİM',
                    link: 'contact'
                },
            ],
            collectionList: [
                {
                    title: 'Saksılar',
                    link: 'pots',
                    subList:
                        [
                            {
                                title: 'Arı Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'bee'
                            },
                            {
                                title: 'Kovan Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'hive'
                            },
                            {
                                title: 'Bal Peteği Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'honeycomb'
                            },
                            {
                                title: 'Kraliçe Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'queen'
                            },
                            {
                                title: 'Küp Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'cube'
                            },
                            {
                                title: 'Vazo Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'vase'
                            },
                            {
                                title: 'Uzun Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'long'
                            },
                            {
                                title: 'Küçük Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'small series'
                            }
                        ]
                },
                {
                    title: 'Mobilyalar',
                    link: 'furniture',
                    subList:
                        [
                            {
                                title: 'Kolon Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'column'
                            },
                            {
                                title: 'Masa Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'table'
                            },
                            {
                                title: 'Tabure Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'seat'
                            },
                            {
                                title: 'Küre Koleksiyonu',
                                text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                                link: 'ball'
                            }
                        ]
                },
                {
                    title: 'Kaplamalar',
                    link: 'covering',
                    subList: [
                        {
                            title: 'Kaplamalar',
                            text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                            link: 'covering'
                        }
                    ]
                },
                {
                    title: 'Fırınlar',
                    link: 'oven',
                    subList: [
                        {
                            title: 'Fırınlar',
                            text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                            link: 'oven'
                        }
                    ]
                },
                {
                    title: 'Fiber',
                    link: 'fiber',
                    subList: [
                        {
                            title: 'Fiber Koleksiyonu',
                            text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                            link: 'fiber'
                        }
                    ]
                }
            ],
            button: {
                goCollection: 'Koleksiyona Git',
                addToCart: 'Sepete Ekle',
                getAnOffer: 'Teklif Al',
                cancel: 'Vazgeç',
                pay: 'ÖDEMEYE GEÇ',
                goBack: 'Geri Git',
                save: 'Kaydet',
                delete: 'Sil',
                update: 'Güncelle',
                send: 'Gönder',
                pay: 'ÖDEMEYİ TAMAMLA',
                signOut: 'Oturumu Kapat',
                delAccount: 'Hesabı Sil',
                ok: 'TAMAM',
                getOffer: 'Teklif Al'

            },
            title: {
                fav: 'Favori Ürünler',
                discount: 'Kampanyalı Ürünler',
                special: 'Özel Seri'
            },
            slider: [
                {
                    title: 'Arı Koleksiyonu',
                    text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                    link: 'bee',
                    src: 'bee_no_4.jpg'
                },
                {
                    title: 'Kovan Koleksiyonu',
                    text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                    link: 'hive',
                    src: 'hive_no_1.jpg'
                },
                {
                    title: 'Bal Peteği Koleksiyonu',
                    text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                    link: 'honeycomb',
                    src: 'honeycomb_no_5.jpg'
                },
                {
                    title: 'Kolon Koleksiyonu',
                    text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                    link: 'column',
                    src: 'column_no_2.jpg'
                },
                {
                    title: 'Masa Koleksiyonu',
                    text: 'Dizayn, Dekorasyon, Tasarım, Sağlamlık, Kalite, Müşteri Memnuniyeti, Hızlı Teslimat, Güven, Ekonomik, Deneyim, Tecrübe...',
                    link: 'table',
                    src: 'table_no_1.jpg'
                },
            ],
            characteristic: {
                safe: {
                    src: 'safe',
                    title: 'GÜVEN',
                    text: 'Güvenlik açıklama',
                },
                desing: {
                    src: 'desing',
                    title: 'TASARIM',
                    text: 'Tasarım Açıklama',
                },
                quality: {
                    src: 'quality',
                    title: 'KALİTE',
                    text: 'Kalite Açıklama',
                },
            },
            pageTitle: {
                social: 'SOSYAL',
                aboutUs: 'HAKKIMIZDA',
                contact: 'İLETİŞİM',
                myFavorites: 'FAVORİLERİM',
                myCart: 'SEPETİM',
                myProfile: 'PROFİLİM',
                addressInfo: 'Adres Bilgileri',
                cartInfo: 'Sepet Bilgileri',
                login: 'Giriş Yapın Yada Kaydolun',
                orderOk:
                {
                    header: 'Siparişiniz alınmıştır.',
                    title: 'Siparişiniz başarıyla tamamlanmıştır. \
                Ürününüz kargoya verildiğinde SMS ile bilgilendirileceksiniz. \
                Faturanız ürün paketinizin içerisinde tarafınıza ulaştırılacak. \
                Bizi tercih ettiğiniz için teşekkür eder , iyi günler dileriz.',
                    redirect: 'Anasayfaya yönlendiriliyorsunuz . Beklememek için buraya tıklayınız..'
                },
                orderFailed:
                {
                    header: 'Siparişiniz tamamlanamadı !',
                    title: 'Siparişiniz oluşturulurken bir sorunla karşılaşıldı . \
                    Lütfen yeniden deneyiniz yada destek almak için iletişim sayfasında bulunan telefon numarası ile bize ulaşabilirsiniz. İyi alışverişler dileriz .',
                    redirect: 'Seperim sayfasına yönlendiriliyorsunuz . Beklememek için buraya tıklayınız..'
                },
            },
            inputData: [
                {
                    input: [
                        {
                            id: 'name',
                            placeholder: 'Adınızı Yazınız',
                            title: 'Adınız',
                            type: 'text',
                            data: []
                        },
                        {
                            id: 'surname',
                            placeholder: 'Soyadınızı Yazınız',
                            title: 'Soyadınız',
                            type: 'text',
                            data: []
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'email',
                            placeholder: 'Email',
                            title: 'E-mail',
                            type: 'email',
                            data: []
                        }
                    ]
                },
                {
                    input: [
                        {
                            id: 'areacode',
                            placeholder: '+90',
                            title: 'Alan Kodu',
                            type: 'number',
                            data: [
                                '+90'
                            ]
                        },
                        {
                            id: 'phone',
                            placeholder: '500 00 00',
                            title: 'Telefon numarası',
                            type: 'tel',
                            data: []
                        }
                    ]
                },
                {
                    input: [
                        {
                            id: 'day',
                            placeholder: 'Gün',
                            title: 'Gün',
                            type: 'number',
                            data: [
                                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
                            ]

                        },
                        {
                            id: 'month',
                            placeholder: 'Ay',
                            title: 'Ay',
                            type: 'number',
                            data: [
                                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
                            ]

                        },
                        {
                            id: 'year',
                            placeholder: 'Yıl',
                            title: 'Yıl',
                            type: 'number',
                            data: []

                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'country',
                            placeholder: 'Ülke',
                            title: 'Ülke',
                            type: 'text',
                            data: [
                                'TÜRKİYE'
                            ]
                        },
                        {
                            id: 'ctiy',
                            placeholder: 'Şehir',
                            title: 'Şehir',
                            type: 'text',
                            data: [
                                "ADANA",
                                "KOCAELİ",
                                "ADIYAMAN",
                                "KONYA",
                                "AFYONKARAHİSAR",
                                "KÜTAHYA",
                                "AĞRI",
                                "MALATYA",
                                "AMASYA",
                                "MANİSA",
                                "ANKARA",
                                "KAHRAMANMARAŞ",
                                "ANTALYA",
                                "MARDİN",
                                "ARTVİN",
                                "MUĞLA",
                                "AYDIN",
                                "MUŞ",
                                "BALIKESİR",
                                "NEVŞEHİR",
                                "BİLECİK",
                                "NİĞDE",
                                "BİNGÖL",
                                "ORDU",
                                "BİTLİS",
                                "RİZE",
                                "BOLU",
                                "SAKARYA",
                                "BURDUR",
                                "SAMSUN",
                                "BURSA",
                                "SİİRT",
                                "ÇANAKKALE",
                                "SİNOP",
                                "ÇANKIRI",
                                "SİVAS",
                                "ÇORUM",
                                "TEKİRDAĞ",
                                "DENİZLİ",
                                "TOKAT",
                                "DİYARBAKIR",
                                "TRABZON",
                                "EDİRNE",
                                "TUNCELİ",
                                "ELAZIĞ",
                                "ŞANLIURFA",
                                "ERZİNCAN",
                                "UŞAK",
                                "ERZURUM",
                                "VAN",
                                "ESKİŞEHİR",
                                "YOZGAT",
                                "GAZİANTEP ZONGULDAK",
                                "GİRESUN",
                                "AKSARAY",
                                "GÜMÜŞHANE",
                                "BAYBURT",
                                "HAKKARİ",
                                "KARAMAN",
                                "HATAY",
                                "KIRIKKALE",
                                "ISPARTA",
                                "BATMAN",
                                "MERSİN",
                                "ŞIRNAK",
                                "İSTANBUL",
                                "BARTIN",
                                "İZMİR",
                                "ARDAHAN",
                                "KARS",
                                "IĞDIR",
                                "KASTAMONU",
                                "YALOVA",
                                "KAYSERİ",
                                "KARABÜK",
                                "KIRKLARELİ",
                                "KİLİS",
                                "KIRŞEHİR",
                                "OSMANİYE",
                                "DÜZCE",
                            ]
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'town',
                            placeholder: 'Mahalle',
                            title: 'Mahalle',
                            type: 'text',
                            data: []
                        },
                        {
                            id: 'district',
                            placeholder: 'Semt',
                            title: 'Semt',
                            type: 'text',
                            data: []
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'address',
                            placeholder: 'Adres',
                            title: 'Adres',
                            type: 'text',
                            data: []
                        }
                    ]
                },
            ],
            global: {
                name: 'Adınız',
                surname: 'Soyadınız',
                areacode: 'Alan Kodu',
                email: 'Email',
                phone: 'Telefon Numarası',
                day: 'Gün',
                month: 'Ay',
                year: 'Yıl',
                country: 'Ülke',
                ctiy: 'Şehir',
                town: 'Mahalle',
                district: 'Semt',
                address: 'Adres',
                subject: 'Konu',
                message: 'Mesaj',
                allProducts: 'Tüm Ürünler',
                emptyCart: 'Sepetinizde ürün bulunmuyor !',
                emptyFav: 'Favorilerinizde ürün bulunmuyor !',
                order: 'Sipariş Özeti',
                discount: 'İndirim',
                productsTotal: 'Ürün Toplamı',
                packaging: 'Paketleme',
                total: 'Toplam',
                cargo: 'Kargo',
                addressInfo: 'Adres Bilgileri',
                selectedProducts: 'Seçili Ürünler',
                yourOffer: 'Tekliniz ?'
            },
            aboutUs: {
                header: 'BEE CONCRETE DESING',
                titleOne: "Bee Concrete Design, beton saksılardan beton kaplama\
                 bileşenlerine kadar beton tasarımları ve ilgili ürünleri geliştiren ve satan Türk kökenli yeni bir markadır.",
                titleTwo: "Şirketin genel merkezi, showroomu ve deposu Türkiye Kahramanmaraş'ta bulunmaktadır.\
                2012 yılındaki kuruluşumuzdan bu yana, tasarımın herkes için erişilebilir \
                olması gerektiği inancına dayanan geniş bir ürün yelpazesini hedefliyoruz. \
                Bu yüzden her zaman tasarım, kalite ve fiyat arasındaki mükemmel dengeyi arıyoruz.\
                Her Arı Beton ürünü, sade ama zarif bir bakış açısıyla tasarlanmıştır.\
                Sıkıcı olduğunu düşünmeden temel formlara ve şekillere inanıyoruz."
            },
            popup: {
                addCart: 'Product added to cart !',
                addFav: 'Product added to favorites !',
                goodShopping: 'Good shopping !',
                emptyFav: 'Önce bir ürün eklemelisiniz !'
            },
            userList: {
                myProfile: 'Profilim',
                myOrders: 'Siparişlerim',
                addresInfo: 'Adres Bilgilerim',
                myFavorites: 'Favorilerim',
                myOffers: 'Tekliflerim'
            }
        },
        en: {
            headerList: [
                {
                    title: 'HOME',
                    link: ''
                },
                {
                    title: 'PRODUCTS',
                    link: 'products'
                },
                {
                    title: 'SOCIAL',
                    link: 'social'
                },
                {
                    title: 'ABOUT US',
                    link: 'about-us'
                },
                {
                    title: 'CONTACT',
                    link: 'contact'
                },
            ],
            collectionList: [
                {
                    title: 'Pots',
                    link: 'pots',
                    subList:
                        [
                            {
                                title: 'Bee Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'bee'
                            },
                            {
                                title: 'Hive Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'hive'
                            },
                            {
                                title: 'HoneyComb Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'honeycomb'
                            },
                            {
                                title: 'Queen Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'queen'
                            },
                            {
                                title: 'Cube Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'cube'
                            },
                            {
                                title: 'Vase Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'vase'
                            },
                            {
                                title: 'Long Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'long'
                            },
                            {
                                title: 'Small Series',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'small series'
                            }
                        ]
                },
                {
                    title: 'Furniture',
                    link: 'furniture',
                    subList:
                        [
                            {
                                title: 'Column Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'column'
                            },
                            {
                                title: 'Table Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'table'
                            },
                            {
                                title: 'Seat Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'seat'
                            },
                            {
                                title: 'Ball Collection',
                                text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                                link: 'ball'
                            }
                        ]
                },
                {
                    title: 'Covering',
                    link: 'covering',
                    subList: [
                        {
                            title: 'Covering',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'covering'
                        }
                    ]
                },
                {
                    title: 'Oven',
                    link: 'oven',
                    subList: [
                        {
                            title: 'Oven',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'oven'
                        }
                    ]
                },
                {
                    title: 'Fiber',
                    link: 'fiber',
                    subList: [
                        {
                            title: 'Fiber Collection',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'fiber'
                        }
                    ]
                }
            ],
            button: {
                goCollection: 'Go Collection',
                addToCart: 'Add To Cart',
                getAnOffer: 'Get An Offer',
                cancel: 'Cancel',
                pay: 'PAY',
                goBack: 'Go Back',
                save: 'Save',
                delete: 'Delete',
                update: 'Update',
                send: 'Send',
                pay: 'PAY',
                signOut: 'Sign Out',
                delAccount: 'Delete Account',
                ok: 'OK',
                getOffer: 'Get Offer'

            },
            title: {
                fav: 'Favorite Products',
                discount: 'Promotional Products',
                special: 'Special Series'
            },
            slider: [
                {
                    title: 'Bee Collection',
                    text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                    link: 'bee',
                    src: 'bee_no_4.jpg'
                },
                {
                    title: 'Hive Collection',
                    text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                    link: 'hive',
                    src: 'hive_no_1.jpg'
                },
                {
                    title: 'HoneyComb Collection',
                    text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                    link: 'honeycomb',
                    src: 'honeycomb_no_5.jpg'
                },
                {
                    title: 'Column Collection',
                    text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                    link: 'column',
                    src: 'column_no_2.jpg'
                },
                {
                    title: 'Table Collection',
                    text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                    link: 'table',
                    src: 'table_no_1.jpg'
                },
            ],
            characteristic: {
                safe: {
                    src: 'safe',
                    title: 'SAFE',
                    text: 'Safe Info',
                },
                desing: {
                    src: 'desing',
                    title: 'DESING',
                    text: 'Desing Info',
                },
                quality: {
                    src: 'quality',
                    title: 'QUALITY',
                    text: 'Quality Info',
                },
            },
            pageTitle: {
                social: 'SOCIAL',
                aboutUs: 'ABOUT US',
                contact: 'CONTACT',
                myFavorites: 'MY FAVORITES',
                myCart: 'MY CART',
                myProfile: 'MY PROFILE',
                addressInfo: 'Address information',
                cartInfo: 'Cart Information',
                login: 'Sign In or Sign Up',
                orderOk:
                {
                    header: 'Your order has been completed',
                    title: 'Your Order Has Been Successfully Completed. \
                    You will be informed by sms when your product is shipped. \
                    Your invoice will reach you in the package with your products. \
                    For choosing us thank you and have a nice day.',
                    redirect: 'You are being redirected to the homepage. Click here to not wait..'
                },
                orderFailed:
                {
                    header: 'Your order has not been completed !',
                    title: 'Your order encountered a problem that you requested . \
                    Please try again or contact us at the phone number on the contact page for support. We wish you well.',
                    redirect: 'You are being redirected to the My Cart page. Click here to not wait.'
                },
            },
            inputData: [
                {
                    input: [
                        {
                            id: 'name',
                            placeholder: 'Your Name',
                            title: 'Name',
                            type: 'text',
                            data: []
                        },
                        {
                            id: 'surname',
                            placeholder: 'Your Surname',
                            title: 'Surname',
                            type: 'text',
                            data: []
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'email',
                            placeholder: 'Your Email',
                            title: 'E-mail',
                            type: 'email',
                            data: []
                        }
                    ]
                },
                {
                    input: [
                        {
                            id: 'areacode',
                            placeholder: '+90',
                            title: 'Area Code',
                            type: 'number',
                            data: [
                                '+90'
                            ]
                        },
                        {
                            id: 'phone',
                            placeholder: '500 00 00',
                            title: 'Phone Number',
                            type: 'tel',
                            data: []
                        }
                    ]
                },
                {
                    input: [
                        {
                            id: 'day',
                            placeholder: 'Day',
                            title: 'Day',
                            type: 'number',
                            data: [
                                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
                            ]

                        },
                        {
                            id: 'month',
                            placeholder: 'Month',
                            title: 'Month',
                            type: 'number',
                            data: [
                                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
                            ]

                        },
                        {
                            id: 'year',
                            placeholder: 'Year',
                            title: 'Year',
                            type: 'number',
                            data: []

                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'country',
                            placeholder: 'Your Country',
                            title: 'Country',
                            type: 'text',
                            data: [
                                'TÜRKİYE'
                            ]
                        },
                        {
                            id: 'ctiy',
                            placeholder: 'Your Ctiy',
                            title: 'City',
                            type: 'text',
                            data: [
                                "ADANA",
                                "KOCAELİ",
                                "ADIYAMAN",
                                "KONYA",
                                "AFYONKARAHİSAR",
                                "KÜTAHYA",
                                "AĞRI",
                                "MALATYA",
                                "AMASYA",
                                "MANİSA",
                                "ANKARA",
                                "KAHRAMANMARAŞ",
                                "ANTALYA",
                                "MARDİN",
                                "ARTVİN",
                                "MUĞLA",
                                "AYDIN",
                                "MUŞ",
                                "BALIKESİR",
                                "NEVŞEHİR",
                                "BİLECİK",
                                "NİĞDE",
                                "BİNGÖL",
                                "ORDU",
                                "BİTLİS",
                                "RİZE",
                                "BOLU",
                                "SAKARYA",
                                "BURDUR",
                                "SAMSUN",
                                "BURSA",
                                "SİİRT",
                                "ÇANAKKALE",
                                "SİNOP",
                                "ÇANKIRI",
                                "SİVAS",
                                "ÇORUM",
                                "TEKİRDAĞ",
                                "DENİZLİ",
                                "TOKAT",
                                "DİYARBAKIR",
                                "TRABZON",
                                "EDİRNE",
                                "TUNCELİ",
                                "ELAZIĞ",
                                "ŞANLIURFA",
                                "ERZİNCAN",
                                "UŞAK",
                                "ERZURUM",
                                "VAN",
                                "ESKİŞEHİR",
                                "YOZGAT",
                                "GAZİANTEP ZONGULDAK",
                                "GİRESUN",
                                "AKSARAY",
                                "GÜMÜŞHANE",
                                "BAYBURT",
                                "HAKKARİ",
                                "KARAMAN",
                                "HATAY",
                                "KIRIKKALE",
                                "ISPARTA",
                                "BATMAN",
                                "MERSİN",
                                "ŞIRNAK",
                                "İSTANBUL",
                                "BARTIN",
                                "İZMİR",
                                "ARDAHAN",
                                "KARS",
                                "IĞDIR",
                                "KASTAMONU",
                                "YALOVA",
                                "KAYSERİ",
                                "KARABÜK",
                                "KIRKLARELİ",
                                "KİLİS",
                                "KIRŞEHİR",
                                "OSMANİYE",
                                "DÜZCE",
                            ]
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'town',
                            placeholder: 'Your Town',
                            title: 'Town',
                            type: 'text',
                            data: []
                        },
                        {
                            id: 'district',
                            placeholder: 'Your District',
                            title: 'District',
                            type: 'text',
                            data: []
                        },
                    ]
                },
                {
                    input: [
                        {
                            id: 'address',
                            placeholder: 'Your Address',
                            title: 'Address',
                            type: 'text',
                            data: []
                        }
                    ]
                },
            ],
            global: {
                name: 'Name',
                surname: 'Surname',
                areacode: 'Area Code',
                email: 'Email',
                phone: 'Phone Number',
                day: 'Day',
                month: 'Month',
                year: 'Year',
                country: 'Country',
                ctiy: 'Ctiy',
                town: 'Town',
                district: 'District',
                address: 'Address',
                subject: 'Subject',
                message: 'Message',
                allProducts: 'All Products',
                emptyCart: 'Your Cart is Empty !',
                emptyFav: 'Your Favorites is Empty !',
                order: 'Order Summary',
                discount: 'Discount',
                productsTotal: 'Products Total',
                packaging: 'Packaging',
                total: 'Total',
                cargo: 'Cargo',
                addressInfo: 'Address Information',
                selectedProducts: 'Selected Products',
                yourOffer: 'Your Offer ?'
            },
            aboutUs: {
                header: 'BEE CONCRETE DESING',
                titleOne: "Bee Concrete Design is a new brand with Turkish root,\
                developing and selling concrete designes and related products,\
                from concrete pots to concrete covering components.",
                titleTwo: "The company has its headquarter, showroom and warehouse in Kahramanmaraş,\
                the Turkey. Since our foundation in 2012, we aim for an extensive assortment that is\
                based on the belief that design should be available for everyone.\
                That is why we are always looking for the perfect balance between design,\
                quality and price. Every Bee Concrete product is designed from a simple but\
                elegant perspective. We believe in basic forms and shapes, without thinking of it as boring."
            },
            popup: {
                addCart: 'Product added to cart !',
                addFav: 'Product added to favorites !',
                goodShopping: 'Good shopping !',
                emptyFav: 'Add a product first !'
            },
            userList: {
                myProfile: 'My Profile',
                myOrders: 'My Orders',
                addresInfo: 'Address Information',
                myFavorites: 'My Favorites',
                myOffers: 'My Offers'
            }
        }
    }
    if (selectlang) {
        req.session.lang = lang[selectlang]
    } else {
        req.session.lang = lang['en']
    }
    res.status(200).json({
        lang: req.session.lang
    })
})

module.exports = {
    path: '/api',
    handler: app
}