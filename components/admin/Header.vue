<template>
  <div class="header w-28 z-50 fixed top-0 h-screen flex flex-col items-center justify-center">
    <div @click="newProduct = !newProduct" class="cursor-pointer">
      <PlusSvg class="w-8" />
    </div>
    <nuxt-link class="border-r-4 border-blue" to="/admin/home">
      <HomeSvg class="w-8" />
    </nuxt-link>
    <nuxt-link to="/admin/home/product">
      <DataSvg class="w-8" />
    </nuxt-link>
    <nuxt-link to="/admin/home/social">
      <SocialSvg class="w-8" />
    </nuxt-link>
    <nuxt-link to="/admin/home/about">
      <ContactSvg class="w-8" />
    </nuxt-link>
    <nuxt-link to="/admin/home/contact">
      <PhoneSvg class="w-8" />
    </nuxt-link>
    <nuxt-link to="/admin/home/user">
      <UserSvg class="w-8" />
    </nuxt-link>
    <UpdateForm @close='a => newProduct = a' v-if="newProduct" :post='null' />
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
import UpdateForm from '@/components/admin/UpdateForm'


export default {
  components: {
    HomeSvg,
    PhoneSvg,
    ContactSvg,
    SocialSvg,
    DataSvg,
    UserSvg,
    PlusSvg,
    UpdateForm,
  },
  data() {
    return {
      header: "",
      newProduct: false,
    };
  },
  // created() {
  //   if (this.$route.fullPath.split("/")[3]) {
  //     this.header = this.$route.fullPath.split("/")[3].toUpperCase();
  //   } else {
  //     this.header = this.$route.fullPath.split("/")[2].toUpperCase();
  //   }
  // },
  methods: {


  },
};
</script>
<style lang="scss" scoped>
.header {

  a,
  div {
    padding: .5rem 1rem;
    margin: .5rem 0;

    svg {
      fill: rgb(65, 65, 65);
    }
  }
}
</style>