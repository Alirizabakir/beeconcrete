<template>
  <div class="content">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style lang="scss" scoped>
.content {
  padding: 5vh 0;
}
</style>