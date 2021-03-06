import Cookie from 'js-cookie'
import { getAuth, deleteUser, signOut } from "firebase/auth";
import axios from "axios";
export const state = () => ({
    // Popup
    favPopup: false,
    popup: false,
    emptyFav: false,
    // Admin
    loading: false,
    products: [],
    showProducts: [],
    sliders: [],
    social: [],
    about: [],
    favItem: [],
    id: null,
    iframetoken: null,
    bigProduct: null,
    cart: null,
    totalPrice: 0.0,
    cargoPrice: 0.0,
    productTotal: 0.0,
    packaging: 0.0,
    favTotalPrice: 0.0,
    changeHeader: 'All Products',
    authKey: null,
    user: null,
    admin: false,
    displayForm: false,
    lang: {
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
                            title: 'SideBoard Collection',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'sideboard'
                        },
                    ]
            },
            {
                title: 'Long Collection',
                link: 'long',
                subList:
                    [
                        {
                            title: 'Long Bee Collection',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'long'
                        },
                    ]
            },
            {
                title: 'Custom Production',
                link: 'custom',
                subList:
                    [
                        {
                            title: 'Custom Production',
                            text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                            link: 'custom'
                        },
                    ]
            },
            {
                title: 'Covering',
                link: 'covering',
                subList: [
                    {
                        title: 'Covering Collection',
                        text: 'Decoration, Design, Robustness, Quality, Customer Satisfaction, Fast Delivery, Trust, Economic, Experience, Experience...',
                        link: 'covering'
                    }
                ]
            },

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
            special: 'Special Series',
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
                src: 'column_no_1.jpg'
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
                            'T??RK??YE'
                        ]
                    },
                    {
                        id: 'ctiy',
                        placeholder: 'Your Ctiy',
                        title: 'City',
                        type: 'text',
                        data: [
                            "ADANA",
                            "KOCAEL??",
                            "ADIYAMAN",
                            "KONYA",
                            "AFYONKARAH??SAR",
                            "K??TAHYA",
                            "A??RI",
                            "MALATYA",
                            "AMASYA",
                            "MAN??SA",
                            "ANKARA",
                            "KAHRAMANMARA??",
                            "ANTALYA",
                            "MARD??N",
                            "ARTV??N",
                            "MU??LA",
                            "AYDIN",
                            "MU??",
                            "BALIKES??R",
                            "NEV??EH??R",
                            "B??LEC??K",
                            "N????DE",
                            "B??NG??L",
                            "ORDU",
                            "B??TL??S",
                            "R??ZE",
                            "BOLU",
                            "SAKARYA",
                            "BURDUR",
                            "SAMSUN",
                            "BURSA",
                            "S????RT",
                            "??ANAKKALE",
                            "S??NOP",
                            "??ANKIRI",
                            "S??VAS",
                            "??ORUM",
                            "TEK??RDA??",
                            "DEN??ZL??",
                            "TOKAT",
                            "D??YARBAKIR",
                            "TRABZON",
                            "ED??RNE",
                            "TUNCEL??",
                            "ELAZI??",
                            "??ANLIURFA",
                            "ERZ??NCAN",
                            "U??AK",
                            "ERZURUM",
                            "VAN",
                            "ESK????EH??R",
                            "YOZGAT",
                            "GAZ??ANTEP ZONGULDAK",
                            "G??RESUN",
                            "AKSARAY",
                            "G??M????HANE",
                            "BAYBURT",
                            "HAKKAR??",
                            "KARAMAN",
                            "HATAY",
                            "KIRIKKALE",
                            "ISPARTA",
                            "BATMAN",
                            "MERS??N",
                            "??IRNAK",
                            "??STANBUL",
                            "BARTIN",
                            "??ZM??R",
                            "ARDAHAN",
                            "KARS",
                            "I??DIR",
                            "KASTAMONU",
                            "YALOVA",
                            "KAYSER??",
                            "KARAB??K",
                            "KIRKLAREL??",
                            "K??L??S",
                            "KIR??EH??R",
                            "OSMAN??YE",
                            "D??ZCE",
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
            email: 'Email',
            areacode: 'Area Code',
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
            yourOffer: 'Your Offer'
        },
        aboutUs: {
            header: 'BEE CONCRETE DESING',
            titleOne: "Bee Concrete Design is a new brand with Turkish root,\
            developing and selling concrete designes and related products,\
            from concrete pots to concrete covering components.",
            titleTwo: "The company has its headquarter, showroom and warehouse in Kahramanmara??,\
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
    },
});

