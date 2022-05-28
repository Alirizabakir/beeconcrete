<template>
    <div class="hexagon m-4 relative md:mb-4 p-1 sm:mb-4 w-96 h-96 flex items-center justify-center">
        <div class="hexagon-content w-full h-full flex flex-col items-center justify-center">
            <h3 class="text-4xl font-bold mb-4">
                <slot name="header"></slot>
            </h3>
            <p class="text-lg font-bold">
                <slot name="content"></slot>
            </p>
        </div>
        <div :style="{ backgroundImage: `url(${require(`@/static/${bgSrc}.jpg`)})` }" class="bg"></div>
    </div>
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {
            bgSrc: this.src
        }
    },
}
</script>
<style lang="scss" scoped>
.hexagon {
    // clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: relative;
    filter: drop-shadow(5px 5px 1px rgba(119, 119, 119, 0.5));
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    padding: 1rem;

    .hexagon-content {
        // clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
        background-color: #c1c1c1;

    }

    .bg {
        width: 300px;
        height: 300px;
        position: absolute;
        opacity: .2;
        z-index: 0;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        background-position-x: center;
        background-position-y: center;
        background-repeat: no-repeat;
        background-size: cover;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

    }
}
</style>