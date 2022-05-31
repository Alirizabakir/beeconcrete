<template>
    <div>
        <Nuxt />
    </div>
</template>
<script>
export default {
   middleware: ['admin-auth'],

}
</script>
<style lang="scss">
</style>