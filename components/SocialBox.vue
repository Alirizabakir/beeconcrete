<template>
    <div class="pt-20">
        <h2 class="text-3xl text-gray-dark border-b border-gray-dark mb-20">
            <slot></slot>
        </h2>
        <div class="social">
            <div class="anime shadow-show mb-10 flex flex-col rounded-sm p-2 relative" v-for="(i, index) in getSocial"
                :key="index">
                <img class="mb-4" :src="require(`@/static/instagram/${i.src.a}`)">
                <p class="flex flex-wrap"><strong class="mr-2">beeconcretedesing</strong>{{ i.name }}</p>
                <span class="absolute top-0 right-0">
                    <a :href="i.link" target="_blank">
                        <img class="w-14 p-3" :src="require(`@/static/instagram.png`)" alt="">
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        getSocial() {
            return this.$store.getters.getSocial
        }
    }
}
</script>

<style lang="scss" scoped>
.social {
    columns: 1;
    column-gap: 20px;

    .anime {
        break-inside: avoid;
    }
}

@media screen and (min-width: 768px) {
    .social {
        columns: 2;
        column-gap: 20px;

        .anime {
            break-inside: avoid;
        }
    }
}

@media screen and (min-width: 1024px) {
    .social {
        columns: 3;
        column-gap: 20px;

        .anime {
            break-inside: avoid;
        }
    }
}
</style>