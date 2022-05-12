<template>
    <div>
        Report Page
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispacth('report')
    },
}
</script>