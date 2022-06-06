<template>
    <div>
        <Show :products="getFav">
            <h2
                class="border-b border-gray text-left pb-2 sm:text-4xl text-3xl text-gray-dark flex justify-between items-center">
                {{ getLang.pageTitle.myFavorites }}
                <button @click="openOffer" class="text-lg bg-blue p-2 text-white rounded-sm">
                    {{ getLang.button.getOffer }}
                </button>
            </h2>
        </Show>
        <OfferBox v-if="offer" @close="a => offer = a" />
        <Popup />
    </div>
</template>

<script>
import RemoveSvg from "@/components/icon/RemoveSvg";
import PositiveSvg from "./icon/PositiveSvg.vue";
import NegativeSvg from "./icon/NegativeSvg.vue";
export default {
    data() {
        return {
            offer: false
        }
    },
    components: {
        RemoveSvg,
        PositiveSvg,
        NegativeSvg
    },
    methods: {
        remove(item) {
            this.$store.dispatch("removeCart", item);
        },
        openOffer() {
            if (this.getFav.length > 0) {
                this.offer = true
            } else {
                this.$store.commit('setPopup', { type: 'empty', status: true })
                setTimeout(() => {
                    this.$store.commit('setPopup', { type: 'empty', status: false })
                }, 2000);
            }
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
        getFav() {
            return this.$store.getters.getFavorites
        }
    }
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