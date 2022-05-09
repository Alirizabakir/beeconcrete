<template>
  <li class="list-item flex column j-between">
    <img
      @click="productImg()"
      class="img"
      :src="'../../small/' + product.src.a"
      alt=""
    />
    <div class="info-box flex column j-between">
      <div class="info flex a-start j-between">
        <div class="name">{{ product.name }}</div>
        <div class="price-box flex column a-end j-center">
          <span class="new price">{{ product.big.newPrice }} ₺</span>
          <span class="old price">{{ product.big.oldPrice }} ₺</span>
        </div>
      </div>
      <div class="control flex a-center j-between">
        <div class="fav-box j-center flex a-center">
          <FavIcon :product="product" />
        </div>
        <button @click="addToCart" class="button">Buy+</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    productImg() {
      this.$store.dispatch("bigProduct", this.product);
      this.$router.push("/products/" + this.product._id);
    },
    addToCart() {
      this.$store.dispatch("addToCart", {
        selectRub: "smooth",
        selectColor: "grey",
        count: this.count,
        ...this.product,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: -3px 3px 12px rgba(0, 0, 0, 0.4);
  .img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5x;
    cursor: pointer;
  }
  .info-box {
    padding: 1rem 1rem 0.5rem 1rem;
    .info {
      margin-bottom: 0.5rem;

      .name {
        font-weight: bold;
        font-size: var(--mediumSize);
      }
      .price-box {
        .new {
          font-weight: bold;
          font-size: var(--mediumSize);
        }
        .old {
          text-decoration: line-through;
          font-size: var(--smallSize);
        }
      }
    }
    .control {
      .fav-box {
        height: 30px;
        position: relative;
      }
      .button {
        font-size: var(--normalSize);
        height: 30px;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .list-item {
    border-radius: 0;
    position: relative;
    .img {
      border-radius: 0;
    }
    .info-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      .info {
        flex: 1;
        justify-content: space-between;
      }
      .control {
        flex-direction: column;
        .fav-box {
          position: absolute;
          top: 5px;
          left: 0.5rem;
        }
        .button {
          border-radius: 0px;
          width: 100%;
        }
      }
    }
  }
}
</style>