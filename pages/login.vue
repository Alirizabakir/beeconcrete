<template>
    <div>
        <Container>
            <h1 id="pots" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">{{getLang.pageTitle.login}}</h1>
            <Login/>
        </Container>
    </div>
</template>

<script>
export default {
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>