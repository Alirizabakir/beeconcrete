<template>
    <div>
        <div v-for="(item, index) in getCart" :key="index">
            <div class="flex">
                <h2>{{ item.name }}</h2>
                <span>{{item.totalPrice}} TL</span>
            </div>
            <div>
                <img :src="'small/' + item.src.a" alt="">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.getCart)
    },
    computed: {
        getCart() {
            return this.$store.getters.getCart
        }
    }
}
</script>