<template>
  <div class="form fixed top-0 inset-0 flex items-center justify-center">
    <div class="box w-3/4 flex flex-col bg-gray-light">
      <header class="py-2 px-8 bg-gray-dark" v-if="post == null">New Product</header>
      <header class="py-2 px-8 bg-gray-dark" v-else>Update Product</header>

      <div class="product grid grid-cols-2 gap-4 p-8">
        <div class="grid grid-cols-2 gap-4">
          <ul class="product-info">
            <li>
              <label for="name">Name</label>
              <input v-model="product.name" id="name" type="text">
            </li>
            <li>
              <label for="collection">Collection Name</label>
              <select v-model="product.collectionName" name="collection" id="collection">
                <option v-for="(collection, index) in collectionName" :key="index" :value="collection">
                  {{ collection }}
                </option>
              </select>
            </li>
            <li>
              <label for="type">Object Type</label>
              <select v-model="product.objectType" name="type" id="type">
                <option v-for="(type, index) in objectType" :key="index" :value="type">
                  {{ type }}
                </option>
              </select>
            </li>
            <li>
              <label for="stock">Stock</label>
              <input v-model="product.stock" id="stock" type="number">
            </li>
            <li>
              <label for="new">New Price</label>
              <input v-model="product.oldPrice" id="new" type="number">
            </li>
            <li>
              <label for="old">Old Price</label>
              <input v-model="product.newPrice" id="old" type="number">
            </li>


          </ul>
          <div class="sizes">
            <div class="flex flex-col" v-for="(size, index) in product.sizes" :key="index">
              <label :for="index">{{ index }}</label>
              <input v-model="product.sizes[index]" :id="index" type="number">
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between">

          <ul class="flex-1">
            <li>
              <div class="mt-4">Color</div>
              <div class="flex flex-wrap">
                <span :class="[{ 'bg-blue': product.color[index] }, { 'bg-gray': !product.color[index] }]"
                  class="p-1 text-white m-1 cursor-pointer" @click="product.color[index] = !product.color[index]"
                  v-for="(color, index) in product.color" :key="index">
                  {{ index.toUpperCase() }}
                </span>
              </div>
            </li>
            <li>
              <div class="mt-4">Rub</div>
              <div class="flex flex-wrap">
                <span :class="[{ 'bg-blue': product.rub[index] }, { 'bg-gray': !product.rub[index] }]"
                  class="p-1 text-white m-1 cursor-pointer" @click="product.rub[index] = !product.rub[index]"
                  v-for="(rub, index) in product.rub" :key="index">
                  {{ index.toUpperCase() }}
                </span>
              </div>
            </li>
            <li>
              <div class="mt-4">Sizes Type</div>
              <div class="flex flex-wrap">
                <span :class="[{ 'bg-blue': product.sizeType[index] }, { 'bg-gray': !product.sizeType[index] }]"
                  class="p-1 text-white m-1 cursor-pointer" @click="product.sizeType[index] = !product.sizeType[index]"
                  v-for="(sizeType, index) in product.sizeType" :key="index">
                  {{ index.toUpperCase() }}
                </span>
              </div>
            </li>
          </ul>
          <div class="grid grid-cols-3 gap-2">
            <div>
              <h3>File 0</h3>
              <SimpleUpload :imgInvalid="imgInvalid" :src="post ? post.src : 'default.jpg'"
                @file="(a) => (product.file0 = a)" class="w-full" />
            </div>
            <div>
              <h3>File 1</h3>
              <SimpleUpload2 :imgInvalid="imgInvalid" :src="post ? post.src : 'default.jpg'"
                @file="(a) => (product.file1 = a)" class="w-full" />
            </div>
            <div>
              <h3>File 2</h3>
              <SimpleUpload3 :imgInvalid="imgInvalid" :src="post ? post.src : 'default.jpg'"
                @file="(a) => (product.file2 = a)" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-box flex justify-center">
        <button v-if="!post" @click="add" type="submit" class="px-3 py-1 bg-blue m-4 text-white text-lg rounded-sm">
          Add
        </button>
        <button v-else @click="save" class="px-3 py-1 bg-blue m-4 text-white text-lg rounded-sm">Save</button>
        <button @click="cancel" class="px-3 py-1 bg-pink m-4 text-white text-lg rounded-sm">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
import CheckSvg from "@/components/icon/CheckSvg.vue";
import SimpleUpload from "@/components/admin/SimpleUpload.vue";
import SimpleUpload2 from "@/components/admin/SimpleUpload2.vue";
import SimpleUpload3 from "@/components/admin/SimpleUpload3.vue";
export default {
  components: {
    CheckSvg,
    SimpleUpload,
    SimpleUpload2,
    SimpleUpload3
  },
  props: ['post'],
  created() {

    if (this.post != null) {
      this.product = {
        ...this.post,
        file0: null,
        file1: null,
        file2: null,
        sizes: { ...this.post.sizes },
        color: { ...this.post.color },
        rub: { rough: true, ...this.post.rub },
        sizeType: { ...this.post.sizeType },
      }
    }
    // Header Change
    this.isMethods = this.post ? false : true;
  },
  data() {
    return {
      nameInvalid: false,
      collectionInvalid: false,
      imgInvalid: false,
      isMethods: false,
      page: "info",
      objectType: ['pot', 'furniture', 'covering', 'oven', 'fiber', 'plate'],
      collectionName: ['bee', 'honeycomb', 'hive', 'cube', 'queen', 'vase', 'long', 'small series', 'column', 'table', 'seat', 'ball', 'covering', 'oven', 'fiber'],
      product: {
        file0: null,
        file1: null,
        file2: null,
        name: null,
        collectionName: null,
        color: {
          darkGray: false,
          gray: false,
          white: false,
        },
        sizes: {
          depth: 0,
          diameter: 0,
          height: 0,
          weight: 0,
          width: 0,
          volume: 0,
        },
        fav: 0,
        newPrice: '0',
        oldPrice: '0',
        objectType: null,
        rub: { rough: false, roughter: false, smooth: false },
        sizeType: {
          xsmall: false, small: false, normal: false, large: false, xlarge: false
        },
        stock: '0',
        src: null,
      },
    };
  },
  methods: {
    add() {
      if (!this.getName && this.product.name != null) {
        this.nameInvalid = false;
        if (this.product.collectionName != null) {
          this.collectionInvalid = false;
          if (this.product.file != "") {
            this.$store.dispatch("newProduct", { ...this.product });
            console.log(this.product);
            this.$emit("close", false);
            this.imgInvalid = false;
          } else {
            this.imgInvalid = true;
          }
        } else {
          this.collectionInvalid = true;
        }
      } else {
        this.nameInvalid = true;
      }
    },
    save() {
      this.$store.dispatch("updateProduct", { ...this.product });
      this.$emit("close", null);
    },
    cancel(item) {
      this.$emit("close", null);
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  .product {
    label {
      margin: 5px 0 2px 0;
    }

    select,
    input {
      padding: 2px 0 2px 1rem;
      border-radius: 2px;
      font-size: 15px;
      font-weight: bold;
    }

    .product-info {
      li {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>