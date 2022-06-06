<template>
  <div class="home">
    <Container class="cont">
      <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark my-10">
        {{ getLang.title.discount }}
      </h2>
      <Swipper :products="discount" />
      <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark my-10">
        {{ getLang.title.special }}
      </h2>
      <Swipper :products="special" />
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
      <Swipper :products="favorites" />
    </Container>
    <Popup />
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
    getLang() {
      return this.$store.getters.getLang
    },
    discount() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return a.newPrice - b.newPrice;
      });
      return clone.slice(0, 20);
    },
    special() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.newPrice - a.newPrice;
      });
      return clone.slice(0, 20);
    },
    favorites() {
      const clone = [...this.$store.getters.getProducts];
      clone.sort((a, b) => {
        return b.fav - a.fav;
      });
      return clone.slice(0, 20);
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