<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-30 top-0 z-50 p-2">
        <div v-show="!iframetoken" class="info-box w-full md:w-2/3 lg:w-1/3 bg-gray-light p-8 rounded-md shadow-show">
            <h1 class="text-2xl">{{ getLang.global.addressInfo }}</h1>
            <div class="flex flex-col mb-2" v-for="(info, index) in payData.user" :key="index">
                <label class="my-2" :for="index">{{ getLang.global[index] }}</label>
                <input class="px-2 p-1 rounded-sm border border-gray" v-if="index != 'address'"
                    v-model="payData.user[index]" type="text" :id="index">
                <textarea class="p-2 rounded-sm border border-gray" v-else v-model="payData.user[index]" :name="index"
                    :id="index" style="resize: none;"></textarea>
            </div>
            <div>
                <p class="text-right text-lg my-4">{{ getLang.global.total }} : <strong>{{ totalPrice }} TL</strong></p>
            </div>
            <div class="flex justify-center">
                <button class="px-4 py-2 m-2 bg-pink rounded-sm text-white" @click="close">{{ getLang.button.cancel }}</button>
                <button class="px-4 py-2 m-2 bg-blue rounded-sm text-white" @click="payGo">{{ getLang.button.pay }}</button>
            </div>
        </div>
        <div v-show="iframetoken" class="w-full md:w-2/3 lg:w-1/3 bg-white h-screen/8">
            <iframe :src="iframetoken" scrolling="yes" style="width: 100%; height: 100%;"></iframe>
            <button class="px-4 py-2 w-full bg-gray text-white" @click="close">{{ getLang.button.cancel }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payData: {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    address: ''
                },
                basket: []
            }
        }
    },
    created() {
        if (this.cart) {
            this.cart.map(a => {
                this.payData.basket.push([a.name, a.newPrice.toString(), a.count])
            })
        }
        if (this.user) {
            const number = '0' + this.user.phone
            this.payData.user = {
                name: this.user.name + ' ' + this.user.surname,
                email: this.user.email,
                phone: number,
                address: this.user.address + ' ' + this.user.ctiy + '/' + this.user.country
            }
        }
    },
    computed: {
        iframetoken() {
            if (this.$store.getters.getIframeToken != null) {
                return 'https://www.paytr.com/odeme/guvenli/' + this.$store.getters.getIframeToken
            } else {
                return false
            }
        },
        totalPrice() {
            return this.$store.getters.getTotalPrice
        },
        user() {
            return this.$store.getters.getUser
        },
        cart() {
            return this.$store.getters.getCart
        },
        getLang() {
            return this.$store.getters.getLang
        },
    },
    methods: {
        cartConfirmMethods() {
            if (this.cart) {
                if (this.cart.length > 0) {
                    this.cartConfirm = true
                } else {
                    this.emptyBagActive = true
                    setTimeout(() => {
                        this.emptyBagActive = false
                    }, 2000);
                }
            } else {
                this.emptyBagActive = true
                setTimeout(() => {
                    this.emptyBagActive = false
                }, 2000);
            }
        },
        payGo() {

            if (this.payData.user.name != '' && this.payData.user.email != '' && this.payData.user.phone != '' && this.payData.user.address != '') {
                const neww = new Date()
                let merchant_oid = 'BEE' + (neww.getTime() * Math.floor(Math.random() * 10000) + 2).toString();
                this.$store.dispatch("payMethods", { ...this.payData, merchant_oid: merchant_oid, totalPrice: this.totalPrice });
            } else {
                this.emptyInfoActive = true
                setTimeout(() => {
                    this.emptyInfoActive = false

                }, 2000);
            }
        },
        close() {
            this.$store.commit('setIframeToken', null)
            this.$emit('close', false)
        }
    },
}
</script>