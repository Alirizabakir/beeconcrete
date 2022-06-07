<template>
    <ul class="bg-gray-dark lg:w-1/4 lg:ml-4">
        <li v-for="(item, index) in getLang.userList" :key="index" class="bg-gray p-2 text-white text-lg">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        getLang() {
            return this.$store.getters.getLang
        }
    }
}
</script>