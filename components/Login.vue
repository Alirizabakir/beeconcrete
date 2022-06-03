<template>
    <div id="firebaseui-auth-container" class="mt-20">
    </div>
</template>

<script>
import axios from 'axios'
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
                signInSuccessWithAuthResult(user) {
                    axios.post('https://www.beeconcrete.com.tr/api/login', { user: user.additionalUserInfo.profile })
                        .then(response => {
                         window.location.href = 'https://www.beeconcrete.com.tr/my-profile'
                        })
                    // axios.post('http://localhost:3000/api/login', { user: user.additionalUserInfo.profile })
                    //     .then(response => {
                    //         window.location.href = 'http://localhost:3000/my-profile'
                    //     })
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