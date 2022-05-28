<template>
    <div class="icon flex items-center">
        <div class="cont">
            <div @click="favItem" :class="{ heartActive: active }" class="heart"></div>
        </div>
        <div class="numb pl-2">{{ fav }}</div>
    </div>
</template>


<script>
export default {
    props: ["product"],
    data() {
        return {
            active: false,
            fav: null,
            toChange: null
        };
    },
    created() {
        this.fav = this.product.fav;
        if (this.$store.getters.getFavorites) {
            this.$store.getters.getFavorites.filter((a) => {
                if (a._id == this.product._id) {
                    this.active = true;
                }
            });
        }
        this.$store.getters.getProducts.filter((a) => {
                if (a._id == this.product._id) {
                    this.toChange = a;
                }
            });
    },
    methods: {
        favItem() {
            if (this.active) {
                this.$store.dispatch("favItem", {
                    status: false,
                    ...this.toChange,
                });
                this.active = false;
                this.fav -= 1;
            } else {
                this.$store.dispatch("favItem", {
                    status: true,
                    ...this.toChange,
                });
                this.active = true;
                this.fav += 1;
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.icon {
    .cont {
        position: relative;
        cursor: pointer;
        height: 30px;
        width: 30px;

        .heart {
            position: absolute;
            background: url("~/static/img.png") no-repeat;
            background-position: left;
            background-size: 2900%;
            height: 50px;
            width: 70px;
            top: calc(50% - 25px);
            left: calc(50% - 35px);
        }
    }

    .heart.heartActive {
        animation: animate 0.8s steps(28) 1;
        background-position: right;
    }

    @keyframes animate {
        0% {
            background-position: left;
        }

        100% {
            background-position: right;
        }
    }
}
</style>