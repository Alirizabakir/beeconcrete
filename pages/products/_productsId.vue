<template>
  <BigProduct :product="getBigProduct" />
</template>
<script>

export default {
  name: "Products",
  computed: {
    getBigProduct() {
      return this.$store.getters.getBigProduct
    },
  },
  created() {
    return this.$store.dispatch('searchProduct', this.$route.params.productsId)
  },
};
</script>
<style lang="scss" scoped>
</style>