<template>
  <div class="full flex a-center j-center">
    <div class="SocialForm">
      <SimpleUpload
        :imgInvalid="imgInvalid"
        :src="social.src"
        @file="(a) => (social.file = a)"
      />
      <div class="info-box flex column j-between">
        <label class="admin-label" for="name">Name :</label>
        <input
          class="admin-input"
          type="text"
          v-model="social.name"
          name="name"
          id="name"
        />
        <label class="admin-label" for="link">Link :</label>
        <input
          class="admin-input"
          type="text"
          v-model="social.link"
          name="link"
          id="link"
        />
        <label class="admin-label" for="imgName">Image Name :</label>
        <input
          class="admin-input"
          type="text"
          v-model="social.imgName"
          name="imgName"
          id="imgName"
        />
        <label class="admin-label" for="description">Description :</label>
        <textarea
        class="admin-textarea"
          type="description"
          v-model="social.description"
          name="description"
          id="description"
        ></textarea>
        <div class="button-box flex a-center j-center">
          <button
            v-if="isMethods"
            @click="add"
            type="submit"
            class="admin-button add"
          >
            Add
          </button>
          <button v-else @click="save" class="admin-button save">Save</button>
          <button @click="cancel" class="admin-button cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      nameInvalid: false,
      descriptionInvalid: false,
      imgInvalid: false,
      isMethods: false,

      social: {
        file: "",
        imgName: '',
        name: "",
        src: {
          a: "default_image.png",
        },
        description: "",
        link: "",
      },
    };
  },
  created() {
    if (this.post != null) {
      this.social = {
        name: post.name,
        src: { a: post.src.a },
        description: post.description,
      };
    }
    // Header Change
    this.isMethods = this.post ? false : true;
  },
  methods: {
    add() {
      if (this.social.name != null) {
        this.nameInvalid = false;
        if (this.social.description != null) {
          this.descriptionInvalid = false;
          if (this.social.file != "") {
            this.imgInvalid = false;
            this.$store.dispatch("addSocial", { ...this.social });
            this.$store.commit("displayForm", false);
          } else {
            this.imgInvalid = true;
          }
        } else {
          this.descriptionInvalid = true;
        }
      } else {
        this.nameInvalid = true;
      }
    },
    save() {
      console.log(this.product);
      this.$store.dispatch("updateProduct", { ...this.product });
      this.$store.commit("displayForm", false);
    },
    cancel() {
      this.$store.commit("displayForm", false);
      this.$emit("postNull", null);
    },
  },
};
</script>

<style lang="scss" scoped>
.full {
  position: absolute;
  inset: 0;
  background-color: rgba(193, 193, 193, 0.5);

  .SocialForm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(207, 207, 207);
    grid-gap: 1rem;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4), -5px 5px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid grey;
    .info-box {
      padding: 2rem 1rem 0 1rem;
      input {
        height: 40px;
        width: 100%;
        margin-bottom: 1rem;
      }
      label {
        margin-bottom: 0.5rem;
      }
      .button-box {
        .add {
          background-color: rgb(2, 88, 2);
        }
        .save {
          background-color: rgb(191, 181, 0);
        }
        .cancel {
          background-color: rgb(151, 2, 2);
        }
      }
    }
  }
  .invalid {
    background-color: rgba(244, 0, 0, 0.5);
  }
}
</style>