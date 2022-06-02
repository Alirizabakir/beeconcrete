<template>
    <div>
        <div :class="{ active: favPopup }"
            class="popup border border-gray-light rounded-sm shadow-show flex flex-col justify-center items-center fixed z-50 bg-white p-4">
            <div class="text-lg p-2 mb-2">
                <p class="font-bold text-center">{{ getLang.popup.addFav }}</p>
                <p class="text-center">{{ getLang.popup.goodShopping }}</p>
            </div>
            <button class="bg-red text-white px-2 py-1 rounded-sm" @click="close('addFav')">{{ getLang.button.ok
            }}</button>
        </div>
        <div :class="{ active: popup }"
            class="popup border border-gray-light rounded-sm shadow-show flex flex-col justify-center items-center fixed z-50 bg-white p-4">
            <div class="text-lg p-2 mb-2">
                <p class="font-bold text-center">{{ getLang.popup.addCart }}</p>
                <p class="text-center">{{ getLang.popup.goodShopping }}</p>
            </div>
            <button class="bg-red text-white px-2 py-1 rounded-sm" @click="close('addCart')">{{ getLang.button.ok
            }}</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        popup() {
            return this.$store.getters.getPopup
        },
        favPopup() {
            return this.$store.getters.getFavPopup
        },
        getLang() {
            return this.$store.getters.getLang
        }
    },
    methods: {
        close(type) {
            return this.$store.commit('setPopup', { type, status: false })
        }
    },
}
</script>

<style lang="scss" scoped>
.popup {
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
    top: 50%;
    /* position the top  edge of the element at the middle of the parent */
    left: 50%;
    /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    width: 300px;
}

.active {
    opacity: 1;
    visibility: visible;
}
</style>