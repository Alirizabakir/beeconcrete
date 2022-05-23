<template>
  <div class="home">
    <Slider :products='slider' />
    <Container>
      <Show :discount="true" :products="productsOffer">
        Kampayalı Ürünler
      </Show>
      <Show :products="productsFav">
        Favori Ürünler
      </Show>
    </Container>
    <div class="hexagon-box mt-20 py-20">
      <Container class="flex flex-wrap w-full items-center justify-center">
        <HexagonBox>
          <template v-slot:header>
            Birinci Başlık
          </template>
          <template v-slot:content>
            Birinci Açıklama
          </template>
        </HexagonBox>
        <HexagonBox>
          <template v-slot:header>
            İkinci Başlık
          </template>
          <template v-slot:content>
            İkinci Açıklama
          </template>
        </HexagonBox>
        <HexagonBox>
          <template v-slot:header>
            Üçüncü Başlık
          </template>
          <template v-slot:content>
            Üçüncü Açıklama
          </template>
        </HexagonBox>
      </Container>
    </div>
    <Container>
      <Show class="sm:px-2 mt-20" :products="productsSpecial">
        Özel Seri
      </Show>
    </Container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      scroll: false
    }
  },
  computed: {
    productsSpecial() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.big.newPrice - a.big.newPrice;
      });
      return clone.slice(0, 4);

      // if (process.client) {
      //   if (window.screen.width > 1000) {
      //     return clone.slice(0, 3);
      //   } else if (window.screen.width < 1000) {
      //     return clone.slice(0, 3);
      //   }
      // }
    },
    productsOffer() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return a.big.newPrice - b.big.newPrice;
      });
      return clone.slice(0, 4);

      // if (process.client) {
      //   if (window.screen.width > 1000) {
      //     return clone.slice(0, 4);
      //   } else if (window.screen.width < 1000) {
      //     return clone.slice(0, 3);
      //   }
      // }
    },
    productsFav() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.fav - a.fav;
      });
      return clone.slice(0, 4);

      // if (process.client) {
      //   if (window.screen.width > 1000) {
      //     return clone.slice(0, 4);
      //   } else if (window.screen.width < 1000) {
      //     return clone.slice(0, 3);
      //   }
      // }
    },
    slider() {
      return this.$store.getters.getSlider;
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
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
.home {
  .hexagon-box {
    background-image: url(~/static/bg/geometric.jpg);
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>