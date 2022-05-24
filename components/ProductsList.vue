<template>
    <div :class="{ hamburger: hamburger }" class="menu bg-gray-light w-full lg:bg-opacity-0 h-screen lg:h-auto top-20 z-10">
        <Container class="con flex flex-col lg:grid lg:grid-cols-4">
            <div @mouseenter="isActive = 'pot'" @mouseleave="isActive = ''" class="main list-box">
                <span class="ham cursor-pointer main-list" href="#">POTS
                    <span @click="hamburger = true" class="bur text-white open w-18 text-left p-2 bg-blue lg:hidden">COLLECTIONS</span>
                    <span @click="hamburger = false"
                        class="bur text-white close w-18 text-right p-2 bg-pink lg:hidden">CLOSE</span>
                </span>
                <div :class="{ active: isActive == 'pot' }" class="sub flex flex-col">
                    <a @click="hamburger = false" class="sub-list" href="#pots">Bee Collection</a>
                    <a @click="hamburger = false" class="sub-list" href="#hive">Hive Collection</a>
                    <a @click="hamburger = false" class="sub-list" href="#honeycomb">HoneyComb Collection</a>
                    <a @click="hamburger = false" class="sub-list" href="#queen">Queen Collection</a>
                </div>
            </div>
            <div @mouseenter="isActive = 'furniture'" @mouseleave="isActive = ''" class="main list-box">
                <span class="cursor-pointer main-list" href="#">FURNITURE</span>
                <div :class="{ active: isActive == 'furniture' }" class="sub flex flex-col">
                    <a @click="hamburger = false" class="sub-list" href="#furniture">Column Collection</a>
                    <a @click="hamburger = false" class="sub-list" href="#table">Table Collection</a>
                </div>
            </div>
            <div class="list-box">
                <a @click="hamburger = false" class="main-list" href="#covering">COVERING</a>
            </div>
            <div class="list-box">
                <a @click="hamburger = false" class="main-list" href="#oven">OVEN</a>
            </div>
        </Container>
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
    right: -100%;
    transition: all .3s;

    .con {
        padding: 0;
        width: 100%;
        .main {
            position: relative;

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
                    left: 0;
                }

            }

            .sub {
                position: static;
                top: 100%;
                left: 0;
                opacity: 1;
                visibility: visible;
                z-index: 10;
            }

            .active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}

.hamburger {
    right: calc(0% - 57px);
}

@media screen and (min-width: 1024px) {
    .menu {
        position: static;

        .con {
            width: 80%;
            .main {
                position: relative;

                .sub {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    opacity: 0;
                    visibility: hidden;
                    z-index: 10;
                }

                .active {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
}
</style>