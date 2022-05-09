<template>
  <div class="content">
    <Slider />
  </div>
</template>
<script>
export default {
  name: "BeeConcrete",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2rem 0 0 0;
  width: 80%;
}
@media only screen and (max-width: 1024px) {
  .content {
    width: 100%;
  }
}
</style>