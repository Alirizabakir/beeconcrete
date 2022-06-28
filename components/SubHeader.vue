<template>
    <div class="sub w-full h-10">
        <Container class="flex justify-between h-full items-center sm:px-2">
            <div class="flex">
                <a class="text-white flex items-center justify-center" href="tel:+905337274649">
                    <PhoneSvg class="w-3 mr-1" />
                    <span>+90 533 727 46 49</span>
                </a>
                <a class="text-white items-center justify-center ml-2 hidden sm:flex"
                    href="mailto:beeconcrete@info.com.tr">
                    <EmailSvg class="w-4 mr-1" />
                    <span>beeconcrete@info.com.tr</span>
                </a>
            </div>
            <div class="flex">
                <span @click="changeLang('tr')" class="cursor-pointer m-2"><img class="w-7"
                        :src='require("@/static/turkey.png")' alt="TR"></span>
                <span @click="changeLang('en')" class="cursor-pointer m-2 mr-0"><img class="w-7"
                        :src='require("@/static/united-kingdom.png")' alt="ENG"></span>
            </div>
        </Container>
    </div>
</template>
<script>
import PhoneSvg from "@/components/icon/PhoneSvg";
import EmailSvg from "@/components/icon/EmailSvg";
export default {
    components: {
        PhoneSvg,
        EmailSvg
    },
    methods: {
        changeLang(lang) {
            return this.$store.dispatch('langMethods', lang)
        }
    },
}
</script>
<style lang="scss" scoped>
.sub {
    background-color: #253429;
    svg {
        fill: white;
    }
}
</style>