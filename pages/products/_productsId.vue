<template>
    <Container class="product">
        <div class="flex justify-between mt-20 mb-10  border-b font-bold text-gray-dark border-gray-dark ">
            <h1 id="pots" class="text-3xl ">{{ product.name
            }} <span class="text-sm">( Stok : {{ product.stock }} )</span></h1>
            <p class="text-xl font-bold text-right p-2">
                {{ product.newPrice }} TL
            </p>
        </div>
        <div class="content flex lg:flex-row flex-col">
            <div class="image-box flex w-full lg:w-1/2 p-2">
                <div class="image-router flex flex-col items-center flex-1 mr-4">
                    <div class="border border-gray p-2 mb-2">
                        <img @click="isActive = true" class="" :src="require(`@/static/resize/${product.src}`)">
                    </div>
                    <div class="border border-gray p-2 mb-2">
                        <img @click="isActive = false" class="" :src="require(`@/static/size/${product.src}`)">
                    </div>
                </div>
                <div class="image-show flex w-3/4">
                    <div :class="{'fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2 bg-gray bg-opacity-50': bigImage}" v-if="isActive" class="img-box">
                        <img @click="bigImage = !bigImage" class="max-h-full max-w-full" :src="require(`@/static/resize/${product.src}`)">
                    </div>
                    <div :class="{'fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2 bg-gray bg-opacity-50': bigImage}" v-else class="img-box">
                        <img @click="bigImage = !bigImage" class="max-h-full max-w-full" :src="require(`@/static/size/${product.src}`)">
                    </div>
                </div>
            </div>
            <div class="flex-1 p-2">
                <div class="flex items-center border-b border-gray-light">
                    <div class="p-2 flex-1 text-center border-r border-gray-light font-bold text-lg">
                        Ürün Özellikleri
                    </div>
                    <div class="p-2 flex-1 text-center font-bold  text-lg">
                        Ürün Detayları
                    </div>
                </div>
                <div class="mt-4">
                    <ul class="p-2">
                        <li v-show="size > 0" class="flex mb-2 justify-between" v-for="(size, sIndex) in product.sizes"
                            :key="sIndex">
                            <span>{{ sIndex }} :</span><span>{{ size }} cm</span>
                        </li>
                        <li class="mb-2">
                            <div class="p-2 mb-2 font-bold text-lg">Choose color ?</div>
                            <span @click="selectColor = cIndex"
                                :class="{ 'bg-white': cIndex == 'white', 'bg-gray text-white': cIndex == 'gray', 'bg-gray-dark text-white': cIndex == 'darkGray', 'select': selectColor == cIndex }"
                                class="p-2 mr-2 cursor-pointer border border-green rounded-sm"
                                v-for="(color, cIndex) in product.color" :key="cIndex">
                                {{ cIndex.toUpperCase() }}
                            </span>
                        </li>
                        <li class="mb-2">
                            <div class="p-2 mb-2 font-bold text-lg">Choose rub ?</div>
                            <span @click="selectRub = rIndex" :class="{
                                'bg-white': rIndex == 'smooth', 'bg-gray text-white': rIndex == 'rough', 'bg-gray-dark text-white': rIndex == 'roughter',
                                'select': selectRub == rIndex
                            }" class="p-2 mr-2 cursor-pointer border border-green rounded-sm"
                                v-for="(color, rIndex) in product.rub" :key="rIndex">
                                {{ rIndex.toUpperCase() }}
                            </span>
                        </li>

                        <li class="flex justify-end mt-8">
                            <button @click="addToCart(product)"
                                class="w-full sm:w-auto px-4 hover:bg-orange py-1 self-end bg-green text-white">Add To
                                Cart</button>
                        </li>
                    </ul>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    </Container>
</template>

<script>
export default {
    data() {
        return {
            scroll: false,
            isActive: true,
            bigImage: false,
            selectColor: '',
            selectRub: '',
        }
    },

    computed: {
        product() {
            return this.$store.getters.getProducts.find(a => a._id == this.$route.params.productsId)
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 700) {
                this.scroll = true
            } else {
                this.scroll = false
            }
        },
        addToCart(i) {
            this.$store.dispatch("addToCart", {
                selectRub: this.selectRub,
                selectColor: this.selectColor,
                count: 1,
                ...i,
            });
        }
    },
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

}
</script>

<style lang="scss" scoped>
.product {
    .select {
        background-color: rgb(0, 166, 255);
    }
  
}
</style>