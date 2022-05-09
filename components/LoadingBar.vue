<template>
  <div v-if="loading" class="loading-page flex a-center j-center">
    <div class="load flex a-center j-center">
      <div class="outer">
        <div class="inner flex a-center j-center">
          <img class="img" :src="require(`~/static/icon.png`)" alt="">
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#717171" />
            <stop offset="100%" stop-color="#1f4a18" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    num: 0,
  }),
  methods: {
    start() {
      this.loading = true;
      setInterval(() => {
        if (this.num < 100) {
          this.num += 10;
        } else {
          clearInterval();
          this.num = 0
        }
      }, 200);
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(173, 173, 173, 0.2);
  z-index: 1000;
  .load {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    background-color: #e3edf7;
    .outer {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      padding: 20px;
      box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
        -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
      .inner {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
          inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
          -0.5px -0.5px 0px rgba(255, 255, 255, 1),
          -0.5px -0.5px 0px rgba(0, 0, 0, 0.15),
          0px 12px 10px -10px rgba(255, 255, 255, 0.05);

        .img {
          width: 100px;
        }
      }
    }
    circle {
      fill: none;
      stroke: url(#GradientColor);
      stroke-width: 20px;
      stroke-dasharray: 472;
      stroke-dashoffset: 472;
      animation: anim 2s linear forwards;
    }
    svg {
      position: absolute;
      top: 40;
      left: 40;
    }
  }
}

@keyframes anim {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>