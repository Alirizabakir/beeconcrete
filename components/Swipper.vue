<template>
    <div class="swipper-box relative w-full py-2">
        <div class="swipper py-2">
            <div class="swip h-full px-2" v-for="(item, index) in products" :key="index"
                :style="`transform: translateX(${count * -100}%)`">
                <Card :secret="true" class="h-full" :product="item"></Card>
            </div>
        </div>
        <button class="absolute h-full top-0 left-0" @click="counT(false)">
            <div class="rounded-lg py-1 bg-green bg-opacity-95">
                <UpSvg class="w-8 h-8 transform -rotate-90" />
            </div>
        </button>
        <button class="absolute h-full top-0 right-0" @click="counT(true)">
            <div class="rounded-lg py-1 bg-green bg-opacity-95">
                <UpSvg class="w-8 h-8 transform rotate-90" />
            </div>
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
                if (screen.width > 1024 && this.count + 4 <= 19) {
                    this.count++
                } else if (screen.width < 1024 && this.count + 2 <= 19) {
                    this.count++
                }
            } else {
                if (screen.width > 1024 && this.count > 0) {
                    this.count--
                } else if (screen.width < 1024 && this.count > 0) {
                    this.count--
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
        grid-template-columns: repeat(20, minmax(50%, 1fr));
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;

        .swip {
            transition: all .2s linear;
            transform: translateX(0%);


        }
    }

    svg {
        fill: white;
    }
}

@media screen and (min-width: 768px) {
    .swipper-box {

        .swipper {
            display: grid;
            grid-template-columns: repeat(20, minmax(25%, 1fr));
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