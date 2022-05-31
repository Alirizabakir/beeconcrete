<template>
    <div>
        <Show :products="'getFavorites'">
            My Favorites
        </Show>

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
    methods: {
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