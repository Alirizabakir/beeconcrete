<template>
    <div class="show pt-20">
        <h2 class="text-4xl text-gray-dark text-center">
            <slot></slot>
        </h2>
        <div class="grid gap-4 xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 mt-12">
            <div class="anime shadow-show mb-4 flex flex-col rounded-sm sm:p-4 p-1 relative"
                v-for="(i, index) in products" :key="index">
                <img class="mb-4" :src="'../../small/' + i.src.a">
                <div class="info flex sm:flex-row flex-col justify-between mb-4">
                    <h3 class="text-left text-md sm:text-lg">
                        {{ i.name }}
                    </h3>
                    <p class="text-left text-lg sm:text-2xl">{{ i.big.newPrice }} TL</p>
                </div>
                <button @click="addToCart(i)" class="w-full sm:w-auto px-4 hover:bg-orange py-1 self-end bg-green text-white">Add To
                    Cart</button>
                <span v-show="discount" class="absolute top-0 right-0 bg-orange p-2 text-white text-md">%50</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'discount', 'hover'],
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