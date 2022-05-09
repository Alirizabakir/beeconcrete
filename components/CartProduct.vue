<template>
  <li class="bag-item w-full flex a-center j-between">
    <div class="img h-full">
      <img class="h-full" :src="'small/' + product.src.a" alt="" />
    </div>
    <div class="item-box j-between a-center h-full flex">
      <ul class="info flex column j-between h-full">
        <li class="name">
          <p>{{ product.name }}</p>
        </li>
        <li class="color flex a-center j-center">
          <div class="text">Color :</div>
          <div v-show="product.selectColor == 'white'" class="white"></div>
          <div v-show="product.selectColor == 'grey'" class="grey"></div>
        </li>
        <li class="rub flex">
          <div class="text">Rub :</div>
          <p>{{ product.selectRub }}</p>
        </li>
      </ul>
      <div class="control h-full flex a-center j-between">
        <div class="count flex a-center">
          <span class="negative flex a-center j-center h-full" @click="changeCount(false)">
            <img src="negative.png" alt="" />
          </span>
          <span class="bag-input"> {{product.count}} </span>
          <span class="positive flex a-center j-center h-full" @click="changeCount(true)">
            <img src="positive.png" alt="" />
          </span>
        </div>
        <p class="price">{{ product.totalPrice }} ₺</p>
        <button class="del" @click="remove">
          <img :src="'remove.png'" alt="" />
        </button>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "CarItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.count = this.product.count;
  },
  methods: {
    changeCount(status) {
      if (!status) {
        if (this.count > 1) {
          this.count--;
          this.$store.dispatch("changeCount", {
            newCount: this.count,
            ...this.product,
          });
        }
      } else {
        this.count++;
        this.$store.dispatch("changeCount", {
          newCount: this.count,
          ...this.product,
        });
      }
    },
    remove() {
      this.$store.dispatch("removeCart", this.product);
    },
  },
};
</script>
<style lang="scss" scoped>
.bag-item {
  margin-bottom: 1rem;
  padding: 0 2rem 0 0;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  .img {
    img {
      max-height: 120px;
    }
  }
  .item-box {
    flex: 1;
    padding: 1rem 0;
    .info {
      margin: 0 1rem;
      .name {
        font-size: var(--mediumSize);
        font-weight: bold;
      }
      .color {
        .white {
          width: 20px;
          height: 20px;
          border: 1px solid rgb(195, 195, 195);
          background-color: white;
          margin-left: 1rem;
        }
        .grey {
          width: 20px;
          height: 20px;
          border: 1px solid rgb(195, 195, 195);
          background-color: rgb(140, 140, 140);
          margin-left: 1rem;
        }
      }
    }
    .control {
      width: 50%;
      .count {
        height: 32px;
        width: 72px;
        justify-content: space-evenly;
        border: 1px solid rgb(230, 229, 220);
        background-color: rgb(242, 242, 242);
        border-radius: 2px;
        span {
          cursor: pointer;
          flex: 1;
          img {
            width: 10px;
            height: 10px;
            opacity: 0.6;
          }
        }
        .bag-input {
          font-size: var(--normalSize);
          width: 24px;
          height: 24px;
          line-height: 25px;
          text-align: center;
          border-radius: 50%;
          background-color: rgba(45, 166, 31, 0.3);
          color: rgb(9, 74, 6);
          font-weight: bold;
        }
      }
      .price {
        font-size: var(--mediumSize);
        font-weight: bold;
      }
      .del {
        img {
          width: 20px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .bag-item {
    padding: 0.5rem;
    .img {
      img {
        height: 100px;
      }
    }
    .item-box {
      position: relative;
      flex-direction: column;
      padding: 0;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 1rem;
      .info {
        margin: 0;
        justify-content: flex-start;
        width: 100%;
        .name {
          font-size: var(--normalSize);
          margin-bottom: 0.3rem;
        }
        .color {
          justify-content: flex-start;
          margin-bottom: 0.3rem;

          .text {
            font-size: var(--smallSize);
          }
          .white {
            width: 15px;
            height: 15px;
          }
          .grey {
            width: 15px;
            height: 15px;
          }
        }
        .rub {
          .text {
            font-size: var(--smallSize);
          }
          p {
            font-size: var(--smallSize);
          }
        }
      }
      .control {
        width: 100%;
        height: auto;
        .count {
          height: 27px;
          border-radius: 2px;
          width: 65px;
          span {
            img {
              width: 9px;
            }
          }
          .bag-input {
            height: 20px;
            width: 20px;
            line-height: 20px;
            margin: 0;
            font-size: var(--smallSize);
          }
        }
        .del {
          position: absolute;
          right: 0;
          top: 0;
          img {
            width: 17px;
          }
        }
      }
    }
  }
}
</style>