export const mutations = {
    // Set Popup
    setPopup(state, popup) {
        if (popup.type == 'addCart') {
            state.popup = popup.status
        } else if (popup.type == 'addFav') {
            state.favPopup = popup.status
        } else if (popup.type = 'empty') {
            state.emptyFav = popup.status
        }
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setLang(state, lang) {
        state.lang = lang
    },
    // Set iframetoken
    setIframeToken(state, token) {
        state.iframetoken = token
    },
    // Set FavItem
    setFavItem(state, favItem) {
        state.favItem = favItem
    },
    setFavTotalPrice(state, totalPrice) {
        state.favTotalPrice = totalPrice
    },
    // Set About
    setAbout(state, about) {
        state.about = about
    },
    // Set Social
    setSocial(state, social) {
        state.social = social
    },
    // Set Products
    setProducts(state, products) {
        state.products = products
    },
    setProductBig(state, product) {
        state.bigProduct = product
    },
    setCart(state, cart) {
        state.cart = cart
    },
    setPackaging(state, packaging) {
        state.packaging = packaging
    },
    setTotalPrice(state, totalPrice) {
        state.totalPrice = totalPrice
    },
    setCargoPrice(state, totalPrice) {
        state.cargoPrice = totalPrice
    },
    setProductPrice(state, totalPrice) {
        state.productTotal = totalPrice
    },
    setBigProduct(state, id) {
        state.bigProduct = state.products.find(a => a._id == id)
    },
    // Set Silder
    setSlider(state, sliders) {
        state.sliders = sliders
    },
    // Filter ShowProduct
    // filterProducts(state, filterValue) {
    //     state.changeHeader = filterValue
    //     if (filterValue == 'All Products') {
    //         state.showProducts = state.products
    //     } else if (filterValue != 'Pot' && filterValue != 'Furniture') {
    //         state.showProducts = state.products.filter(a => a.collectionName == filterValue.toLowerCase())
    //     } else if (filterValue == 'Pot' || filterValue == 'Furniture') {
    //         if (filterValue == 'Pot') {
    //             state.showProducts = state.products.filter(a => a.collectionName == 'bee')
    //         } else {
    //             state.showProducts = state.products.filter(a => a.collectionName == 'table')
    //         }
    //     }
    // },
    removeProduct(state, id) {
        let index = state.products.findIndex(a => a._id == id)
        state.products.splice(index, 1)
    },
    // Cookie 
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        if (!authUser) {
            state.user = false
            state.loginKey = false
        } else {
            // Do something with the authUser and the claims object...
            if (!state.user) {
                let expiresIn = new Date().getTime() + claims.auth_time / 2
                Cookie.set('authKey', claims.user_id, { samesite: 'strict', user: 'hussein', secure: true })
                Cookie.set('expiresIn', expiresIn, { samesite: 'strict', user: 'hussein', secure: true })
                if (process.client) {
                    localStorage.setItem('authKey', claims.user_id)
                    localStorage.setItem('expiresIn', expiresIn)
                }
                state.authKey = claims.user_id

            }
        }
    },
    setAuthKey(state, authKey) {
        state.authKey = authKey
    },
    setUser(state, user) {
        if (user) {
            const sessionUser = {}
            Object.keys(user).forEach(key => {
                if (key != '__v' && key != '_id' && key != 'createdAt' && key != 'updatedAt') {
                    sessionUser[key] = user[key]
                }
            });
            state.user = sessionUser
            state.id = user['_id']
        }
    },
    clearAuthKey(state) {
        if (process.client) {
            localStorage.removeItem('authKey')
            localStorage.removeItem('expiresIn')
        }
        Cookie.remove('authKey')
        Cookie.remove('expiresIn')

        state.authKey = false
        state.user = false
    },
};

