<template>
    <div>
        <Container>
            <div class="flex justify-between border-b border-gray-dark pt-20 pb-2">
                <h1 class="text-3xl text-gray-dark">{{ getLang.pageTitle.myProfile }}</h1>
                <span @click="signOut"
                    class="bg-red p-2 text-white cursor-pointer rounded-sm">{{ getLang.button.signOut }}</span>
            </div>
            <div class="flex justify-between relative">
                <MyProfile />
                <UserList />
            </div>
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
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    }
}
</script>