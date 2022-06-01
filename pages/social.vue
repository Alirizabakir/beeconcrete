<template>
    <div>
        <Container>
            <SocialBox>
                {{getLang.pageTitle.social}}
            </SocialBox>
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