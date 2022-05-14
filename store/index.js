import Cookie from 'js-cookie'
import { getAuth, deleteUser, signOut } from "firebase/auth";
import axios from "axios";
export const state = () => ({
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
    changeHeader: 'All Products',
    authKey: null,
    user: null,
    admin: false,
    displayForm: false,
});

export const mutations = {

    // Set iframetoken
    setIframeToken(state, token) {
        state.iframetoken = token
    },
    // Set FavItem
    setFavItem(state, favItem) {
        state.favItem = favItem
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
    setTotalPrice(state, totalPrice) {
        state.totalPrice = totalPrice
    },
    setBigProduct(state, id) {
        state.bigProduct = state.products.find(a => a._id == id)
    },
    // Set Silder
    setSlider(state, sliders) {
        state.sliders = sliders
    },
    // Filter ShowProduct
    filterProducts(state, filterValue) {
        state.changeHeader = filterValue
        if (filterValue == 'All Products') {
            state.showProducts = state.products
        } else if (filterValue != 'Pot' && filterValue != 'Furniture') {
            state.showProducts = state.products.filter(a => a.collectionName == filterValue.toLowerCase())
        } else if (filterValue == 'Pot' || filterValue == 'Furniture') {
            if (filterValue == 'Pot') {
                state.showProducts = state.products.filter(a => a.collectionName == 'bee')
            } else {
                state.showProducts = state.products.filter(a => a.collectionName == 'table')
            }
        }
    },
    removeProduct(state, id) {
        let index = state.products.findIndex(a => a._id == id)
        state.products.splice(index, 1)
    },
    // New and Update Form
    displayForm(state, value) {
        state.displayForm = value
    },
    // Cookie 
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        if (!authUser) {
            state.user = false
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
    authUser(state, authUser) {

    },
};

export const actions = {

    // Pay
    payMethods(vuexContext, payData) {
        this.$axios.post('/pay-go', { payData: payData })
            .then(response => {
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
                vuexContext.commit("setTotalPrice", response.data.cart.bagTotalPrice)
                vuexContext.commit("setFavItem", response.data.favItem.items)
                vuexContext.state.showProducts = response.data.products
                if (response.data.user != null) {
                    vuexContext.commit("setUser", response.data.user);
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
        this.$axios.post('/add-to-cart', { product: product })
            .then(response => {
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit('setTotalPrice', response.data.cart.bagTotalPrice)
            })
    },
    removeCart(vuexContext, product) {
        this.$axios.post('/remove-cart', { product: product })
            .then(response => {
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit('setTotalPrice', response.data.cart.bagTotalPrice)
            })
    },
    changeCount(vuexContext, product) {
        this.$axios.post('/change-count', { product: product })
            .then(response => {
                vuexContext.commit('setCart', response.data.cart.items)
                vuexContext.commit('setTotalPrice', response.data.cart.bagTotalPrice)
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
    favItem(vuexContext, product) {
        this.$axios.post('/favItem', { product: product })
            .then(response => {
                vuexContext.commit("setFavItem", response.data.favItem.items)
            })
    },
    // User Methods
    onAuthStateChangedAction: (vuexContext, { authUser, claims }) => {
        if (!authUser) {
            state.user = false
        } else {
            // Do something with the authUser and the claims object...
            axios.post('http://localhost:3000/api/login', { user: claims })
                .then(response => {
                    vuexContext.commit('setUser', response.data.user);
                })
        }
    },
    login(vuexContext, email) {
        this.$axios.post('/login', { email: email })
            .then(response => {
                vuexContext.commit('setUser', response.data.user);
            })
    },
    initAuth(vuexContext, req) {
        let token;
        let expiresIn;
        if (req) {
            // server üzerinde
            if (!req.headers.cookie) {
                return;
            }
            // Cookie üzerinden token elde etmek
            token = req.headers.cookie.split(';').find(c => c.trim().startsWith('authKey='))
            if (token) {
                token = token.split('=')[1]
            }

            expiresIn = req.headers.cookie.split(';').find(e => e.trim().startsWith('expiresIn='))

            if (expiresIn) {
                expiresIn = expiresIn.split('=')[1]
            }

        } else {
            // client üzerinde çalışıyor
            token = localStorage.getItem('authKey')
            expiresIn = localStorage.getItem('expiresIn')
        }
        if (new Date().getTime() > +expiresIn || !token) {
            vuexContext.commit("clearAuthKey")
        }
        vuexContext.commit("setAuthKey", token)
    },
    updateUser(vuexContext, userUpdate) {
        this.$axios.post('/update-user', { user: userUpdate })
            .then(response => {
                vuexContext.commit('setUser', response.data.user)
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
    // Get iframetoken
    getIframeToken(state) {
        return state.iframetoken
    },
    // Get FavItem
    getFavItem(state) {
        return state.favItem
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
    }
};