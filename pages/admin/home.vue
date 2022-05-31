<template>
  <div class="flex">
    <Header/>
    <nuxt-child class="flex-1 ml-28" />
  </div>
</template>
<script>
import Header from "@/components/admin/Header";
import HomeSvg from "@/components/icon/HomeSvg";
import DataSvg from "@/components/icon/DataSvg";
import SocialSvg from "@/components/icon/SocialSvg";
import ContactSvg from "@/components/icon/ContactSvg";
import PhoneSvg from "@/components/icon/PhoneSvg";
import UserSvg from "@/components/icon/UserSvg";
import PlusSvg from "@/components/icon/PlusSvg";

export default {
  components: {
    Header,
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
.content {
  
}
</style>