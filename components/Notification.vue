<template>
  <div
    :class="{ active: statusProp }"
    class="notification flex a-center j-center w-full h-full"
  >
    <div class="box flex column a-center j-around">
      <div class="check flex a-center j-center"><CheckSvg /></div>
      <p class="par1"><slot name="par1"></slot></p>
      <p class="par2"><slot name="par2"></slot></p>
      <button @click="status" class="button">Okey</button>
    </div>
  </div>
</template>

<script>
import CheckSvg from "@/components/icon/CheckSvg.vue";

export default {
  props: ["statusProp", "name"],
  components: {
    CheckSvg,
  },
  methods: {
    status() {
      this.$emit('status', false)
      if (this.name == "delete") {
        this.$store.dispatch("logout");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.218);
  opacity: 0;
  visibility: hidden;
  transition: all 1s;
  .box {
    width: 350px;
    height: 250px;
    background-color: white;
    padding: 1rem;

    .check {
      width: 80px;
      height: 80px;
      background-color: rgb(195, 245, 183);
      border-radius: 50%;
      margin-bottom: 1rem;
      svg {
        width: 35px;
        fill: green;
      }
    }
    .par1 {
      font-weight: bold;
      font-size: var(--mediumSize);
    }
    .button {
      width: 100%;
      height: 30px;
    }
  }
}
.active {
  opacity: 1;
  visibility: visible;
}
</style>