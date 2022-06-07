<template>
    <div class="paybox lg:pt-8 p-2 bg-white lg:bg-opacity-0 lg:w-1/4 lg:static fixed left-0 bottom-0 w-full">
        <div :class="{ 'active': isActive }"
            class="order p-4  absolute lg:static lg:bg-opacity-0 bg-white w-full left-0">
            <h3 class="border-b border-gray-light text-bold text-xl mb-4">{{ getLang.global.order }}</h3>
            <div class="flex justify-between">
                <span>{{ getLang.global.cargo }}</span>
                <span class="num">{{ Math.floor(getCargoPrice) }} ₺</span>
            </div>
            <div class="flex justify-between">
                <span>{{ getLang.global.discount }}</span>
                <span class="num">0 ₺</span>
            </div>
            <div class="flex justify-between">
                <span>{{ getLang.global.packaging }}</span>
                <span class="num">{{ Math.floor(getPackaging) }} ₺</span>
            </div>
            <div class="flex justify-between">
                <span>{{ getLang.global.productsTotal }}</span>
                <span class="num">{{ Math.floor(getProductTotal) }} ₺</span>
            </div>
        </div>
        <div
            class="flex lg:flex-col justify-between items-center lg:items-stretch border-t border-gray-light pl-2 py-2">
            <div class="flex justify-between">
                <span @click="isActive = !isActive" class="lg:hidden mr-4">
                    <UpSvg class="w-4" />
                </span>
                <span class="mr-2">{{ getLang.global.total }}</span>
                <span class="num"> {{ Math.floor(getTotalPrice) }} ₺</span>
            </div>
            <div class="flex justify-end">
                <button class="p-2 bg-green min-w-24 text-white mt-4 shadow-show" @click="open">{{ getLang.button.pay
                }}</button>
            </div>
        </div>

    </div>
</template>

<script>
import UpSvg from '@/components/icon/UpSvg.vue'
export default {
    components: {
        UpSvg
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        getTotalPrice() {
            return this.$store.getters.getTotalPrice
        },
        getProductTotal() {
            return this.$store.getters.getProductTotal
        },
        getPackaging() {
            return this.$store.getters.getPackaging
        },
        getCargoPrice() {
            return this.$store.getters.getCargoPrice
        },
        getLang() {
            return this.$store.getters.getLang
        },
    },
    methods: {
        open() {
            this.$emit('open', true)
        }
    },
}
</script>

<style lang="scss" scoped>
.paybox {
    .order {
        transition: all .4s;
        bottom: -200%;
    }

    .active {
        bottom: 99%;
    }
}
</style>