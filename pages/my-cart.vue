<template>
    <div>
        <Slider :products='slider' />
        <Container>
            <h1 id="pots" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">MY CART</h1>
            <MyCartBox></MyCartBox>
        </Container>
    </div>
</template>

<script>
export default {
    computed: {
        slider() {
            return this.$store.getters.getSlider;
        },
    }
}
</script>