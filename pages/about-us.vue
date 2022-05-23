<template>
    <div>
        <Slider :products='slider' />
        <Container>
            <AboutUs></AboutUs>
        </Container>
        <div class="hexagon-box mt-20 py-20">
            <Container class="flex flex-wrap w-full items-center justify-center xl:justify-between ">
                <HexagonBox>
                    <template v-slot:header>
                        Birinci Başlık
                    </template>
                    <template v-slot:content>
                        Birinci Açıklama
                    </template>
                </HexagonBox>
                <HexagonBox>
                    <template v-slot:header>
                        İkinci Başlık
                    </template>
                    <template v-slot:content>
                        İkinci Açıklama
                    </template>
                </HexagonBox>
                <HexagonBox>
                    <template v-slot:header>
                        Üçüncü Başlık
                    </template>
                    <template v-slot:content>
                        Üçüncü Açıklama
                    </template>
                </HexagonBox>
            </Container>
        </div>
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

<style lang="scss" scoped>
.hexagon-box {
    background-image: url(~/static/bg/geometric.jpg);
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>