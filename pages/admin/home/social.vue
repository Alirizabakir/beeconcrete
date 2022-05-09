<template>
  <ul class="two-footer">
    <li
      class="item w-full flex column"
      v-for="(item, index) in getSocial"
      :key="index"
    >
      <div class="header w-full flex a-center j-between">
        <div class="text flex a-center">
          <img :src="require('~/static/icon.png')" alt="" />
          <h3>beeconcretedesign</h3>
        </div>
        <span @click="delSocial(item)">
          <remove-svg />
        </span>
      </div>
      <a :href="item.link" target="_blank">
        <img class="img w-full" :src="'../../instagram/' + item.src.a" alt="" />
        <div class="description w-full">
          <h3 class="w-full">beeconcretedesign</h3>
          <p class="w-full">{{ item.name }}</p>
          <p class="w-full">{{ item.description }}</p>
        </div>
      </a>
    </li>
    <SocialForm
      v-show="getDisplayForm"
      :post="post"
      @post="(a) => (post = a)"
    />
  </ul>
</template>
<script>
import RemoveSvg from "~/components/icon/RemoveSvg.vue";
export default {
  components: { RemoveSvg },
  name: "Social",
  data() {
    return {
      post: null,
    };
  },
  computed: {
    getSocial() {
      return this.$store.getters.getSocial;
    },
    getDisplayForm() {
      return this.$store.getters.getDisplayForm;
    },
  },
  methods: {
    delSocial(item) {
      this.$store.dispatch('delSocial', item._id )
    },
  },
};
</script>

<style lang="scss" scoped>
.two-footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  grid-gap: 2rem;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  background-color: rgba(237, 237, 237, 0.753);
  border-radius: 5px;

  .item {
    width: 100%;
    background-color: white;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 2px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.255);
    .header {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid rgb(221, 221, 221);
      img {
        width: 30px;
        margin-right: 0.5rem;
      }
      svg {
        width: 17px;
        fill: rgb(150, 150, 150);
      }
    }
    .img {
      width: 100%;
      margin-bottom: 1rem;
    }
    .description {
      padding: 0 0.5rem;
      flex: 1;
      h3 {
        font-size: var(--normalSize);
        margin-bottom: 1rem;
      }
      p {
        padding: 0 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>