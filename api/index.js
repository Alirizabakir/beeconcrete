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
var merchant_ok_url = 'https://www.beeconcrete.com.tr/products';
// Ödeme sürecinde beklenmedik bir hata oluşması durumunda müşterinizin yönlendirileceği sayfa
// Bu sayfa siparişi iptal edeceğiniz sayfa değildir! Yalnızca müşterinizi bilgilendireceğiniz sayfadır!
var merchant_fail_url = 'https://www.beeconcrete.com.tr/failed';
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
    user_phone = payData.user.phonenumber
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
                        social.reverse()
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
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].newPrice
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
    let imgName = product.name.split(' ').join('_') + '.jpg'
    let img = req.body.product.file
    let data = img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    let resizeAdrees = 'static/resize/' + imgName
    let smallAdrees = 'static/small/' + imgName
    let sizeAdrees = 'static/size/' + imgName

    const productAdd = new Products({
        name: product.name,
        src: imgName,
        sizes: {
            width: product.sizes.width,
            widthtop: product.sizes.widthtop,
            widthunder: product.sizes.widthunder,
            height: product.sizes.height,
            heighttop: product.sizes.heighttop,
            heightunder: product.sizes.heightunder,
            depth: product.sizes.depth,
            depthtop: product.sizes.depthtop,
            depthunder: product.sizes.depthunder,
            diameter: product.sizes.diameter,
            weight: product.sizes.weight,
        },
        newPrice: product.newPrice,
        oldPrice: product.oldPrice,
        stock: product.stock,
        collectionName: product.collectionName,
        fav: 0,
        color: {
            white: product.color.white,
            gray: product.color.gray,
            darkGray: product.color.darkGray,
        },
        rub: {
            smooth: product.rub.smooth,
            rough: product.rub.darkGroughray,
            roughter: product.rub.roughter,
        },
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
        const upThree = await fs.writeFile(sizeAdrees, buf, (err) => {
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
                src: product.src,
                sizes: {
                    width: product.sizes.width,
                    widthtop: product.sizes.widthtop,
                    widthunder: product.sizes.widthunder,
                    height: product.sizes.height,
                    heighttop: product.sizes.heighttop,
                    heightunder: product.sizes.heightunder,
                    depth: product.sizes.depth,
                    depthtop: product.sizes.depthtop,
                    depthunder: product.sizes.depthunder,
                    diameter: product.sizes.diameter,
                    weight: product.sizes.weight,
                },
                newPrice: product.newPrice,
                oldPrice: product.oldPrice,
                stock: product.stock,
                collectionName: product.collectionName,
                fav: 0,
                color: {
                    white: product.color.white,
                    gray: product.color.gray,
                    darkGray: product.color.darkGray,
                },
                rub: {
                    smooth: product.rub.smooth,
                    rough: product.rub.darkGroughray,
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
app.post('/login', (req, res) => {
    let user = req.body.user
    Users.findOne({ email: user.email }, (err, docs) => {
        if (docs != null) {
            req.session.user = docs
            res.status(200).json({
                user: req.session.user,
            })
        } else {
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

module.exports = {
    path: '/api',
    handler: app
}