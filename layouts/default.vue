<template>
    <div class="container">
        <MasterHeader />
        <Nuxt />
    </div>
</template>
<script>
export default {
  middleware: ["session-control"],
}
</script>
<style lang="scss">
</style>