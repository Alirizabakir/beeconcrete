<template>
        <Container class="flex items-start justify-start">
            <ProductsList class="mr-4 pt-20"/>
            <div class="flex-1">
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
            <Show id="cube" :products="cubeCollection">
                Cube Collection
            </Show>
            <Show id="vase" :products="vaseCollection">
                Vase Collection
            </Show>
            <Show id="smallseries" :products="smallseries">
                Small Series
            </Show>
            <Show id="long" :products="longCollection">
                Long Collection
            </Show>
            <Show id="column" :products="columnCollection">
                Column Collection
            </Show>
            <Show id="table" :products="tableCollection">
                Table Collection
            </Show>
            <Show id="ball" :products="ballCollection">
                Ball Collection
            </Show>
            <Show id="stool" :products="stoolCollection">
                Stool Collection
            </Show>
            <Show :products="coveringCollection">
                Covering Collection
            </Show>
            <a v-show="scroll" href="#bee"
                class="fixed bottom-10 right-10 bg-green text-white text-2xl px-5 py-2 rounded-sm">UP</a>
            </div>
        </Container>
</template>

<script>
export default {
    data() {
        return {
            scroll: false
        }
    },
    computed: {
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
        cubeCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'cube')
        },
        vaseCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'vase')
        },
        longCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'long')
        },
        smallseries() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'small series')
        },
        columnCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'column')
        },
        tableCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'table')
        },
        ballCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'ball')
        },
        stoolCollection() {
            return this.$store.getters.getProducts.filter(a => a.collectionName == 'stool')
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

