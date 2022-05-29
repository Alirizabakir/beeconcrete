<template>
    <div>
        <Slider />
        <Container>
            <AboutUs></AboutUs>
        </Container>
        <div class="hexagon-box mt-20 py-20">
            <Container class="flex flex-wrap w-full items-center justify-center">
                <HexagonBox :src="item.src" v-for="(item, index) in getLang.characteristic" :key="index">
                    <template v-slot:header>
                        {{ item.title }}
                    </template>
                    <template v-slot:content>
                        {{ item.text }}
                    </template>
                </HexagonBox>
            </Container>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>

<style lang="scss" scoped>
.hexagon-box {
    background-image: url(~/static/bg/geometric.jpg);
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>