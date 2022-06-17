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
            <div class="image-box flex lg:flex-row flex-col w-full lg:w-2/3 p-2">

                <div class="image-show flex">
                    <div :class="{ 'fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2 bg-gray bg-opacity-50': bigImage }"
                        v-if="isActive" class="img-box">
                        <img @click="bigImage = !bigImage" class="max-h-full cursor-pointer max-w-full"
                            :src="require(`@/static/resize/${product.src}`)">
                    </div>
                    <div :class="{ 'fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2 bg-gray bg-opacity-50': bigImage }"
                        v-else class="img-box">
                        <img @click="bigImage = !bigImage" class="max-h-full cursor-pointer max-w-full"
                            :src="require(`@/static/resize_two/${product.src}`)">
                    </div>
                </div>
                <div class="image-router flex flex-row lg:flex-col items-center justify-center lg:justify-start">
                    <div class="border w-24 border-gray p-2 m-2">
                        <img @click="isActive = true" class="cursor-pointer" :src="require(`@/static/resize/${product.src}`)">
                    </div>
                    <div class="border w-24 border-gray p-2 m-2">
                        <img @click="isActive = false" class="cursor-pointer" :src="require(`@/static/resize_two/${product.src}`)">
                    </div>
                </div>
            </div>
            <div class="flex-1 p-2 h-full">
                <div class="flex items-center border-b border-gray-light">
                    <div @click="info = false" class="p-2 cursor-pointer flex-1 text-center border-r border-gray-light font-bold text-lg">
                        Ürün Özellikleri
                    </div>
                    <div @click="info = true" class="p-2 cursor-pointer flex-1 text-center font-bold  text-lg">
                        Ürün Detayları
                    </div>
                </div>
                <div class="mt-4">
                    <ul v-show="!info" class="p-2">
                        <li v-show="size > 0" class="flex mb-2 justify-between" v-for="(size, sIndex) in product.sizes"
                            :key="sIndex">
                            <span>{{ sIndex.toUpperCase() }} :</span><span class="font-bold">{{ size }} cm</span>
                        </li>
                        <li class="mb-2 flex lg:flex-col flex-row justify-between">
                            <div>
                                <div class="p-2 font-bold text-lg">Choose color ?</div>
                                <div class="flex lg:flex-row flex-col">
                                    <span @click="selectColor = cIndex" :class="{ 'select': selectColor == cIndex }"
                                        class="w-28 inline-block p-1 text-center m-2 cursor-pointer border border-green rounded-sm"
                                        v-for="(color, cIndex) in product.color" :key="cIndex">
                                        {{ cIndex.toUpperCase() }}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div class="p-2 font-bold text-lg">Choose rub ?</div>
                                <div class="flex lg:flex-row flex-col">
                                    <span @click="selectRub = rIndex" :class="{ 'select': selectRub == rIndex }"
                                        class="w-28 inline-block p-1 text-center m-2 cursor-pointer border border-green rounded-sm"
                                        v-for="(color, rIndex) in product.rub" :key="rIndex">
                                        {{ rIndex.toUpperCase() }}
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="flex justify-end mt-8">
                            <button @click="addToCart(product)"
                                class="w-full sm:w-auto p-4 hover:bg-orange self-end bg-green text-white">Add To
                                Cart</button>
                        </li>
                    </ul>
                    <ul v-show="info" class="list-disc p-4">
                        <li>
                            Ürünlerimiz Fiber Beton'dan döküm yöntemi ile imal edilmiştir.
                        </li>
                        <li>
                            Fiyatlarımıza KDV dahildir.
                        </li>
                        <li>
                            Ürün hacim ve ağırlık değerleri yaklaşık olarak vermektedir.
                        </li>
                        <li>
                            Ürün teslimi 21-30 iş günüdür.
                        </li>
                        <li>
                            Kargo bedeli fiyatlarıma dahil değildir.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <Popup>
            <p class="font-bold text-center">Ürün sepetinize eklendi !</p>
            <p class="text-center">İyi alışverişler dileriz.</p>
        </Popup>
    </Container>
</template>

<script>
export default {
    data() {
        return {
            info: false,
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