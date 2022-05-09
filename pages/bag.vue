<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item"><span class="border-r">Bag</span></li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        Bag
      </div>
      <div class="two-footer">
        <ul class="bag-box flex column a-start j-start w-full h-full">
          <li class="empty" v-show="cart == null || cart.length == 0">
            <h1>Please Add Product ...</h1>
          </li>
          <CartProduct
            v-for="(product, index) in bagData"
            :key="index"
            :product="product"
          />
        </ul>
        <div class="pay-box w-full h-full">
          <div class="button">PAY</div>
          <ul class="flex column a-start j-start w-full">
            <li class="j-between flex a-center w-full">
              <h3>Order Summary</h3>
            </li>
            <li class="j-between flex a-center w-full">
              <span>Cargo</span>
              <span class="num">0 ₺</span>
            </li>
            <li class="j-between flex a-center w-full">
              <span>Discount</span>
              <span class="num">0 ₺</span>
            </li>
            <li class="j-between flex a-center w-full">
              <span>Product Total</span>
              <span class="num">{{ totalPrice }} ₺</span>
            </li>
            <li class="j-between flex a-center w-full">
              <span>Total</span>
              <span class="num"> {{ totalPrice }} ₺</span>
            </li>
          </ul>
          <div class="button">PAY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bag",
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    bagData() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none !important;
      }
      .empty {
        width: 100%;
        h1 {
          text-align: center;
          color: grey;
        }
      }
      .bag-box {
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }
      .pay-box {
        ul {
          background-color: rgb(255, 255, 255);
          padding: 1rem;
          border: 1px solid rgb(191, 191, 191);
          border-radius: 5px;
          margin: 1rem 0;
          li {
            padding: 0.25rem 1rem;
            &:nth-child(1) {
              padding: 0.25rem 0.5rem;
              margin-bottom: 1rem;
            }
            &:nth-child(4) {
              border-bottom: 1px solid black;
            }
            &:nth-child(5) {
              .num {
                font-size: var(--bigSize);
              }
            }
            .num {
              font-size: var(--mediumSize);
              font-weight: bold;
            }
          }
        }
        .button {
          height: 40px;
          line-height: 40px;
          font-size: var(--mediumSize);
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    .section-two {
      .two-footer {
        display: flex;
        grid-gap: 0;
        flex-direction: column;
        .pay-box {
          height: auto;
          ul {
            margin: 0;
            border: none;
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>