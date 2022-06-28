<template>
    <!-- Slider main container -->
    <div class="swiper w-full relative">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper w-full ">

            <!-- Slides -->
            <div class="swiper-slide" :style="{ backgroundImage: `url(${require(`@/static/cube/${item.src}`)})` }"
                v-for="(item, index) in getLang.slider" :key="index">
                <div class="slide opacity h-full">
                    <Container class="px-4 h-full flex flex-col items-start justify-end ">
                        <h1 class="text-2xl sm:text-3xl font-bold mb-4 text-white">{{ item.title }}</h1>
                        <p class="lg:w-144 text-sm sm:text-base sm:w-auto mb-4 text-white ">
                            {{ item.text }}
                        </p>
                        <nuxt-link :to="'/products#' + item.link"
                            class="w-32 h-10 block text-center leading-10 bg-green rounded-sm text-white mb-10 lg:mb-12">
                            {{ getLang.button.goCollection }}
                        </nuxt-link>
                    </Container>
                </div>
            </div>


        </div>

        <div class="top-0 left-0 absolute w-full z-50">
            <Container class="lg:pt-8 pt-4 px-0">
                <img class="opacity-100 lg:w-40 w-30" :src="require('@/static/icon.png')" alt="Bee Concrete Desing">
            </Container>
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
    height: 60vh;

    .swiper-wrapper {
        .swiper-slide {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            .slide {
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
