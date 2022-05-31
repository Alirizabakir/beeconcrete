<template>
    <div :class="[{ hamburger: hamburger },{'top-0': scroll},{'top-8': !scroll}]" class="w-56 h-full bg-gray mt-20 ml-4 menu">
        <div class="ham cursor-pointer lg:hidden" href="#">
            <span v-show="!hamburger" @click="hamburger = true"
                class="bur text-white open w-18 text-left p-2 bg-blue">COLLECTIONS</span>
            <span v-show="hamburger" @click="hamburger = false"
                class="bur text-white close w-18 text-right p-2 bg-pink">CLOSE</span>
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
    transition: all .3s;
    z-index: 10;
    right: -225px;
    .ham {
        position: relative;

        .bur {
            position: absolute;
            top: 0;
        }

        .open {
            right: 100%;
        }

        .close {
            right: 100%;
        }

    }
}

.hamburger {
    right: -15px;
}

@media screen and (min-width: 1024px) {
    .menu {
        position: sticky;
        top: 80px;
    }
}
</style>