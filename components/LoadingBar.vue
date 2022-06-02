<template>
  <div :class="{active: getLoading}" class="loading-page flex items-center justify-center">
    <div class="loader">
      <client-only>
        <span v-for="(i, index) in 20" :key="index" :style="'--i:' + (index + 1) + ';'"></span>
        <img class="img" :src="require(`~/static/icon.png`)" alt="">
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBar',
  data: () => ({
  }),
  computed: {
    getLoading() {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    start() {
      this.$store.commit('setLoading', true)
    },
    finish() {
      this.$store.commit('setLoading', false)
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1000;

  opacity: 0;
  visibility: hidden;

  transition: all .3s;
  .loader {
    width: 120px;
    height: 120px;
    position: relative;
    padding: .5rem;

    .img {
      background-color: rgba(255, 255, 255, 0.982);
      border-radius: 50%;
      padding: 5px;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(calc(18deg * var(--i)));

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        transform: scale(0);

        background-color: #3fcb23;
        box-shadow: 0 0 1px #3ae0244a,
          0 0 3px #3ae0244a,
          0 0 5px #3ae0244a,
          0 0 7px #3ae0244a,
          0 0 9px #3ae0244a,
          0 0 11px #3ae0244a,
          0 0 13px #3ae0244a,
          0 0 15px #3ae0244a,
          0 0 17px #3ae0244a;
        animation: animate 1s linear infinite;
        animation-delay: calc(0.05s * var(--i));
      }

      @keyframes animate {
        0% {
          transform: scale(1);
        }

        80%,
        100% {
          transform: scale(0);
        }
      }
    }
  }
}
.active {
  opacity: 1;
  visibility: visible;
}
</style>