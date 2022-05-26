<template>
    <div>
        <Slider :products='slider' />
        <nuxt-child />
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