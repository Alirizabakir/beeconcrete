<template>
    <div class="show pt-20">
        <h2 :class="[{ 'text-center': products != 'getFavorites' }, { 'border-b border-gray text-left pb-2': products == 'getFavorites' }]"
            class="sm:text-4xl text-3xl text-gray-dark ">
            <slot></slot>
        </h2>
        <div>
            <p v-show="getProducts.length < 1" class="text-2xl pt-4">{{ getLang.global.emptyFav }}</p>
            <div :class="[{ 'lg:grid-cols-4': proPage != 'true' }, { 'lg:grid-cols-3 xl:grid-cols-4': proPage == 'true' }]"
                class="grid gap-4 grid-cols-2 mt-12">
                <div class="anime shadow-show mb-4 flex flex-col rounded-sm sm:p-4 p-1 relative"
                    v-for="(i, index) in getProducts" :key="index">
                    <nuxt-link class="flex-1 mb-4" :to="'/products/' + i._id">
                        <img class="h-full" :src="require(`@/static/small/${i.src}`)">
                    </nuxt-link>

                    <div class="info flex md:flex-row flex-col justify-between mb-4">
                        <h3 class="text-left text-md sm:text-lg">
                            {{ i.name }} <span class="text-sm" v-show="size && index != 'normal'"
                                v-for="(size, index) in i.sizeType" :key="index">{{ index }}</span>
                        </h3>
                        <p class="text-left text-lg sm:text-2xl">{{ i.newPrice }} TL</p>
                    </div>
                    <div class="flex lg:flex-row flex-col justify-between">
                        <div class="flex absolute top-2 left-2 lg:static">
                            <FavIcon :product="i" />
                        </div>
                        <button @click="addToCart(i)"
                            class="w-full sm:w-auto px-4 hover:bg-orange py-1 self-end bg-green text-white">{{getLang.button.addToCart}}</button>
                    </div>

                    <span v-show="type == 'discount'"
                        class="absolute top-0 right-0 bg-orange p-2 text-white text-md">%50</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'type', 'hover', 'proPage'],
    methods: {
        addToCart(i) {
            this.$store.dispatch("addToCart", {
                selectRub: "smooth",
                selectColor: "grey",
                count: 1,
                ...i,
            });
        }
    },
    computed: {
        getProducts() {
            if (this.type == 'discount') {
                const clone = [...this.$store.getters.getProducts];
                clone.sort((a, b) => {
                    return a.newPrice - b.newPrice;
                });
                return clone.slice(0, 4);

            } else if (this.type == 'special') {
                const clone = [...this.$store.getters.getProducts];
                clone.sort((a, b) => {
                    return b.newPrice - a.newPrice;
                });
                return clone.slice(0, 4);


            } else if (this.type == 'fav') {
                const clone = [...this.$store.getters.getProducts];
                clone.sort((a, b) => {
                    return b.fav - a.fav;
                });
                return clone.slice(0, 4);

            } else if (this.products == 'getFavorites') {
                return this.$store.getters.getFavorites;
            } else {
                return this.$store.getters.getProducts.filter(a => a.collectionName == this.products)
            }
        },
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>

<style lang="scss" scoped>
.show {
    div {
        .anime {
            transition: all .3s;

            &:hover {
                transform: scale(1.03);
                box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
            }
        }
    }
}
</style>