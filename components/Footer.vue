<template>
    <div class="bg-gray-dark mt-20">
        <Container class="grid grid-cols-2 gap-4 md:grid-cols-6 p-10">
            <img class="w-20 h-20" :src="require(`@/static/icon.png`)" alt="">
            <div class="flex flex-col">
                <nuxt-link class="text-white" to="/products#pots">Tüm Ürünler</nuxt-link>
                <nuxt-link class="text-white" to="/products#pots">Bee Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#hive">Hive Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#honeycomb">HoneyComb Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#queen">Queen Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#column">Furniture Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#column">Column Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#table">Table Collection</nuxt-link>
                <nuxt-link class="text-white" to="/products#covering">Covering Collection</nuxt-link>
            </div>
            <div class="flex flex-col">
                <nuxt-link class="text-white" to="/">Ana Sayfa</nuxt-link>
                <nuxt-link class="text-white" to="/products">Ürünler</nuxt-link>
                <nuxt-link class="text-white" to="/social">Sosyal</nuxt-link>
                <nuxt-link class="text-white" to="/about-us">Hakkımızda</nuxt-link>
                <nuxt-link class="text-white" to="/contact">İletişim</nuxt-link>
            </div>

            <div class="flex flex-col">
                <nuxt-link class="text-white" to="/">Kampanyalı Ürünler</nuxt-link>
                <nuxt-link class="text-white" to="/">Favori Ürünler</nuxt-link>
                <nuxt-link class="text-white" to="/my-cart">Sepetim</nuxt-link>
                <nuxt-link class="text-white" to="/my-favorites">Favoriler</nuxt-link>
            </div>
            <div class="flex flex-col">
                <h3 class="text-white">- Adress -</h3>
                <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                    quasi?</p>
            </div>
            <div class="flex flex-col">
                <h3 class="text-white">- Email -</h3>
                <p class="text-sm text-white mb-4">bee@fşgşlg.com</p>
                <h3 class="text-white">- Telefon -</h3>
                <p class="text-sm text-white">+90 500 00 00</p>
            </div>
        </Container>
    </div>
</template>