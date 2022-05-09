<template>
  <div class="header flex a-center j-between">
    <div class="logo flex a-center j-center">
      <div class="hamburger" @click="menuActive = !menuActive">
        <img :src="require(`~/static/${masterIcon[0]}`)" alt="" />
      </div>
      <nuxt-link to="/" class="flex a-center j-center"
        ><img :src="require(`~/static/${masterIcon[1]}`)" alt=""
      /></nuxt-link>
    </div>
    <div
      class="router flex a-center j-center"
      :class="{ menuActive: menuActive }"
    >
      <nuxt-link to="/"
        ><HomeSvg />
        <span @click="trans($event, 0), (menuActive = false)"
          >Home</span
        ></nuxt-link
      >
      <nuxt-link to="/products"
        ><ProductHuntBrandsSvg />
        <span @click="trans($event, 1), (menuActive = false)"
          >Product</span
        ></nuxt-link
      >
      <nuxt-link to="/social"
        ><InstagramBrandsSvg />
        <span @click="trans($event, 2), (menuActive = false)"
          >Social</span
        ></nuxt-link
      >
      <nuxt-link to="/about"
        ><InfoCircleSvg /><span @click="trans($event, 3), (menuActive = false)"
          >About</span
        ></nuxt-link
      >
      <nuxt-link to="/contact"
        ><SquarePhoneSolidSvg /><span
          @click="trans($event, 4), (menuActive = false)"
          >Contact</span
        ></nuxt-link
      >
      <span
        v-show="index != null"
        @click="trans"
        :style="'--i:' + index + ';'"
        class="trans h-full"
        :class="{ cancel: isCancel }"
      ></span>
    </div>
    <div class="user flex a-center j-center">
      <nuxt-link class="fav flex a-center j-center h-full" to="#">
        <HeartSolidSvg />
        <span v-show="getCartLength.length > 0">
          {{ getFavItem.length }}
        </span>
      </nuxt-link>
      <nuxt-link class="bag flex a-center j-center h-full" to="/bag">
        <img
          @click="cancel"
          :src="require(`~/static/${masterIcon[2]}`)"
          alt=""
        />
        <span v-show="getCartLength.length > 0">
          {{ getCartLength.length }}
        </span>
      </nuxt-link>
      <nuxt-link class="user-pp" to="/user">
        <span class="flex a-center j-center" @click="cancel"><UserSvg /></span>
      </nuxt-link>
      <nuxt-link class="h-full" v-show="!isAuth" to="/signin"
        ><span @click="cancel">Sign In</span></nuxt-link
      >
      <a href="#" class="logout h-full" v-show="isAuth" @click.prevent="logout"
        ><img
          @click="cancel"
          :src="require(`~/static/${masterIcon[5]}`)"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import HomeSvg from "@/components/icon/HomeSvg.vue";
import InfoCircleSvg from "@/components/icon/InfoCircleSvg.vue";
import ProductHuntBrandsSvg from "@/components/icon/ProductHuntBrandsSvg.vue";
import InstagramBrandsSvg from "@/components/icon/InstagramBrandsSvg.vue";
import SquarePhoneSolidSvg from "@/components/icon/SquarePhoneSolidSvg.vue";
import UserSvg from "@/components/icon/UserSvg.vue";
import HeartSolidSvg from "@/components/icon/HeartSolidSvg.vue";
export default {
  name: "MasterHeader",
  components: {
    SquarePhoneSolidSvg,
    ProductHuntBrandsSvg,
    InstagramBrandsSvg,
    InfoCircleSvg,
    HomeSvg,
    UserSvg,
    HeartSolidSvg,
  },
  data() {
    return {
      isCancel: false,
      index: null,
      menuActive: false,
      masterIcon: [
        "hamburger.png",
        "icon.png",
        "shopping-bag.png",
        "hamburgerwhite.png",
        "user.png",
        "logout.png",
      ],
    };
  },
  computed: {
    getFavItem(){
      return this.$store.getters.getFavItem
    },
    getCartLength() {
      if (this.$store.getters.getCart) {
        return this.$store.getters.getCart;
      } else {
        return 0;
      }
    },
    isAuth() {
      return this.$store.getters.getAuthKey;
    },
  },
  methods: {
    trans(e, a) {
      this.isCancel = false;
      this.index = a;
    },
    cancel() {
      this.isCancel = true;
      this.menuActive = false;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  width: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 5px 5px;
  padding: 0 1rem;
  .logo {
    width: 200px;
    .hamburger {
      display: none;
    }
    a {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: white;
      img {
        width: 50px;
      }
    }
  }
  .router {
    position: relative;
    height: 50px;
    a {
      font-weight: 600;
      width: 100px;
      font-size: var(--bigSize);
      svg {
        width: 25px;
        display: none;
      }
      span {
        width: 100%;
        height: 100%;
        display: inline-block;
        text-align: center;
      }
    }
    .trans {
      width: 100px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(calc(100px * var(--i)));
      transition: all 0.3s;
      z-index: -1;
      opacity: 1;
    }
    .cancel {
      opacity: 0;
    }
  }
  .user {
    a {
      font-size: var(--normalSize);
      margin: 0 0.5rem;
    }
    .fav {
      position: relative;
      svg {
        width: 25px;
        fill: rgb(5, 82, 5);
      }
      span {
        background-color: #f21a1a;
        color: white;
        min-width: 15px;
        text-align: center;
        padding: 3px;
        font-size: 11px;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        right: -7px;
      }
    }
    .bag {
      position: relative;
      img {
        width: 40px;
      }
      span {
        background-color: #f27a1a;
        color: white;
        min-width: 15px;
        text-align: center;
        padding: 3px;
        font-size: 11px;
        border-radius: 3px;
        position: absolute;
        top: 0;
        right: 3px;
      }
    }
    .user-pp {
      span {
        width: 40px;
        height: 40px;
        svg {
          width: 25px;
          height: 25px;
          fill: rgb(5, 82, 5);
        }
      }
    }
    .logout {
      img {
        width: 20px;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .header {
    width: 95%;
    padding: 0;
    .logo {
      flex: 1;
      justify-content: flex-start;
      .hamburger {
        display: block;
        margin: 0 0.7rem;
        img {
          width: 20px;
        }
      }
      a {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        img {
          width: 40px;
        }
      }
    }
    .router {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding: 1rem;
      background-color: rgb(255, 255, 255);
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      position: absolute;
      transition: all 0.4s;
      top: 90px;
      left: -110%;
      a {
        display: flex;
        width: 100%;
        padding: 0 2rem;
        margin-bottom: 1rem;
        svg {
          display: block;
          fill: rgb(18, 85, 10);
        }
        span {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          height: 50px;
          line-height: 50px;
          padding: 0 1rem;
          font-weight: normal;
        }
      }
      .trans {
        display: none;
      }
    }
    .menuActive {
      left: 0%;
    }

    .user {
      a {
        font-size: var(--smallSize);
      }
      .bag {
        img {
          width: 40px;
        }
      }
      .user-pp {
      }
      .logout {
        img {
          width: 15px;
        }
      }
    }
  }
}
</style>