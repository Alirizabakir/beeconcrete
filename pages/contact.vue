<template>
    <div>
        <Slider />
        <Container>
            <h2 class="text-3xl text-gray-dark border-b border-gray-dark pt-20 mb-20">
                {{ getLang.pageTitle.contact }}
            </h2>
            <div class="flex flex-col md:flex-row justify-between">
                <div class="flex flex-1 flex-col md:mr-8">
                    <ContactBox></ContactBox>
                    <div class="mb-4 p-2">
                        <h3 class="text-2xl font-bold">{{getLang.global.email}}</h3>
                        <p>beeconcrete@info.com.tr</p>
                        <h3 class="text-2xl font-bold">{{getLang.global.phone}}</h3>
                        <p>+90 533 727 46 49</p>
                        <p>+90 532 321 35 73</p>
                        <h3 class="text-2xl font-bold">{{getLang.global.address}}</h3>
                        <p>İstasyon Mahallesi, Kahramanmaraş-Adana <br> Yolu No:15, 46800 Türkoğlu/Kahramanmaraş</p>
                    </div>
                </div>
                <div class="mb-4 md:flex-1 border h-60 md:h-auto border-gray">
                    <iframe class="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0192409673664!2d36.865830315524846!3d37.389377242011285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152e71a87a006b9b%3A0x40219c8aad466e44!2zQ1RWIMSwTsWeQUFU!5e0!3m2!1str!2str!4v1652199787134!5m2!1str!2str"
                        allowfullscreen="" loading="lazy"></iframe>
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
        },
    }
}
</script>