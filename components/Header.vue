<template>
    <div :class="{ 'bg': scroll }" class="fixed z-50 top-8 h-20 header w-full">
        <Container class="flex items-center justify-between h-20">
            <nuxt-link to="/">
                <img class="w-14 shadow-show rounded-full" :src="require('@/static/icon.png')"
                    alt="Bee Concrete Desing">
            </nuxt-link>
            <div :class="[{ hamburger: hamburger }, { 'top-20': !scroll }, { 'top-24': scroll }]"
                class="header-main lg:w-auto lg:static lg:flex-row lg:h-auto flex flex-col items-center bg-white lg:bg-opacity-0 h-screen w-full z-10 absolute">
                <div class="ham w-full lg:hidden flex items-center justify-end">
                    <div @click="hamburger = true" class="bur flex w-8 h-8 absolute open"><img
                            class="rounded-md p-1 bg-blue" src="hamburgerwhite.png" alt=""></div>
                    <div @click="hamburger = false" class="bur text-white close w-18 text-left p-1"><img class="w-8"
                            src="close.png" alt=""></div>
                </div>
                <div @click="hamburger = false" class="header-main-item" v-for="(item, index) in getLang.headerList"
                    :key="index">
                    <nuxt-link :to="'/' + item.link">
                        {{ item.title }}
                    </nuxt-link>
                </div>
            </div>
            <div class="flex items-center">
                <nuxt-link class="header-svg" to="/my-favorites">
                    <div class="relative">
                        <FavoritesSvg class="w-6 h-6 mr-4" />
                        <span v-show="getFav.length > 0" class="absolute top-0 right-0">{{ getFav.length }}</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="header-svg ml-3" to="/my-cart">
                    <div class="relative">
                        <CartSvg class="w-6 h-6 mr-4" />
                        <span v-show="getCart.length > 0" class="absolute top-0 right-0">{{ getCart.length }}</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="user-box header-svg ml-3" to="/my-profile">
                    <div @click="user = !user" class="header-svg">
                        <UserSvg class="w-6 h-6 mr-4" />
                    </div>
                </nuxt-link>
            </div>
        </Container>
    </div>
</template>

<script>
import FavoritesSvg from "@/components/icon/HeartSolidSvg";
import UserSvg from "@/components/icon/UserSvg";
import CartSvg from "@/components/icon/CartSvg";

export default {
    components: {
        FavoritesSvg,
        UserSvg,
        CartSvg,
    },
    data() {
        return {
            hamburger: false,
            scroll: false,
            user: false
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
        getFav() {
            return this.$store.getters.getFavorites
        },
        getCart() {
            return this.$store.getters.getCart
        }
    },
    methods: {
        // allpro(){
        //     this.$store.dispatch('allProductUpload', 'pro')
        // },
      
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
.header {
    svg {
        fill: white;
    }

    .header-main {
        left: -100%;

        .ham {
            position: relative;

            .bur {
                position: absolute;
                top: 0;
            }

            .open {
                left: 103%;
            }

            .close {
                right: 0;
            }

        }
    }

    .hamburger {
        left: 0;
    }

}

.bg {
    background-image: url(~/static/bg/hex.jpg) !important;
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;
    background-color: #F7F7F7 !important;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    top: 0;

    svg {
        fill: var(--first-color)
    }


    .header-main-item {
        color: var(--first-color) !important;
        font-weight: bold;



    }

    .header-svg {
        color: var(--first-color) !important;

        .user {
            color: white;
        }
    }
}
</style>