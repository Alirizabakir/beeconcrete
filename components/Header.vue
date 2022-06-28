<template>
    <div :class="[{ 'bg h-16': scroll }, { 'h-20': !scroll }]" class="fixed z-20 top-10  header w-full">
        <Container :class="[{ 'h-16': scroll }, { 'h-20': !scroll }]" class="flex items-center justify-between">
            <nuxt-link to="/">
                <img :class="[{ 'w-16 opacity-100': scroll }, { 'w-16 opacity-0': !scroll }]"
                    :src="require('@/static/icon.png')" alt="Bee Concrete Desing">
            </nuxt-link>
            <div
                class="header-main lg:w-auto w-screen lg:h-auto flex flex-row items-center justify-around bg-white lg:bg-opacity-0 z-20 lg:static fixed left-0 bottom-0 lg:shadow-show-none shadow-show-top">
                <div @click="hamburger = false" class="header-main-item" v-for="(item, index) in getLang.headerList"
                    :key="index">
                    <nuxt-link :to="'/' + item.link" class="link border-b-2">
                        <div>
                            <HomeSvg class="lg:hidden inline-block" v-if="item.link == ''" />
                            <ProductHuntBrandsSvg class="lg:hidden inline-block" v-else-if="item.link == 'products'" />
                            <ContactSvg class="lg:hidden inline-block" v-else-if="item.link == 'contact'" />
                            <SocialSvg class="lg:hidden inline-block" v-else-if="item.link == 'social'" />
                            <InfoSolidSvg class="lg:hidden inline-block" v-else-if="item.link == 'about-us'" />
                        </div>
                        <div class="lg:inline-block hidden">{{ item.title }}</div>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex items-center">
                <nuxt-link class="header-svg" to="/my-favorites">
                    <div class="relative">
                        <FavoritesSvg class="w-6 h-6 mr-4 filter drop-shadow-xl" />
                        <span v-show="getFav.length > 0" class="absolute top-0 right-0">{{ getFav.length }}</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="header-svg ml-3" to="/my-cart">
                    <div class="relative">
                        <CartSvg class="w-6 h-6 mr-4 filter drop-shadow-xl" />
                        <span v-show="getCart.length > 0" class="absolute top-0 right-0">{{ getCart.length }}</span>
                    </div>
                </nuxt-link>
                <a href="/my-profile" class="user-box header-svg ml-3 filter drop-shadow-xl">
                    <div @click="user = !user" class="header-svg">
                        <UserSvg class="w-6 h-6 mr-4" />
                    </div>
                </a>
            </div>
        </Container>
    </div>
</template>

<script>
import FavoritesSvg from "@/components/icon/HeartSolidSvg";
import UserSvg from "@/components/icon/UserSvg";
import CartSvg from "@/components/icon/CartSvg";
import ProductHuntBrandsSvg from "@/components/icon/ProductHuntBrandsSvg";
import HomeSvg from "@/components/icon/HomeSvg";
import ContactSvg from "@/components/icon/ContactSvg";
import SocialSvg from "@/components/icon/SocialSvg";
import InfoSolidSvg from "@/components/icon/InfoCircleSvg";

export default {
    components: {
        FavoritesSvg,
        UserSvg,
        CartSvg,
        ProductHuntBrandsSvg,
        HomeSvg,
        ContactSvg,
        SocialSvg,
        InfoSolidSvg,
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
    mounted() {
        this.handleScroll()
    },
}
</script>

<style lang="scss" scoped>
.header {
    svg {
        fill: white;
    }

    .header-main {
        .link {
            border-color: transparent;

            &:hover {
                border-color: white;
            }

            svg {
                width: 25px;
                height: 25px;
            }
        }
    }



}

.bg {
    // background-image: url(~/static/bg/hex.jpg) !important;
    // background-position-x: left;
    // background-position-y: center;
    // background-repeat: no-repeat;
    // background-color: #F7F7F7 !important;
    background: #253429;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    top: 0;

    svg {
        fill: white;
    }

    .header-svg {
        color: white;
        .user {
            color: white;
        }
    }
}
</style>