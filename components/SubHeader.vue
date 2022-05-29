<template>
    <div class="w-full bg-gray-dark h-8">
        <Container class="flex justify-between h-full items-center sm:px-2">
            <div class="flex">
                <a class="text-white flex" href="tel:+905337274649">
                    <PhoneSvg class="w-3 mr-1" />
                    <span>+90 533 727 46 49</span>
                </a>
                <a class="text-white ml-2 hidden sm:flex" href="mailto:beeconcrete@info.com.tr">
                    <PhoneSvg class="w-3 mr-1" />
                    <span >beeconcrete@info.com.tr</span>
                </a>
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