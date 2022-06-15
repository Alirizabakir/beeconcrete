<template>
  <div class="home">
    <Container class="cont">
      <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark my-10">
        {{ getLang.title.discount }}
      </h2>
      <Swipper @swip="a => disCount = a" :products="discount" />
      <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark my-10">
        {{ getLang.title.special }}
      </h2>
      <Swipper @swip="a => specialCount = a" :products="special" />
    </Container>
    <div class="hexagon-box mt-20 py-20">
      <Container class="flex flex-wrap w-full items-center justify-center">
        <HexagonBox :src="item.src" v-for="(item, index) in getLang.characteristic" :key="index">
          <template v-slot:header>
            {{ item.title }}
          </template>
          <template v-slot:content>
            {{ item.text }}
          </template>
        </HexagonBox>
      </Container>
    </div>
    <Container>
      <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark my-10">
        {{ getLang.title.fav }}
      </h2>
      <Swipper @swip="a => favoritesCount = a" :products="favorites" />
    </Container>
    <Popup />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      scroll: false,
      disCount: 6,
      specialCount: 4,
      favoritesCount: 4,
    }
  },
  computed: {
    getLang() {
      return this.$store.getters.getLang
    },
    discount() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return a.newPrice - b.newPrice;
      });
      if (process.client) {
        if (window.screen.width > 1024) {
          return clone.slice(this.disCount, this.disCount + 4);
        } else {
          return clone.slice(this.disCount, this.disCount + 2);
        }
      }
    },
    special() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.newPrice - a.newPrice;
      });
       if (process.client) {
        if (window.screen.width > 1024) {
          return clone.slice(this.specialCount, this.specialCount + 4);
        } else {
          return clone.slice(this.specialCount, this.specialCount + 2);
        }
      }
    },
    favorites() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.fav - a.fav;
      });
      if (process.client) {
        if (window.screen.width > 1024) {
          return clone.slice(this.favoritesCount, this.favoritesCount + 4);
        } else {
          return clone.slice(this.favoritesCount, this.favoritesCount + 2);
        }
      }
    },
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