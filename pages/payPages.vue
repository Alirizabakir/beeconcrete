<template>
    <div class="content">
        <iframe :src="'https://www.paytr.com/odeme/guvenli/' + iframetoken" 
            scrolling="yes"></iframe>
    </div>
</template>

<script>
export default {
    setup() {
    },
    computed: {
        iframetoken() {
            return this.$store.getters.getIframeToken
        }
    },

}
</script>

<style lang="scss" scoped>
.content {
    iframe {
        width: 100%;
        height: 90vh;
    }
}
</style>