export const actions = {
    // Lang 
    langMethods(vuexContext, lang) {
        this.$axios.post('/lang', { lang })
            .then(response => {
                vuexContext.commit("setLang", response.data.lang)
            })
    },
    // Pay
    payMethods(vuexContext, payData) {
        this.$axios.post('/pay-go', { payData: payData })
            .then(response => {
                console.log(response.data.iframetoken);
                vuexContext.commit("setIframeToken", response.data.iframetoken)
            })
    },
    // Get Data
    nuxtServerInit(vuexContext, context) {
        return context.$axios.get('/')
            .then(response => {
                vuexContext.commit("setProducts", response.data.products)
                vuexContext.commit("setSlider", response.data.sliders)
                vuexContext.commit("setSocial", response.data.social)
                vuexContext.commit("setAbout", response.data.about)
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                vuexContext.commit("setPackaging", response.data.cart.packaging)
                vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
                vuexContext.state.showProducts = response.data.products
                if (response.data.user != null) {
                    vuexContext.commit("setUser", response.data.user);
                }
                if (response.data.lang != null) {
                    vuexContext.commit("setLang", response.data.lang)
                }

            })
    },
    // All Products Upload
    allProductUpload(vuexContext, product) {
        this.$axios.post('/all-products-add', { product: product })
            .then(response => {
                console.log('Ok');
            })
    },
    // Session Methods
    addToCart(vuexContext, product) {
        vuexContext.commit('setLoading', true)
        this.$axios.post('/add-to-cart', { product: product })
            .then(response => {
                console.log('Succes')
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                vuexContext.commit("setPackaging", response.data.cart.packaging)
                vuexContext.commit('setPopup', { type: 'addCart', status: true })

                setTimeout(() => {
                    vuexContext.commit('setLoading', false)
                }, 1000);

                setTimeout(() => {
                    vuexContext.commit('setPopup', { type: 'addCart', status: false })
                }, 2000);
            })
    },
    removeCart(vuexContext, product) {
        this.$axios.post('/remove-cart', { product: product })
            .then(response => {
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                vuexContext.commit("setPackaging", response.data.cart.packaging)
            })
    },
    emptyCart(vuexContext, product) {
        this.$axios.post('/empty-cart', product)
            .then(response => {
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit('setTotalPrice', response.data.cart.bagTotalPrice)
            })
    },
    changeCount(vuexContext, product) {
        this.$axios.post('/change-count', { product: product })
            .then(response => {
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                vuexContext.commit("setPackaging", response.data.cart.packaging)
            })
    },
    // MongoDB Product Methods
    newProduct(vuexContext, product) {
        this.$axios.post('/new-product', { product: product })
            .then(response => {
                vuexContext.commit("setProducts", response.data.products)
            })
    },
    delProduct(vuexContext, id) {
        this.$axios.post('/del-product', { id: id })
            .then(response => {
                vuexContext.commit("setProducts", response.data.products)
            })
    },

    updateProduct(vuexContext, product) {
        this.$axios.post('/update-product', { product: product })
            .then(response => {
                vuexContext.commit("setProducts", response.data.products)
                console.log('Update');
            })
    },
    searchProduct(vuexContext, id) {
        vuexContext.commit('setBigProduct', id)
    },
    // MongoDB Slider Methods
    addSlider(vuexContext, slide) {
        this.$axios.post('/new-slider', { slide: slide })
            .then(response => {
                vuexContext.commit("setSlider", response.data.slider)
            })
    },
    delSlider(vuexContext, name) {
        this.$axios.post('/del-slider', { name: name })
            .then(response => {
                vuexContext.commit("setSlider", response.data.sliders)
            })
    },
    //MongoDB Social Methods 
    addSocial(vuexContext, social) {
        this.$axios.post('/new-social', { social: social })
            .then(response => {
                vuexContext.commit("setSocial", response.data.social)
            })
    },
    delSocial(vuexContext, id) {
        this.$axios.post('/del-social', { id: id })
            .then(response => {
                vuexContext.commit("setSocial", response.data.social)
            })
    },
    // MongoDB About Methods 
    updateAbout(vuexContext, about) {
        this.$axios.post('/update-about', { about: about })
            .then(response => {
                vuexContext.commit("setAbout", response.data.about)
            })
    },
    // Router Big Product
    bigProduct(vuexContext, product) {
        vuexContext.commit('setBigProduct', product)
    },
    // FavItem Methods
    liked(vuexContext, product) {
        this.$axios.post('/liked', { product: product })
            .then(response => {
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
                console.log(response.data.favItem.favTotalPrice);
                if (product.status) {
                    vuexContext.commit('setPopup', { type: 'addFav', status: true })
                    setTimeout(() => {
                        vuexContext.commit('setPopup', { type: 'addFav', status: false })
                    }, 2000);
                }
            })
    },
    changeLikedCount(vuexContext, product) {
        this.$axios.post('/change-liked-count', { product: product })
            .then(response => {
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
            })
    },
    unliked(vuexContext, product) {
        this.$axios.post('/unliked', { product: product })
            .then(response => {
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
            })
    },
    // User Methods
    onAuthStateChangedAction: (vuexContext, { authUser, claims }) => {
        if (!authUser) {
            state.user = false
        } else {
            // axios.post('http://localhost:3000/api/login', { user: claims })
            axios.post('https://www.beeconcrete.com.tr/api/login', { user: claims })
                .then(response => {
                    vuexContext.commit('setUser', response.data.user);
                    vuexContext.commit("setFavItem", response.data.favItem.items)
                    vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
                    vuexContext.commit("setCart", response.data.cart.items)
                    vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                    vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                    vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                    vuexContext.commit("setPackaging", response.data.cart.packaging)
                })
        }
    },
    logOut(vuexContext, product) {
        this.$axios.post('/logOut')
            .then(response => {
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.commit("setFavTotalPrice", response.data.favItem.favTotalPrice)
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setCargoPrice", response.data.cart.cargoPrice)
                vuexContext.commit("setProductPrice", response.data.cart.productTotal)
                vuexContext.commit("setPackaging", response.data.cart.packaging)
            })
    },
    initAuth(vuexContext, req) {
        let token;
        let expiresIn;
        if (req) {
            // server ??zerinde
            if (!req.headers.cookie) {
                return;
            }
            // Cookie ??zerinden token elde etmek
            token = req.headers.cookie.split(';').find(c => c.trim().startsWith('authKey='))
            if (token) {
                token = token.split('=')[1]
            }

            expiresIn = req.headers.cookie.split(';').find(e => e.trim().startsWith('expiresIn='))

            if (expiresIn) {
                expiresIn = expiresIn.split('=')[1]
            }

        } else {
            // client ??zerinde ??al??????yor
            token = localStorage.getItem('authKey')
            expiresIn = localStorage.getItem('expiresIn')
        }
        if (new Date().getTime() > +expiresIn || !token) {
            vuexContext.commit("clearAuthKey")
        }
        vuexContext.commit("setAuthKey", token)
    },
    updateUser(vuexContext, userUpdate) {
        vuexContext.commit('setLoading', true)
        this.$axios.post('/update-user', { user: userUpdate })
            .then(response => {
                vuexContext.commit('setUser', response.data.user)
                setTimeout(() => {
                    vuexContext.commit('setLoading', false)
                }, 2000);
            })
    },
    async deleteUser(vuexContext, data) {
        const auth = getAuth();
        const user = auth.currentUser;
        const email = data.email
        if (user) {
            deleteUser(user).then(() => {
                console.log('delete');
            }).catch((error) => {
                console.log(error);
            });
        } else {
            deleteUser(user).then(() => {
                console.log('delete');
            }).catch((error) => {
                console.log(error);
            });
        }
        this.$axios.post('/del-user', { id: data.id })
            .then(response => {
                return response.data.delete
            })
    },
};

