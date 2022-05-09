<template>
  <div class="two-footer">
    <ul class="product-list">
      <AdminProductBox @item='item => post = item' v-for="(item, index) in getProducts" :key="index" :item='item'/>
    </ul>
    <FormProduct
      @postNull="(a) => (post = a)"
      v-if="getDisplayForm"
      :post="post"
    />
  </div>
</template>

<script>
import SettingSvg from "@/components/icon/SettingSvg";
import RemoveSvg from "@/components/icon/RemoveSvg";
export default {
  name: "Product",
  middleware: "admin-auth",
  layout: "admin",
  components: {
    SettingSvg,
    RemoveSvg,
  },
  data() {
    return {
      isActive: false,
      post: null,
    };
  },
  methods: {
    enter(id) {
      this.isActive = id;
    },
    leave() {
      this.isActive = false;
    },
    newProduct() {
      this.post = null;
    },
    delProduct(id) {
      this.$store.dispatch("delProduct", id);
    },
    updateProduct(item) {
      this.post = item;
      this.$store.commit("displayForm", true);
    },
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
    getDisplayForm() {
      return this.$store.getters.getDisplayForm;
    },
  },
};
</script>

<style lang="scss" scoped>
.two-footer {
  overflow-y: scroll;
  background-color: rgba(237, 237, 237, 0.753);
  border-radius: 5px;

  .product-list {
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
    .product {
      position: relative;
      width: 200px;
      height: 200px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.563);
      border-radius: 5px;
      overflow: hidden;
      .name {
        padding: 0.5rem 1rem;
        position: absolute;
        top: 0;
        color: #183a0d;
        font-size: var(--mediumSize);
        font-weight: normal;
        letter-spacing: 1px;
        background-color: #ffffff96;
        width: 100%;
      }
      .img {
        max-width: 100%;
      }
      .settings {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        background-color: rgba(205, 205, 205, 0.7);
        transition: all 0.5s;
        span {
          position: absolute;
          transition: all 0.3s;
          &:nth-child(1) {
            left: -50%;
          }
          &:nth-child(2) {
            right: -50%;
          }
          svg {
            width: 30px;
            fill: #183a0d;
          }
        }
      }
      .active {
        opacity: 1;
        visibility: visible;
        span {
          position: absolute;
          &:nth-child(1) {
            left: calc(30% - 15px);
          }
          &:nth-child(2) {
            right: calc(30% - 15px);
          }
        }
      }
    }
  }
}
</style>