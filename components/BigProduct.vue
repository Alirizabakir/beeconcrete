<template>
  <div class="two-footer">
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img :src="require(`~/static/resize/${product.src.a}`)" :alt="product.name" />
        </div>
        <div class="swiper-slide">
          <img :src="require(`~/static/resize/size/${product.src.b}`)" :alt="product.name" />
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
    </div>
    <ul class="info-box h-full w-full flex column j-start a-center">
      <li class="info flex column a-start">
        <ul class="header">
          <li class="name">{{ product.name }}</li>
          <li class="collection">{{ product.collectionName }} Collection</li>
        </ul>
        <ul class="big-size">
          <li
            v-show="item > 0"
            class="size"
            v-for="(item, index) in product.big"
            :key="index"
          >
            <span v-show="index != 'newPrice' && index != 'oldPrice'"
              >{{ index }}: </span
            ><strong v-show="index != 'newPrice' && index != 'oldPrice'"
              >{{ item }} cm</strong
            >
          </li>
        </ul>
        <ul v-show="product.color" class="color-box flex">
          <li>
            <span>Color:</span>
          </li>
          <li class="color flex">
            <div
              @click="color = 'white'"
              :class="{ select: color == 'white' }"
              class="white"
            ></div>
            <div
              @click="color = 'grey'"
              :class="{ select: color == 'grey' }"
              class="grey"
            ></div>
          </li>
        </ul>
        <ul v-show="product.rub" class="rub-box flex">
          <li>
            <span>Rub:</span>
          </li>
          <li class="rub flex">
            <div
              @click="rub = 'rough'"
              :class="{ select: rub == 'rough' }"
              class="rough"
            >
              Rough
            </div>
            <div
              @click="rub = 'rougher'"
              :class="{ select: rub == 'rougher' }"
              class="rougher"
            >
              Rougher
            </div>
            <div
              @click="rub = 'smooth'"
              :class="{ select: rub == 'smooth' }"
              class="smooth"
            >
              Smooth
            </div>
          </li>
        </ul>
        <ul class="price-box flex column a-end j-center">
          <li class="new">{{ product.big.newPrice }} ₺</li>
          <li class="old">{{ product.big.oldPrice }} ₺</li>
        </ul>
      </li>
      <li class="control w-full flex a-center">
        <div class="fav-box j-center flex a-center">
          <FavIcon />
          <div class="count">
            {{ product.fav }}
          </div>
        </div>
        <span @click="addToCart" class="button">Buy+</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BigProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
      rub: "smooth",
      color: "grey",
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        selectRub: this.rub,
        selectColor: this.color,
        count: this.count,
        ...this.product,
      });
    },
  },
  mounted() {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
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
  },
};
</script>
<style lang="scss" scoped>
.two-footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0;
  overflow: hidden;

  .swiper {
    width: 100%;
    max-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        img {
          width: 500px;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .swiper-pagination {
      bottom: 10px;
      left: calc(50% - 26px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        margin: 3px;
        background-color: rgb(251, 251, 251);
        width: 20px;
        height: 20px;
      }
    }
  }
  ul {
    padding: 0 0.5rem;
  }
  .info-box {
    width: 100%;
    background-color: white;
    padding: 2rem 1rem;
    .info {
      width: 100%;
      ul {
        margin-bottom: 2rem;
      }
      .header {
        padding: 0 1rem;
        .name {
          font-size: var(--xbigSize);
          font-weight: bold;
        }
        .collection {
          font-size: var(--smallSize);
          color: gray;
          font-style: italic;
        }
      }
      .big-size {
        width: 100%;
        li {
          margin-bottom: 0.5rem;
        }
        .size {
          display: flex;
          justify-content: space-between;
        }
        strong {
          font-size: var(--mediumSize);
        }
      }
      .color-box {
        width: 100%;
        justify-content: space-between;
        li {
          margin-bottom: 0.5rem;
        }
        .color {
          div {
            border-radius: 3px;
            border: 1px solid rgb(138, 138, 138);
            cursor: pointer;
          }
          .white {
            width: 30px;
            height: 30px;
            background-color: rgb(234, 234, 234);
          }
          .grey {
            width: 30px;
            height: 30px;
            background-color: grey;
            margin-left: 1rem;
          }
          .select {
            border: 1px solid rgb(255, 145, 0);
          }
        }
      }
      .rub-box {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        li {
          margin-bottom: 0.5rem;
        }
        .rub {
          div {
            border-radius: 3px;
            border: 1px solid rgb(164, 164, 164);
            height: 30px;
            line-height: 30px;
            padding: 0 0.5rem;
            cursor: pointer;
          }
          .rougher {
            margin-left: 1rem;
          }
          .smooth {
            margin-left: 1rem;
          }
          .select {
            border: 1px solid rgb(255, 145, 0);
          }
        }
      }
      .price-box {
        width: 100%;
        .new {
          font-size: var(--bigSize);
          font-weight: bold;
        }
        .old {
          font-size: var(--normalSize);
          text-decoration: line-through;
        }
      }
    }
    .control {
      justify-content: space-between;
      .button {
        line-height: 40px;
        height: 40px;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .two-footer {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow-y: scroll;
    .swiper {
      margin-right: 0px;
      height: 80vh;
      .swiper-wrapper {
        width: 100%;
      }
    }
    .info-box {
      width: 100%;
      .info {
        .size-box {
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>