<template>
    <div :class="{ hamburger: hamburger }" class="w-56 -right-60 menu">
        <div class="ham cursor-pointer lg:hidden" href="#">
            <span v-show="!hamburger" @click="hamburger = true"
                class="bur text-white open w-18 text-left p-2 bg-blue">COLLECTIONS</span>
            <span v-show="hamburger" @click="hamburger = false"
                class="bur text-white close w-18 text-right p-2 bg-pink">CLOSE</span>
        </div>
        <div class="main list-box">
            <span class="cursor-pointer main-list" href="#">POTS</span>
            <div class="sub flex flex-col">
                <a @click="hamburger = false" class="sub-list" href="#bee">Bee Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#hive">Hive Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#honeycomb">HoneyComb Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#cube">Cube Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#vase">Vase Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#long">Long Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#smallseries">Small Series</a>
            </div>
        </div>
        <div class="main list-box">
            <span class="cursor-pointer main-list" href="#">FURNITURE</span>
            <div class="sub flex flex-col">
                <a @click="hamburger = false" class="sub-list" href="#column">Column Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#table">Table Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#stool">Stool Collection</a>
                <a @click="hamburger = false" class="sub-list" href="#ball">Ball Collection</a>
            </div>
        </div>
        <div class="list-box">
            <a @click="hamburger = false" class="main-list" href="#covering">COVERING</a>
        </div>
        <div class="list-box">
            <a @click="hamburger = false" class="main-list" href="#oven">OVEN</a>
        </div>
        <div class="list-box">
            <a @click="hamburger = false" class="main-list" href="#fiber">FIBER</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hamburger: false,
            isActive: ''
        }
    },
}
</script>
<style lang="scss" scoped>
.menu {
    position: fixed;
    transition: all .3s;
    top: 0px;
    z-index: 10;
    .ham {
        position: relative;

        .bur {
            position: absolute;
            top: 0;
        }

        .open {
            right: 100%;
        }

        .close {
            right: 100%;
        }

    }
}

.hamburger {
    right: -15px;
}

@media screen and (min-width: 1024px) {
    .menu {
        position: -webkit-sticky;
        /* Safari */
        position: sticky;
        top: 0px;
    }
}
</style>