<template>
  <div class="error content">
      <div class="section-one"></div>
      <div class="section-two flex a-center j-center">
          <h1>
              {{ error.statusCode }} Code - Page not found :(
          </h1>
      </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<style lang="scss" scoped>
.content{
    .section-two {
        background-color: transparent !important;
        h1 {
            margin: auto auto;
        }
    }
}
</style>