export const getters = {
    // Get emptyfavPopup
    getEmptyFavPopup(state) {
        return state.emptyFav
    },
    // Get favPopup
    getFavPopup(state) {
        return state.favPopup
    },
    // Get Popup
    getPopup(state) {
        return state.popup
    },
    // Get Lang
    getLang(state) {
        return state.lang
    },
    // Get iframetoken
    getIframeToken(state) {
        return state.iframetoken
    },
    // Get FavItem
    getFavorites(state) {
        return state.favItem
    },
    getFavTotalPrice(state) {
        return state.favTotalPrice
    },
    // Get About 
    getAbout(state) {
        return state.about
    },
    // Get Social 
    getSocial(state) {
        return state.social
    },
    // Get Silder 
    getSlider(state) {
        return state.sliders
    },
    // Get User
    getUser(state) {
        return state.user
    },
    // Get Products
    getProducts(state) {
        return state.products
    },
    getBigProduct(state) {
        return state.bigProduct
    },
    getCart(state) {
        return state.cart
    },
    getTotalPrice(state) {
        return state.totalPrice
    },
    getProductTotal(state) {
        return state.productTotal
    },
    getPackaging(state) {
        return state.packaging
    },
    getCargoPrice(state) {
        return state.cargoPrice
    },
    getHeader(state) {
        return state.changeHeader
    },
    getDisplayForm(state) {
        return state.displayForm
    },
    // Authenticated
    isAuthenticated(state) {
        return state.authKey != null
    },
    getAuthKey(state) {
        return state.authKey
    },
    getLoading(state) {
        return state.loading
    }
};