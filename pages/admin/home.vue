<template>
  <div class="content">
    <div class="section-one">
      <div @click="run('Home')" class="one-item">
        <nuxt-link to="/admin/home"
          ><span class="svg-span"><HomeSvg /></span
        ></nuxt-link>
      </div>
      <div @click="run('Product')" class="one-item">
        <nuxt-link to="/admin/home/product"
          ><span class="svg-span"><DataSvg /></span
        ></nuxt-link>
      </div>
      <div @click="run('Social')" class="one-item">
        <nuxt-link to="/admin/home/social"
          ><span class="svg-span"><SocialSvg /></span
        ></nuxt-link>
      </div>
      <div @click="run('About')" class="one-item">
        <nuxt-link to="/admin/home/about"
          ><span class="svg-span"><ContactSvg /></span
        ></nuxt-link>
      </div>
      <div @click="run('Contact')" class="one-item">
        <nuxt-link to="/admin/home/contact"
          ><span class="svg-span"><PhoneSvg /></span
        ></nuxt-link>
      </div>
      <div @click="run('User')" class="one-item">
        <nuxt-link to="/admin/home/user"
          ><span class="svg-span"><UserSvg /></span
        ></nuxt-link>
      </div>
    </div>
    <div class="section-two">
      <header class="header flex a-center j-between">
        <h2>{{ header }}</h2>
        <span class="svg-span" @click="openForm"><PlusSvg /></span>
      </header>
      <nuxt-child class="h-full w-full" />
    </div>
  </div>
</template>
<script>
import HomeSvg from "@/components/icon/HomeSvg";
import DataSvg from "@/components/icon/DataSvg";
import SocialSvg from "@/components/icon/SocialSvg";
import ContactSvg from "@/components/icon/ContactSvg";
import PhoneSvg from "@/components/icon/PhoneSvg";
import UserSvg from "@/components/icon/UserSvg";
import PlusSvg from "@/components/icon/PlusSvg";

export default {
   middleware: ['admin-auth'],
  components: {
    HomeSvg,
    PhoneSvg,
    ContactSvg,
    SocialSvg,
    DataSvg,
    UserSvg,
    PlusSvg,
  },
  data() {
    return {
      header: "",
    };
  },
  created() {
    if (this.$route.fullPath.split("/")[3]) {
      this.header = this.$route.fullPath.split("/")[3].toUpperCase();
    } else {
      this.header = this.$route.fullPath.split("/")[2].toUpperCase();
    }
  },
  methods: {
    run(text) {
      if (this.$route.fullPath.split("/")[3]) {
        this.header = this.$route.fullPath.split("/")[3].toUpperCase();
      } else {
        this.header = this.$route.fullPath.split("/")[2].toUpperCase();
      }
    },
    openForm() {
      console.log("Run");
      this.$store.commit("displayForm", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 0;
  .section-one {
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100px;
    .one-item {
      align-items: center;
      justify-content: center;
      margin-bottom: 1.2rem;
      .svg-span {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        box-shadow: -2px 2px 0px rgba(0, 0, 0, 0.4),
          -5px 5px 5px rgba(0, 0, 0, 0.3);

        svg {
          width: 30px;
          height: 30px;
          
        }
      }
    }
  }
  .section-two {
    background-color: rgba(255, 255, 255, 0);
    .header {
      margin-bottom: 1rem;
      background-color: rgb(176, 176, 176);
      height: 50px;
      padding: 0 1rem;
      border-radius: 5px;
      box-shadow: -2px 2px 0px rgba(122, 122, 122, 0.4),
        -5px 5px 5px rgba(0, 0, 0, 0.3);

      h2 {
        line-height: 50px;
        color: white;
        font-weight: normal;
        letter-spacing: 1px;
      }
      .svg-span {
        width: 35px;
        height: 35px;
        border-radius: 5px;
        box-shadow: -2px 2px 0px rgba(0, 0, 0, 0.4),
          -5px 5px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        svg {
          width: 25px;
        }
      }
    }
  }
}
</style>