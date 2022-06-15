<template>
    <div class="swipper-box relative w-full py-2">
        <div class="swipper py-2">
            <div class="swip h-full px-2" v-for="(item, index) in products" :key="index">
                <Card :secret="true" class="h-full" :product="item"></Card>
            </div>
        </div>
        <button class="absolute -left-0 lg:-left-10" @click="counT(false)">
            <UpSvg class="lg:w-10 w-8 h-8 lg:h-10 transform -rotate-90" />
        </button>
        <button class="absolute -right-0 lg:-right-10" @click="counT(true)">
            <UpSvg class="lg:w-10 w-8 h-8 lg:h-10 transform rotate-90" />
        </button>
    </div>
</template>

<script>
import UpSvg from '@/components/icon/UpSvg'
export default {
    props: ['products'],
    components: {
        UpSvg
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        counT(status) {
            if (status) {
                if (this.count < 50) {
                    this.count += 2
                    this.$emit('swip', this.count)
                }
            } else {
                if (this.count > 0) {
                    this.count -= 2
                    this.$emit('swip', this.count)
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.swipper-box {

    .swipper {
        display: grid;
        grid-template-columns: repeat(2, minmax(50%, 1fr));
        align-items: center;
        justify-content: flex-start;

        .swip {}
    }

    button {
        top: 50%;
        transform: translate(0, -50%);
        background-color: rgba(20, 79, 12, 0.775);
        border-radius: 50%;
        svg {
            fill: rgb(255, 255, 255);
        }
    }
}

@media screen and (min-width: 768px) {
    .swipper-box {

        .swipper {
            display: grid;
            grid-template-columns: repeat(4, minmax(25%, 1fr));
            align-items: center;
            justify-content: flex-start;

            .swip {
                transition: all .2s linear;
                transform: translateX(0%);
            }
        }

        svg {
            fill: white;
        }

    }

}
</style>