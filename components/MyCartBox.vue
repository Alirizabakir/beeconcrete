<template>
    <div>
        <p v-show="getCart.length < 1" class="text-2xl">{{getLang.global.emptyCart}}</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="shadow-show flex flex-col" v-for="(item, index) in getCart" :key="index">
            <div class="flex items-center justify-between border border-gray-light rounded-t-sm p-2">
                <h2>{{ item.name }}</h2>
                <span class="text-xl">{{ item.totalPrice }} TL</span>
            </div>
            <div class="flex flex-1 p-2 border border-gray-light border-t-0 rounded-b-sm">
                <img class="w-1/2" :src="require(`@/static/small/${item.src}`)" alt="">
                <div class="flex flex-1 flex-col justify-between p-2">
                    <div>
                        <div class="px-2 py-1 border border-gray-light">{{ item.selectColor }}</div>
                        <div class="px-2 py-1 border border-gray-light">{{ item.selectRub }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-center bg-green rounded-full shadow-show">
                            <span @click="changeCount(false, item)">
                                <NegativeSvg class="fill rounded-full w-5 bg-gray-dark p-1 cursor-pointer" />
                            </span>
                            <div class="text-md flex items-center text-white justify-center w-5 h5">
                                {{ item.count }}</div>
                            <span class="rounded-full" @click="changeCount(true, item)">
                                <PositiveSvg class="fill rounded-full w-5 bg-gray-dark p-1 cursor-pointer" />
                            </span>
                        </div>
                        <span class="cursor-pointer" @click="remove(item)">
                            <RemoveSvg class="del w-4 ml-auto" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import RemoveSvg from "@/components/icon/RemoveSvg";
import PositiveSvg from "./icon/PositiveSvg.vue";
import NegativeSvg from "./icon/NegativeSvg.vue";
export default {
    components: {
        RemoveSvg,
        PositiveSvg,
        NegativeSvg
    },
  
    computed: {
        getCart() {
            return this.$store.getters.getCart
        },
        getLang() {
            return this.$store.getters.getLang
        },
    },
    methods: {
        changeCount(status, item) {
            if (!status) {
                if (item.count > 1) {
                    this.$store.dispatch("changeCount", {
                        newCount: item.count - 1,
                        ...item,
                    });
                } else {
                    this.$store.dispatch("removeCart", item);
                }
            } else {
                this.$store.dispatch("changeCount", {
                    newCount: item.count + 1,
                    ...item,
                });
            }
        },
        remove(item) {
            this.$store.dispatch("removeCart", item);
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    .fill {
        fill: white;
    }
    .del {
        fill: rgb(6, 67, 6)
    }
}
</style>