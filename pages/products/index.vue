<template>
  <div class="two-footer">
    <ul class="prolist">
      <Product
        v-for="(product, index) in getProducts"
        :key="index"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.state.showProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.two-footer {
  overflow-y: scroll;
  .prolist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
    grid-gap: 2rem;
    align-items: flex-start;
    justify-content: center;
  }
}

@media only screen and (max-width: 1024px) {
  .two-footer {
    .prolist {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.5rem;
    }
  }
}
</style>