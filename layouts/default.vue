<template>
  <div class="home w-full">
    <SubHeader />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  middleware: ["session-control"],
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #F8F8F8;
}
</style>