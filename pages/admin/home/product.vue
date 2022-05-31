<template>
    <div>
        <div v-for="(lang, index) in  getLang.collectionList" :key="index">
            <Product v-for="(subList, index) in  lang.subList" :key="index"
                :products="subList.link" @updateProduct='update'>
                {{ subList.title }}
            </Product>
        </div>
        <UpdateForm @close='a => this.updatePost = a' v-if="updatePost" :post='updatePost'/>
    </div>
</template>

<script>
import Product from '@/components/admin/Product'
import UpdateForm from '@/components/admin/UpdateForm'

export default {
    components: {
        Product,
        UpdateForm
    },
    data() {
        return {
            updatePost: null,
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    },
    methods: {
        update(a){
            this.updatePost = a
        }
    },
}
</script>