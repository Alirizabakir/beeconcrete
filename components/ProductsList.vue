<template>
    <div :class="[{ hamburger: hamburger }, { top: scroll }, { 'top-28': !scroll }]"
        class="w-56 h-full bg-gray lg:mt-20 lg:ml-4 menu">
        <div class="ham cursor-pointer relative lg:hidden" href="#">
            <div @click="hamburger = !hamburger" class="bur absolute -left-10"><img class="w-8 rounded-md p-1 bg-blue"
                    src="hamburgerwhite.png" alt=""></div>
        </div>
        <div v-for="(item, index) in getLang.collectionList" :key="index" class="main list-box">
            <span class="cursor-pointer main-list" href="#">{{ item.title }}</span>
            <div class="sub flex flex-col">
                <a v-for="(subItem, indexSub) in item.subList" :key="indexSub" @click="hamburger = false"
                    class="sub-list" :href="'#' + subItem.link">{{ subItem.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hamburger: false,
            isActive: '',
            scroll: false,
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 75) {
                this.scroll = true
            } else {
                this.scroll = false
            }
        },
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
    },
}
</script>
<style lang="scss" scoped>
.menu {
    position: fixed;
    z-index: 10;
    left: 100%;
}

.top {
    top: 6rem;
}

.hamburger {
    left: 50%;
}

@media screen and (min-width: 1024px) {
    .menu {
        position: sticky;
        top: 80px;
    }
}
</style>