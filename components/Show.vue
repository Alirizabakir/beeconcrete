<template>
    <div class="show pt-10">
        <div>
            <slot></slot>
        </div>
        <p v-show="products.length < 1" class="text-2xl pt-4">{{ getLang.global.emptyFav }}</p>
        <div class="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full pt-5">
            <Card v-for="(i, index) in products" :key="index" :product='i' />
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'type', 'hover', 'proPage'],
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>

<style lang="scss" scoped>
.show {
    transition: all 2s;
}
</style>