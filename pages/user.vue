<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item">
        <span class="border-r">User Information</span>
      </li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        {{ getUser.name }}
      </div>
      <div class="two-footer">
        <h1>User Information</h1>
        <UserBox @succes="(a) => (succes = a)" @del="(a) => (deleteA = a)" />
      </div>
    </div>
    <Notification
      @status="(a) => (succes = a)"
      :name="'succes'"
      :statusProp="succes"
    >
      <template v-slot:par1> Your information has been updated.. </template>
      <template v-slot:par2> Transaction successful ! </template>
    </Notification>
    <Notification
      @status="(a) => (deleteA = a)"
      :name="'delete'"
      :statusProp="deleteA"
    >
      <template v-slot:par1>Your account has been safely deleted ..</template>
      <template v-slot:par2> Transaction successful ! </template>
    </Notification>
  </div>
</template>
<script>
import CheckSvg from "@/components/icon/CheckSvg.vue";
export default {
  name: "About",
  middleware: ["session-control", "auth"],
  components: {
    CheckSvg,
  },
  data() {
    return {
      succes: false,
      deleteA: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    .section-two {
      .two-footer {
        &::-webkit-scrollbar {
          display: none;
        }
        .user-box {
          grid-template-columns: 1fr;
          padding: 0 1rem;
        }
        .button {
          width: 100%;
        }
      }
    }
  }
}
</style>