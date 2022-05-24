<template>
    <div class="pt-8">
        <h3 class="border-b border-gray-light text-bold text-xl">Order Summary</h3>
        <div class="pl-2 py-4">
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
        <div class="flex justify-between border-t border-gray-light pl-2 py-2">
            <span>Total</span>
            <span class="num"> {{ getTotalPrice }} ₺</span>
        </div>
        <div class="flex justify-end">
            <button class="p-2 bg-green w-24 text-white mt-4">PAY</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {

        getTotalPrice() {
            return this.$store.getters.getTotalPrice
        }
    }
}
</script>