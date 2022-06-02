<template>
  <div class="home">
    <Container>
      <Show v-for="(item, index) in getLang.title" :key="index" :type="index">
        {{ item }}
      </Show>
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