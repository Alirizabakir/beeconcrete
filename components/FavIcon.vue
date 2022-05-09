<template>
  <div class="icon">
    <div class="cont">
      <span
        @click="favItem"
        :class="{ heartActive: active }"
        class="heart"
      ></span>
      <span class="numb">{{ fav }}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
      fav: null,
    };
  },
  created() {
    this.fav = this.product.fav;
    if (this.$store.getters.getFavItem) {
      this.$store.getters.getFavItem.filter((a) => {
        if (a._id == this.product._id) {
          this.active = true;
        }
      });
    }
  },
  methods: {
    favItem() {
      if (this.active) {
        this.$store.dispatch("favItem", {
          status: false,
          ...this.product,
        });
        this.active = false;
        this.fav -= 1;
      } else {
        this.$store.dispatch("favItem", {
          status: true,
          ...this.product,
        });
        this.active = true;
        this.fav += 1;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.icon {
  position: relative;
  .cont {
    cursor: pointer;
    .heart {
      position: absolute;
      background: url("~/static/img.png") no-repeat;
      background-position: left;
      background-size: 2900%;
      height: 50px;
      width: 70px;
      top: 50%;
      left: 21%;
      transform: translate(-50%, -50%);
    }
    .numb {
      display: inline-block;
      width: 35px;
      transform: translateX(25px);
    }
  }

  .heart.heartActive {
    animation: animate 0.8s steps(28) 1;
    background-position: right;
  }

  @keyframes animate {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .numb {
    display: none;
  }
}
</style>