<template>
    <div>
        <Slider :products='slider' />
        <Container>
            <MyFavBox />
        </Container>
    </div>
</template>

<script>
export default {
    computed: {
        slider() {
            return this.$store.getters.getSlider;
        },
        getFavorites() {
            return this.$store.getters.getFavorites;
        }
    },
}
</script>