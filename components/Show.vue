<template>
    <div class="show pt-20">
        <div>
            <h2 :class="[{ 'text-center': products != 'getFavorites' }, { 'border-b border-gray text-left pb-2': products == 'getFavorites' }]"
                class="sm:text-4xl text-3xl text-gray-dark ">
                <slot></slot>
            </h2>
            <div v-show="type == 'fav' || type == 'discount' || type == 'special'" class="text-right">
                <nuxt-link to="/optional">All See > </nuxt-link>
            </div>
        </div>
        <div>
            <p v-show="getProducts.length < 1" class="text-2xl pt-4">{{ getLang.global.emptyFav }}</p>
            <div :class="[{ 'lg:grid-cols-4': proPage != 'true' }, { 'lg:grid-cols-3 xl:grid-cols-4': proPage == 'true' }]"
                class="grid gap-4 grid-cols-2 mt-8">
                <Card v-for="(i, index) in getProducts" :key="index" :product='i'/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'type', 'hover', 'proPage'],
    
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

</style>