<template>
    <div class="bg-gray-dark mt-20">
        <Container class="flex lg:flex-row flex-col justify-between p-4">
            <img class="w-20 h-20 mb-2 mr-4" :src="require(`@/static/icon.png`)" alt="">
            <div class="flex flex-1">
                <div class="flex flex-col flex-1 pr-6  justify-between lg:flex-row">
                    <div class="flex flex-col mb-2">
                        <ul>
                            <li v-for="(header, index) in getLang.headerList" :key="index">
                                <nuxt-link class="text-white" :to="'/products#' + header.link">{{
                                        header.title
                                }}
                                </nuxt-link>

                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col mb-2">
                        <nuxt-link class="text-white" to="/">{{ getLang.pageTitle.myCart }}</nuxt-link>
                        <nuxt-link class="text-white" to="/">{{ getLang.pageTitle.myFavorites }}</nuxt-link>
                        <nuxt-link class="text-white" to="/">{{ getLang.pageTitle.myProfile }}</nuxt-link>

                    </div>
                    <div class="flex flex-col mb-2">
                        <h3 class="text-white">- Adress -</h3>
                        <p class="text-white">İstasyon Mahallesi, Kahramanmaraş-Adana <br> Yolu No:15, 46800
                            Türkoğlu/Kahramanmaraş</p>
                    </div>
                    <div class="flex flex-col mb-2">
                        <h3 class="text-white">- Email -</h3>
                        <p class="text-sm text-white mb-4">beeconcrete@info.com.tr</p>
                        <h3 class="text-white">- Telefon -</h3>
                        <p class="text-sm text-white">+90 533 727 46 49</p>
                        <p class="text-sm text-white">+90 532 321 35 73</p>

                    </div>
                </div>
                <div class="flex flex-col">
                    <nuxt-link class="text-white" to="/products#bee">{{ getLang.global.allProducts }}
                    </nuxt-link>
                    <ul>
                        <li v-for="(collection, index) in getLang.collectionList" :key="index">
                            <nuxt-link class="text-white" :to="'/products#' + collection.link">{{
                                    collection.title
                            }}
                            </nuxt-link>
                            <ul v-if="collection.subList.length > 1">
                                <li v-for="(subList, subdex) in collection.subList" :key="subdex">
                                    <nuxt-link class="text-white" :to="'/products#' + subList.link">{{ subList.title }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>

            </div>
        </Container>
    </div>
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