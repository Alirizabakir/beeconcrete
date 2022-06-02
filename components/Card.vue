<template>
    <div class="anime w-full shadow-show mb-4 flex flex-col rounded-sm sm:p-4 p-1 relative">
        <nuxt-link class="flex-1 mb-4" :to="'/products/' + product._id">
            <img class="h-full" :src="require(`@/static/small/${product.src}`)">
        </nuxt-link>

        <div class="info flex lg:flex-row flex-col justify-between mb-4">
            <h3 class="text-left text-md sm:text-lg">
                {{ product.name }} <span class="text-sm" v-show="size && index != 'normal'"
                    v-for="(size, index) in product.sizeType" :key="index">{{ index }}</span>
            </h3>
            <p class="text-left text-lg sm:text-2xl">{{ product.newPrice }} TL</p>
        </div>
        <div class="flex lg:flex-row flex-col justify-between">
            <div class="flex absolute top-2 left-2 lg:static">
                <FavIcon :product="product" />
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
    methods: {
        addToCart(product) {
            this.$store.dispatch("addToCart", {
                selectRub: "Smooth",
                selectColor: "Gray",
                count: 1,
                ...product,
            });
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>

<style lang="scss" scoped>
.anime {
    transition: all .3s;

    &:hover {
        transform: scale(1.03);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    }
}
</style>