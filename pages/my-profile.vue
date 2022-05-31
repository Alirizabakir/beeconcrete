<template>
    <div>
        <Slider />
        <Container>
            <div class="flex justify-between border-b border-gray-dark pt-20 pb-2">
                <h1 class="text-3xl text-gray-dark">MY PROFILE</h1>
                <span @click="signOut" class="bg-pink p-2 text-white cursor-pointer rounded-sm">Sign Out</span>
            </div>
            <MyProfile />
        </Container>
    </div>
</template>

<script>
export default {
    middleware: ["auth"],
    methods: {
        signOut() {
            this.$fire.auth.signOut()
            this.$store.commit('clearAuthKey')
            this.$router.push('/')
        },
    },
}
</script>