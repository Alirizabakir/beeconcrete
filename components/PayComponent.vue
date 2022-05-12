<template>
    <div class="two-footer">
        <div class="info-box h-full">
            <ul v-show="!cartConfirm" class="bag-box flex column a-start j-start w-full h-full">
                <li class="empty" v-show="cart == null || cart.length == 0">
                    <h1>Please Add Product ...</h1>
                </li>
                <CartProduct v-for="(product, index) in cart" :key="index" :product="product" />
            </ul>
            <div v-show="!iframetoken && cartConfirm" class="address-info">
                <InputBox @payload="(payload) => (payData.user.name = payload)" :type="'text'" :name="'Full Name'"
                    :placeholder="'Full Name'" :value='payData.user.name' />
                <InputBox @payload="(payload) => (payData.user.email = payload)" :type="'email'" :name="'Email'"
                    :placeholder="'Email'" :value='payData.user.email' />
                <InputBox @payload="(payload) => (payData.user.phonenumber = payload, payEmit)" :type="'text'"
                    :name="'Phone Number'" :placeholder="'Phone Number'" :value='payData.user.phonenumber' />
                <InputBox :type="'address'" :name="'Address'">
                    <template v-slot:inputArea>
                        <textarea name="provience" id="provience" cols="30" rows="10" style="resize: none"
                            v-model="payData.user.address"></textarea>
                    </template>
                </InputBox>
            </div>
            <div v-show="iframetoken" class="pay-card">
                <iframe :src="iframetoken" scrolling="yes" style="width: 100%; height: 100%;"></iframe>
            </div>
        </div>
        <div class="pay-box w-full h-full">
            <div class="up-box flex">
                <button v-show="!cartConfirm" @click="cartConfirm = true" class="button down flex-1"
                    :disabled="cartConfirm">Confirm
                    Cart</button>
                <button v-show="cartConfirm" @click="payGo" class="button down flex-1"
                    :disabled="iframetoken">Pay</button>
            </div>
            <ul :class="{ listActive: listActive }" class="price-box flex column a-start j-start w-full">
                <li class="header j-between flex a-center w-full">
                    <h3>Order Summary</h3>
                </li>
                <li class="j-between flex a-center w-full">
                    <span>Cargo</span>
                    <span class="num">0 ₺</span>
                </li>
                <li class="j-between flex a-center w-full">
                    <span>Discount</span>
                    <span class="num">0 ₺</span>
                </li>
                <li class="j-between flex a-center w-full">
                    <span>Product Total</span>
                    <span class="num">{{ totalPrice }} ₺</span>
                </li>
                <li class="total j-between flex a-center w-full">
                    <span>Total</span>
                    <span class="num"> {{ totalPrice }} ₺</span>
                </li>
            </ul>
            <div class="down-box flex a-center j-center">
                <div @click="listActive = !listActive" class="svg-box">
                    <UpSvg />
                </div>
                <div @click="listActive = !listActive" class="total-down">
                    <div>Total</div>
                    <div class="num">{{ totalPrice }} ₺</div>
                    <div>Total</div>
                </div>
                <button v-show="!cartConfirm" @click="cartConfirm = true" class="button down flex-1"
                    :disabled="cartConfirm">Confirm
                    Cart</button>
                <button v-show="cartConfirm" @click="payGo" class="button down flex-1"
                    :disabled="iframetoken">Pay</button>
            </div>
        </div>
    </div>
</template>

<script>
import UpSvg from "@/components/icon/UpSvg.vue";

export default {
    name: 'PayComponent',
    components: {
        UpSvg,
    },
    data() {
        return {
            cartConfirm: false,
            listActive: false,
            payData: {
                user: {
                    name: '',
                    email: '',
                    phonenumber: '',
                    address: ''
                },
                basket: []
            }
        }
    },
    created() {
        this.cart.map(a => {
            this.payData.basket.push([a.name, a.big.newPrice.toString(), a.count])
        })
        const number = this.user.number.split('9')[1]
        this.payData.user = {
            name: this.user.name + ' ' + this.user.familyName,
            email: this.user.email,
            phonenumber: number,
            address: this.user.address + ' ' + '/' + this.user.provience
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
        }
    },
    methods: {
        payGo() {
            const neww = new Date()
            let merchant_oid = 'BEE' + (neww.getTime() * Math.floor(Math.random() * 10000) + 2).toString();
            this.$store.dispatch("payMethods", { ...this.payData, merchant_oid: merchant_oid, totalPrice: this.totalPrice });
        },
    },
}
</script>

<style lang="scss" scoped>
.two-footer {
    padding: 1rem;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none !important;
    }

    .info-box {
        .pay-card {
            height: 100%;

        }
    }

    .empty {
        width: 100%;

        h1 {
            text-align: center;
            color: grey;
        }
    }

    .bag-box {
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }



    .pay-box {
        ul {
            background-color: rgb(255, 255, 255);
            padding: 1rem;
            border: 1px solid rgb(191, 191, 191);
            border-radius: 5px;
            margin: 1rem 0;

            li {
                padding: 0.25rem 1rem;

                &:nth-child(1) {
                    padding: 0.25rem 0.5rem;
                    margin-bottom: 1rem;
                }

                &:nth-child(5) {
                    .num {
                        font-size: var(--bigSize);
                    }
                }

                .num {
                    font-size: var(--mediumSize);
                    font-weight: bold;
                }
            }

            .total {
                border-top: 1px solid rgb(79, 118, 79);
            }
        }

        .svg-box {
            display: none;
        }

        .total-down {
            display: none;
        }

        .button {
            height: 40px;
            line-height: 40px;
            font-size: var(--mediumSize);
            background-color: rgb(13, 66, 10);
            color: white;
        }
    }
}

@media only screen and (max-width: 1024px) {
    .two-footer {
        display: flex;
        grid-gap: 0;
        flex-direction: column;
        padding: 0;
        padding-top: 0.5rem;

        .bag-box {
            padding: 0.5rem;
        }

        .pay-box {
            height: auto;
            position: fixed;
            bottom: 0;
            z-index: 100;

            ul {
                margin: 0;
                border: none;
                border-radius: 0;
                background-color: rgb(241, 241, 241);
                transform: translateY(100%);
                z-index: -1;
                position: absolute;
                transition: all 0.3s;

                span {
                    font-size: var(--normalSize);
                }

                .header {
                    display: none;
                }

                .total {
                    display: none;
                }
            }

            .listActive {
                transform: translateY(-100%);
            }

            .up-box {
                display: none;
            }

            .down-box {
                padding: 1rem 10px;
                background-color: white;
                border-top: 0.1px solid rgb(94, 94, 94);

                .svg-box {
                    display: inline-block;

                    svg {
                        width: 12px;
                        fill: rgb(31, 84, 11);
                    }
                }

                .total-down {
                    display: inline-block;
                    margin: 0 1rem 0 0.5rem;
                    font-size: var(--normalSize);

                    .num {
                        font-size: var(--mediumSize);
                        font-weight: bold;
                    }
                }

                .down {
                    height: 30px;
                    line-height: 30px;
                    background-color: rgb(31, 84, 11);
                    color: white;
                }
            }
        }
    }

}
</style>