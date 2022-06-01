<template>
    <div class="order-ok">
        <Container class="container">
            <h2 class="text-3xl text-gray-dark border-b border-gray-dark pt-20 mb-20">
                {{ getLang.pageTitle.orderFailed.header }}
            </h2>
            <div class="info md:w-1/2 w-full m-auto shadow-show flex flex-col p-8 items-center">
                <PlusSvg class="check w-24 h-24 mb-4 bg-gray-light p-4 rounded-full transform rotate-45" />
                <p class="text-xl">
                    {{ getLang.pageTitle.orderFailed.title }}
                </p>
                <br>
                <p class="text-lg flex flex-col">
                    {{ getLang.pageTitle.orderFailed.redirect }} {{ count }}
                    <a href="https://www.beeconcrete.com.tr/my-cart/" class="flex items-center justify-center">
                        <UpSvg class="up w-4 h-4 transform rotate-90 pr-1" /> https://www.beeconcrete.com.tr/my-cart/
                        <UpSvg class="up w-4 h-4 transform -rotate-90 pl-1" />
                    </a>
                </p>
            </div>
        </Container>
    </div>
</template>

<script>
import PlusSvg from "@/components/icon/PlusSvg";
import UpSvg from "@/components/icon/UpSvg";
export default {
    components: {
        PlusSvg,
        UpSvg
    },
    data() {
        return {
            count: 10
        }
    },
    created() {
        const countdown = setInterval(() => {
            this.count -= 1
            if (this.count == 0) {
                clearInterval(countdown)
                if (process.client) {
                    window.location.href = "https://www.beeconcrete.com.tr/my-cart";
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
                fill: rgb(159, 18, 18);
            }

            .up {}
        }
    }
}
</style>