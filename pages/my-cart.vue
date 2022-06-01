<template>
    <div>
        <Container>
            <h1 id="pots" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">{{getLang.pageTitle.myCart}}</h1>
            <div class="w-full flex">
                <MyCartBox class="flex-1 lg:w-3/4 lg:pr-8 pt-8"></MyCartBox>
                <PayTR v-show="payActive" @close='a => payActive = a' />
                <PayBox @open="a => payActive = a" />
            </div>
        </Container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payActive: false
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>