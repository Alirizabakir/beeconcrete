<template>
    <div class="paybox lg:pt-8 p-2 bg-white lg:bg-opacity-0 lg:w-1/4 lg:static fixed left-0 bottom-0 w-full">
        <div :class="{'active': isActive}" class="order p-4  absolute lg:static lg:bg-opacity-0 bg-white w-full left-0">
            <h3 class="border-b border-gray-light text-bold text-xl mb-4">Order Summary</h3>
            <div class="flex justify-between">
                <span>Cargo</span>
                <span class="num">0 ₺</span>
            </div>
            <div class="flex justify-between">
                <span>Discount</span>
                <span class="num">0 ₺</span>
            </div>
            <div class="flex justify-between">
                <span>Products Total</span>
                <span class="num">{{ getTotalPrice }} ₺</span>
            </div>
        </div>
        <div
            class="flex lg:flex-col justify-between items-center lg:items-stretch border-t border-gray-light pl-2 py-2">
            <div class="flex justify-between">
                <span @click="isActive = !isActive" class="lg:hidden mr-4">OPEN</span>
                <span class="mr-2">Total</span>
                <span class="num"> {{ getTotalPrice }} ₺</span>
            </div>
            <div class="flex justify-end">
                <button class="p-2 bg-green w-24 text-white mt-4" @click="open">PAY</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        getTotalPrice() {
            return this.$store.getters.getTotalPrice
        }
    },
    methods: {
        open(){
            this.$emit('open', true)
        }
    },
}
</script>

<style lang="scss" scoped>
.paybox {
    .order {
        transition: all .4s;
        bottom: -150%;
    }
    .active {
        bottom: 99%;
    }
}
</style>