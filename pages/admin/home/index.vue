<template>
    <div>
        <Product :type="'discount'">
            Kampanyalı Ürünler
        </Product>
        <Product :type="'fav'">
            Favori Ürünler
        </Product>
        <Product :type="'special'">
            Özel Seri
        </Product>
    </div>
</template>

<script>
import Product from '@/components/admin/Product'
export default {
    components: {
        Product
    }
}
</script>