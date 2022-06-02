<template>
    <div>
        <Container>
            <Show v-for="(item, index) in getLang.title" :key="index" :type="index">
                {{ item }}
            </Show>
        </Container>
    </div>
</template>

<script>
export default {
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    },
}
</script>