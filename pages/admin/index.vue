<template>
  <div class="content flex items-center justify-center">
    <div class="login flex flex-col items-center ">
      <input :class="{inValid: userValid}" v-model="userName" class="input" type="text" placeholder="Username" />
      <input :class="{inValid: passValid}" v-model="password" class="input" type="password" placeholder="Password" />
      <button @click="login" class="admin-button">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      userValid: false,
      passValid: false,
    };
  },
  methods: {
    login() {
      if (this.userName == "bee@admin") {
        this.userValid = false;
        if (this.password == "2547492Bkr") {
          this.passValid = false;
          this.$store.state.admin = true
          this.$router.push("/admin/home");
          // this.$store.dispatch('allProductUpload')
          // this.$store.dispatch('newSlider')
        } else {
          this.passValid = true;
        }
      } else {
        this.userValid = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .login {
    width: 300px;
    padding: 2rem;
    background-color: grey;
    border-radius: 10px;
    .input {
      width: 100%;
      margin-bottom: 1rem;
    }
    .admin-button {
      background-color: rgb(10, 78, 7);
    }
  }
  .inValid {
    background-color: rgba(179, 60, 60, 0.603);
  }
}
</style>