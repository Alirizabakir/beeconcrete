<template>
    <div class="w-full bg-gray-dark h-8">
        <Container class="flex justify-between h-full items-center sm:px-2">
            <div class="flex">
                <nuxt-link class="text-white flex" to="#">
                    <PhoneSvg class="w-3 mr-1" />
                    <span>+90 500 00 00</span>
                </nuxt-link>
                <nuxt-link class="text-white flex ml-2" to="#">
                    <PhoneSvg class="w-3 mr-1" />
                    <span>beeconcrete@info</span>
                </nuxt-link>
            </div>
            <div class="flex">
                <span @click="changeLang('tr')" class="cursor-pointer"><img class="w-7" src="turkey.png" alt="TR"></span>
                <span @click="changeLang('en')" class="cursor-pointer ml-2"><img class="w-7" src="united-kingdom.png" alt="ENG"></span>
            </div>
        </Container>
    </div>
</template>
<script>
import PhoneSvg from "@/components/icon/PhoneSvg";
export default {
    components: {
        PhoneSvg
    },
    methods: {
        changeLang(lang){
            return this.$store.dispatch('langMethods', lang)
        }
    },
}
</script>
<style lang="scss" scoped>
div {
    svg {
        fill: white;
    }
}
</style>