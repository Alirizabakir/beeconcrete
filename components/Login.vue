<template>
    <div id="firebaseui-auth-container">
    </div>
</template>

<script>
export default {

    computed: {
        currentUser() {
            return this.$store.state.userF
        }
    },
    mounted() {
        const firebaseui = require('firebaseui')
        require('firebaseui/dist/firebaseui.css')

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth)
        const config = {
            signInSuccessUrl: '/',
            signInOptions: [
                this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID,
                this.$fireModule.auth.TwitterAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult() {
                    window.location.href = 'http://www.beeconcrete.com.tr/user'
                }
            }
        }
        ui.start('#firebaseui-auth-container', config)
    },
}
</script>

<style lang="scss">
#firebaseui-auth-container {
    max-width: 100% !important;
    min-width: 100% !important;
    width: 100% !important;

    .firebaseui-container {
        .firebaseui-list-item {
            .firebaseui-idp-button {
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 100% !important;
                min-width: 100% !important;
                width: 100% !important;
            }
        }

    }

}
</style>