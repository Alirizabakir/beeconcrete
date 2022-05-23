<template>
    <div :class="{ 'bg': scroll }" class="fixed z-50 top-0 h-20 header w-full">
        <Container class="flex items-center justify-between h-20">
            <nuxt-link to="/">
                <img class="w-14 shadow-show rounded-full" src="icon.png" alt="Bee Concrete Desing">
            </nuxt-link>
            <div :class="{ hamburger: hamburger }"
                class="header-main lg:w-auto lg:static lg:flex-row lg:h-auto flex flex-col items-center bg-white lg:bg-opacity-0 h-screen w-screen z-10 absolute top-20">
                <span class="ham w-screen lg:hidden flex items-center justify-end">
                    <span @click="hamburger = true" class="bur text-white open w-18 text-right p-2 bg-blue">MENU</span>
                    <span @click="hamburger = false"
                        class="bur text-white close w-18 text-left p-2 bg-pink">CLOSE</span>
                </span>
                <div @click="hamburger = false" class="header-main-item">
                    <nuxt-link :class="{ 'border-white border-b': $route.name == 'index' }"
                        to="/">
                        ANA SAYFA
                    </nuxt-link>
                </div>
                <div @click="hamburger = false" class="header-main-item">
                    <nuxt-link :class="{ 'border-white border-b': $route.name == 'products' }"
                        to="/products">
                        ÜRÜNLER
                    </nuxt-link>
                </div>
                <div @click="hamburger = false" class="header-main-item">
                    <nuxt-link :class="{ 'border-white border-b': $route.name == 'social' }"
                        to="/social">
                        SOSYAL
                    </nuxt-link>
                </div>
                <div @click="hamburger = false" class="header-main-item">
                    <nuxt-link :class="{ 'border-white border-b': $route.name == 'about-us' }"
                        to="/about-us">
                        HAKKIMIZDA
                    </nuxt-link>
                </div>
                <div @click="hamburger = false" class="header-main-item">
                    <nuxt-link :class="{ 'border-white border-b': $route.name == 'contact' }"
                        to="/contact">
                        İLETİŞİM
                    </nuxt-link>
                </div>

            </div>
            <div class="flex items-center">
                <nuxt-link class="header-svg" to="/my-favorites">
                    <FavoritesSvg class="w-6 h-6 mr-4" />
                </nuxt-link>
                <nuxt-link class="header-svg ml-3" to="/my-cart">
                    <CartSvg class="w-6 h-6 mr-4" />
                </nuxt-link>
                <nuxt-link class="header-svg ml-3" to="/my-profile">
                    <UserSvg class="w-6 h-6 mr-4" />
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
            scroll: false
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 75) {
                this.scroll = true
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
.header {
    svg {
        fill: white;
    }

    .header-main {
        left: -100%;
        transition: all .3s;

        .ham {
            position: relative;

            .bur {
                position: absolute;
                top: 0;
            }

            .open {
                left: 100%;
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
    }
}
</style>