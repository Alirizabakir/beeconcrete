<template>
    <!-- Slider main container -->
    <div class="swiper w-full">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper w-full">
            <!-- Slides -->
            <div class="swiper-slide" :style="{ backgroundImage: `url(${require(`@/static/small/${item.src}`)})` }"
                v-for="(item, index) in getLang.slider" :key="index">
                <div class="opacity w-full h-full justify-center items-center flex flex-col ">
                    <Container class="pt-20 sm:px-2">
                        <h1 class="text-2xl sm:text-3xl font-bold mb-4 text-white">{{ item.title }}</h1>
                        <p class="lg:w-144 text-sm sm:text-base sm:w-auto mb-4 text-white ">
                            {{ item.text }}
                        </p>
                        <nuxt-link :to="'/products#' + item.link"
                            class="w-32 h-10 block text-center leading-10 bg-green rounded-sm text-white">
                            {{ getLang.button.goCollection }}
                        </nuxt-link>
                    </Container>
                </div>
            </div>

        </div>
        <div class="swiper-pagination flex items-center justify-center"></div>

    </div>
</template>

<script>
export default {
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    },
    mounted() {
        const swiper = new Swiper(".swiper", {
            // Optional parameters
            effect: "slide",
            loop: true,
            speed: 1000,

            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });
    }
}
</script>

<style lang="scss" >
.swiper {
    overflow: hidden;
    height: 50vh;

    .swiper-wrapper {
        .swiper-slide {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            .opacity {
                background-color: rgba(0, 0, 0, 0.6);
            }
        }
    }

    .swiper-pagination {
        position: absolute;
        height: 50px;
        bottom: 0;
        width: 100%;

        .swiper-pagination-bullet {
            margin: 3px;
            background-color: gray;
            border-radius: 0;
            opacity: 1;
            width: 20px;
            height: 5px;
        }

        .swiper-pagination-bullet-active {
            background-color: rgb(240, 240, 240);
        }
    }
}

@media only screen and (max-width: 1024px) {
    .swiper {
        .swiper-wrapper {
            .swiper-slide {}
        }
    }
}
</style>
