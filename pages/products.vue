<template>
    <div class="products">
        <Slider :products='slider' />
        <ProductsList />
        <Container>
            <h1 id="pots" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">POTS</h1>
            <Show id="bee" :products="beeCollection">
                Bee Collection
            </Show>
            <Show id="hive" :products="hiveCollection">
                Hive Collection
            </Show>
            <Show id="honeycomb" :products="honeyCombCollection">
                HoneyComb Collection
            </Show>
            <Show id="queen" :products="queenCollection">
                Queen Collection
            </Show>
            <h1 id="furniture" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">FURNITURE</h1>
            <Show id="column" :products="columnCollection">
                Column Collection
            </Show>
            <Show id="table" :products="tableCollection">
                Table Collection
            </Show>
            <h1 id="covering" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">COVERING</h1>
            <Show :products="coveringCollection">
                Covering Collection
            </Show>
            <a v-show="scroll" href="#pots"
                class="fixed bottom-10 right-10 bg-green text-white text-2xl px-5 py-2 rounded-sm">UP</a>
        </Container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scroll: false
        }
    },
    computed: {
        slider() {
            return this.$store.getters.getSlider;
        },
        beeCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'bee')
        },
        hiveCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'hive')
        },
        honeyCombCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'honeycomb')
        },
        queenCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'queen')
        },
        columnCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'column')
        },
        tableCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'table')
        },
        coveringCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'covering')
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 700) {
                this.scroll = true
            } else {
                this.scroll = false
            }
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
