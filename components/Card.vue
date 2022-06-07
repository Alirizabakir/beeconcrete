<template>
    <div class="anime shadow-show flex flex-col rounded-sm sm:p-4 p-1 relative">
        <a class="flex-1 mb-4" :href="'/products/' + product._id">
            <img class="h-full" :src="require(`@/static/small/${product.src}`)">
        </a>

        <div class="info flex lg:flex-row flex-col justify-between mb-4">
            <h3 class="text-left text-md sm:text-lg">
                {{ product.name }} <span class="text-sm" v-show="size && index != 'normal'"
                    v-for="(size, index) in product.sizeType" :key="index">{{ index }}</span>
            </h3>
            <p class="text-left text-lg sm:text-xl">{{ product.newPrice }} TL</p>
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
            <button @click="addToCart(product)"
                class="w-full sm:w-auto px-4 hover:bg-orange py-1 self-end bg-green text-white">{{
                        getLang.button.addToCart
                }}</button>
        </div>
        <!-- <span v-show="type == 'discount'" class="absolute top-0 right-0 bg-orange p-2 text-white text-md">%50</span> -->
    </div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            fav: 0,
        }
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch("addToCart", {
                selectRub: "Smooth",
                selectColor: "Gray",
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
.anime {
    transition: all .3s;

    &:hover {
        transform: scale(1.03);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
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
</style>