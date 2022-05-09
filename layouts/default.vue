<template>
    <div class="container">
        <MasterHeader />
        <Nuxt />
    </div>
</template>
<script>
export default {
    middleware: ['user-control']
}
</script>
<style lang="scss">
</style>