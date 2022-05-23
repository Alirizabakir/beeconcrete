<template>
    <div class="hexagon md:mb-4 p-1 sm:mb-4 w-96 h-96 flex items-center justify-center">
        <div class="hexagon-content w-full h-full flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold mb-4">
                <slot name="header"></slot>
            </h3>
            <p>
                <slot name="content"></slot>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hexagon {
    // clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);


    .hexagon-content {
        background-image: url(~/static/bg/hex.jpg) !important;
        background-position-x: center;
        background-position-y: center;
        background-repeat: no-repeat;
        background-color: #F7F7F7 !important;
        // clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    }
}
</style>