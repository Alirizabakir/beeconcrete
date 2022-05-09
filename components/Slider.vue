<template>
  <!-- Slider main container -->
  <div class="swiper w-full">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper w-full">
      <!-- Slides -->
      <div
        class="swiper-slide flex a-center j-center"
        v-for="(item, index) in slidersData"
        :key="index"
      >
        <img :src="'resize/' + item.src.a" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination flex a-center j-center"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    slidersData() {
      return this.$store.getters.getSlider;
    },
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      effect: "slide",
      loop: true,
      speed: 1000,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
  },
};
</script>
<style lang="scss">
.swiper {
  height: 90%;
  position: relative;
  overflow: visible;
  .swiper-wrapper {
    .swiper-slide {
      img {
        max-width: 100%;
        max-height: 100%;
        background-color: white;
        border-radius: 1rem;
        padding: 0.5rem;
      }
    }
  }
  .swiper-pagination {
    position: static;
    height: 50px;
    .swiper-pagination-bullet {
      margin: 3px;
      background-color: rgba(13, 54, 6, 0.386);
      opacity: 1;
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background-color: rgb(13, 54, 6);
    }
  }
}
@media only screen and (max-width: 1024px) {
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        padding: 0.5rem;
      }
    }
    .swiper-pagination {
      margin-top: 0px;
    }
  }
}
</style>