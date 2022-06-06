<template>
    <div>
        <Container>
            <Show v-for="(item, index) in getLang.title" :key="index" :type="index">
                <h2 class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark">
                    {{ item }}
                </h2>
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