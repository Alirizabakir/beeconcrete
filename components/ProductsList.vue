<template>
    <div :class="[{ '-right-2/3': !hamburger }, { 'right-0': hamburger }, { 'lg:top-16 top-20 active-h': scroll }, { 'top-30 disable-h': !scroll }]"
        class="list-box w-2/3 lg:w-full bg-gray-dark lg:sticky fixed z-10">
        <div class="ham cursor-pointer relative lg:hidden" href="#">
            <div @click="hamburger = !hamburger" class="bur -left-11 absolute z-20"><img
                    class="w-8 rounded-md p-1" src="hamburgerwhite.png" alt=""></div>
        </div>
        <div class="list overflow-y-scroll lg:overflow-visible">
            <div v-for="(item, index) in getLang.collectionList" :key="index">
                <div class="main-list cursor-pointer" href="#">{{ item.title }}</div>
                <div class="flex flex-col">
                    <a v-for="(subItem, indexSub) in item.subList" :key="indexSub" @click="hamburger = false"
                        class="sub-list" :href="'#' + subItem.link">{{ subItem.title }}</a>
                </div>
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
.list-box {
    .ham {
        .bur {
        background-color: #253429;
    }
    }
    .list {
        background-color: #253429;
    }
}

.active-h {
    height: calc(100vh - 4rem);
}

.disable-h {
    height: calc(100vh - 7rem);
}
</style>