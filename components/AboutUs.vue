<template>
    <div class="about-us">
        <h2 class="text-3xl text-gray-dark border-b border-gray-dark pt-20 mb-20">
            {{ getLang.aboutUs.header }}
        </h2>
        <div class="flex">
            <div>
                <p class="p-10 text-lg text-green">
                    {{ getLang.aboutUs.titleOne }}
                    <br> <br>
                    {{ getLang.aboutUs.titleTwo }}.
                </p>
            </div>
            <img class="w-1/3 md:block hidden" src="../static/instagram/17.jpg" alt="">
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

