<template>
    <div class="card">
        <div class="anime shadow-show flex flex-col rounded-sm sm:p-4 p-1 relative">
            <a class="flex-1 mb-4" :href="'/products/' + product._id">
                <img class="h-full" :src="require(`@/static/small/${product.src}`)">
            </a>

            <div class="info mb-4">
                <p class="header text-left text-md sm:text-lg">
                    {{ product.name }} <span class="text-sm" v-show="size && index != 'normal'"
                        v-for="(size, index) in product.sizeType" :key="index">{{ index }}</span>
                </p>
                <p v-show="!secret" class="text-right text-lg sm:text-xl">{{ product.newPrice }} TL</p>
            </div>
            <div class="flex lg:flex-row flex-col justify-between">
                <div class="icon flex absolute top-2 left-2 lg:static">
                    <div class="cont w-6 h-6">
                        <img @click="liked" v-if="!getFav" class="w-6 h-6" :src="require('@/static/heart.png')" alt="">
                        <img @click="unliked" v-else :class="{ heartActive: getFav }" class="w-6 h-6"
                            :src="require('@/static/heart-full.png')" alt="">
                    </div>
                    <div class="numb pl-2">{{ fav }}</div>
                </div>
                <button v-show="!secret" @click="select = !select"
                    class="w-full sm:w-auto px-4 hover:bg-orange py-1 self-end bg-green text-white">{{
                            getLang.button.addToCart
                    }}</button>
            </div>
        </div>
        <div v-show="select" class="popup bg-white shadow-show p-4">
            <div>
                <img @click="select = false" :src="require('@/static/close.png')"
                    class="w-6 cursor-pointer hover:opacity-80 ml-auto opacity-40" alt="">
            </div>
            <div>
                <div class="text-lg">Rub select..</div>
                <ul class="flex mb-4">
                    <li :class="{ 'bg-blue text-white': selectRub == index }" @click="selectRub = index"
                        class="lg:w-24 cursor-pointer hover:bg-gray-light px-2 lg:px-0 py-1 m-1 text-center rounded-sm border border-blue"
                        v-for="(rub, index) in product.rub" :key="index">
                        {{ index.toUpperCase() }}
                    </li>
                </ul>
                <div class="text-lg">Color select..</div>
                <ul class="flex mb-4">
                    <li :class="{ 'bg-blue text-white': selectColor == index }" @click="selectColor = index"
                        class="lg:w-24 cursor-pointer hover:bg-gray-light px-2 py-1 m-1 text-center rounded-sm border border-blue"
                        v-for="(rub, index) in product.color" :key="index">
                        {{ index.toUpperCase() }}
                    </li>
                </ul>

                <div class="flex items-center justify-center">
                    <button @click="addToCart(product), select = false"
                        class="w-20 py-1 m-1 text-center rounded-sm border bg-gray-light hover:bg-blue hover:text-white border-blue">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product', 'secret'],
    data() {
        return {
            fav: 0,
            select: false,
            selectRub: '',
            selectColor: '',
        }
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch("addToCart", {
                selectRub: this.selectRub,
                selectColor: this.selectColor,
                count: 1,
                ...product,
            });
        },
        liked() {
            this.$store.dispatch("liked", {
                ...this.product,
                fav: this.product.fav + 1,
                count: 1
            });
            this.active = true
            this.fav += 1
        },
        unliked() {
            this.$store.dispatch("unliked", {
                ...this.product,
                fav: this.product.fav - 1
            });
            this.fav -= 1

        },
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
        getFav() {
            return this.$store.getters.getFavorites.some(a => a._id == this.product._id)
        }
    },
    created() {
        this.fav = this.product.fav
    },
}
</script>

<style lang="scss" scoped>
.card {
    .anime {
        transition: all .3s ease-in-out;

        &:hover {
            transform: scale(1.03);
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
        }

        .info {
            .header {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .cont {
            cursor: pointer;
        }

        .heartActive {
            animation: animate 0.5s steps(28) 1;
        }

        @keyframes animate {
            0% {
                transform: scale(1.5);
            }

            100% {
                transform: scale(1);
            }
        }


    }

    .popup {
        position: fixed;
        z-index: 50;
        top: 0;
        left: 0;
        transform: translate(calc(50vw - 50%), calc(50vh - 50%));
    }
}
</style>