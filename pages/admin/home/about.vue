<template>
  <div class="two-footer flex column">
    <label class="admin-label" for="header">Header :</label>
    <input
      v-model="about.header"
      id="header"
      type="text"
      class="admin-input w-full"
    />
    <label class="admin-label" for="par1">Paragraph 1 :</label>
    <textarea
      v-model="about.par1"
      id="par1"
      type="text"
      class="admin-textarea w-full"
    ></textarea>

    <label class="admin-label" for="par2">Paragraph 2 :</label>
    <textarea
      v-model="about.par2"
      id="par2"
      type="text"
      class="admin-textarea w-full"
    ></textarea>

    <label class="admin-label" for="par3">Paragraph 3 :</label>
    <textarea
      v-model="about.par3"
      id="par3"
      type="text"
      class="admin-textarea w-full"
    ></textarea>
    <div class="button-box flex a-center j-center">
      <button @click="save" class="admin-button save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      about: {
        header: "",
        par1: "",
        par2: "",
        par3: "",
      },
    };
  },
  created() {
    if (this.$store.getters.getAbout != null) {
      const post = this.$store.getters.getAbout[0];
      this.about = {
        header: post.header,
        par1: post.parOne,
        par2: post.parTwo,
        par3: post.parThree,
      };
    }
  },
  methods: {
    save() {
      if (this.about.header != "" && this.about.par1 != "") {
        this.$store.dispatch("updateAbout", { ...this.about });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.two-footer {
  background-color: rgba(237, 237, 237, 0.753);
  border-radius: 5px;
  input {
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 0.5rem;
  }
  .button-box {
    .save {
      background-color: rgb(191, 181, 0);
    }
  }
}
</style>