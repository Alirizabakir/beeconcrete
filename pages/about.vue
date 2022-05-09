<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item"><span class="border-r">About Us</span></li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        About Us
      </div>
      <div class="two-footer">
        <h1>{{ getAbout.header }}</h1>
        <p>
          {{ getAbout.parOne }}
        </p>
        <p>
          {{ getAbout.parTwo }}
        </p>
        <p>
          {{ getAbout.parThree }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  computed: {
    getAbout() {
      return this.$store.getters.getAbout[0];
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      &::-webkit-scrollbar {
        display: none;
      }
      h1 {
        width: 100%;
        text-align: start;
        margin-bottom: 2rem;
        padding: 0 2rem;
      }

      p {
        text-align: start;
        margin-bottom: 0.5rem;
        padding: 0 3rem;
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
        h1 {
          width: 100%;
          text-align: start;
          margin: 2rem 0;
          padding: 0 2rem;
        }

        p {
          text-align: start;
          margin-bottom: 0.5rem;
          padding: 0 3rem;
        }
      }
    }
  }
}
</style>