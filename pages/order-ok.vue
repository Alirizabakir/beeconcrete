<template>
    <div class="order-ok">
        <Container class="container">
            <h2 class="text-3xl text-gray-dark border-b border-gray-dark pt-20 mb-20">
                {{ getLang.pageTitle.orderOk.header }}
            </h2>
            <div class="info md:w-1/2 w-full m-auto shadow-show flex flex-col p-8 items-center">
                <CheckSvg class="check w-24 h-24 m-4 bg-gray-light p-4 rounded-full" />
                <p class="text-xl">
                    {{ getLang.pageTitle.orderOk.title }}
                </p>
                <br>
                <p class="text-lg flex flex-col">
                    {{ getLang.pageTitle.orderOk.redirect }} {{ count }}
                    <a href="https://www.beeconcrete.com.tr/" class="flex items-center justify-center">
                        <UpSvg class="up w-4 h-4 transform rotate-90 pr-1" /> https://www.beeconcrete.com.tr/
                        <UpSvg class="up w-4 h-4 transform -rotate-90 pl-1" />
                    </a>
                </p>
            </div>
        </Container>
    </div>
</template>

<script>
import CheckSvg from "@/components/icon/CheckSvg";
import UpSvg from "@/components/icon/UpSvg";
export default {
    components: {
        CheckSvg,
        UpSvg
    },
    data() {
        return {
            count: 10
        }
    },
    created() {
        this.$store.dispatch('emptyCart', [])
        const countdown = setInterval(() => {
            this.count -= 1
            if (this.count == 0) {
                clearInterval(countdown)
                if (process.client) {
                    window.location.href = "https://www.beeconcrete.com.tr/";
                }
            }
        }, 1000);
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        }
    }
}
</script>

<style lang="scss" scoped>
.order-ok {
    .container {
        .info {
            .check {
                fill: rgb(24, 93, 14);
            }

            .up {}
        }
    }
}
</style>