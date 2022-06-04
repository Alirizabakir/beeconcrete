<template>
    <Container class="cont">
        <div>
            <div v-for="(lang, index) in  getLang.collectionList" :key="index">
                <Show v-for="(subList, index) in  lang.subList" :key="index" :proPage='"true"' :id="subList.link"
                    :products="subList.link">
                    {{ subList.title }}
                </Show>
            </div>
            <a v-show="scroll" href="#bee" class="up fixed bottom-10 right-10 bg-blue rounded-sm">
                <Up class="w-10 h-10" />
            </a>
        </div>
        <ProductsList />
        <Popup />
    </Container>
</template>

<script>
import Up from '@/components/icon/UpSvg.vue'
export default {
    components: {
        Up
    },
    data() {
        return {
            scroll: false
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 700) {
                this.scroll = "true"
            } else {
                this.scroll = false
            }
        }
    },
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

}
</script>

<style lang="scss" scoped>
.cont {
    display: block;
}
@media screen and (min-width: 1024px) {
    .cont {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 0px;
    }
}
</style>

