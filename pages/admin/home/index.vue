<template>
  <div class="two-footer">
    <ul class="slider-list">
      <AdminProductBox
        v-for="(item, index) in getProducts"
        :key="index"
        :item="item"
        :slider="true"
      />
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
//   created() {
//     this.add({ name: "Bee No 1", src: { a: "bee_no_1_a.jpg" } });
//     this.add({ name: "Bee No 4", src: { a: "bee_no_4_a.jpg" } });
//     this.add({ name: "Bee No 7", src: { a: "bee_no_7_a.jpg" } });
//     this.add({ name: "Bee No 6", src: { a: "bee_no_6_a.jpg" } });
//     this.add({ name: "Column No 2", src: { a: "column_no_2_a.jpg" } });
//     this.add({ name: "HoneyComb No 3", src: { a: "honeycomb_no_3_a.jpg" } });
//     this.add({ name: "HoneyComb No 1", src: { a: "honeycomb_no_1_a.jpg" } });
//     this.add({ name: "HoneyComb No 2", src: { a: "honeycomb_no_2_a.jpg" } });
//     this.add({ name: "HoneyComb No 5", src: { a: "honeycomb_no_5_a.jpg" } });
//     this.add({ name: "Queen No 1", src: { a: "queen_no_1_a.jpg" } });
//   },
//   methods: {
//     del(id) {
//       this.$store.dispatch("delSlider", id);
//     },
//     add(slide) {
//       this.$store.dispatch("addSlider", slide);
//     },
//   },
};
</script>

<style lang="scss" scoped>
.two-footer {
  overflow-y: scroll;
  background-color: rgba(237, 237, 237, 0.753);
  border-radius: 5px;
  .slider-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
    grid-gap: 2rem;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;
    &::-webkit-scrollbar-track {
      background-color: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #474747;
      border-radius: 5px;
    }
  }
}
</style>