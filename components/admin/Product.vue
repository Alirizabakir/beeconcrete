<template>
  <div class="py-5">
    <h2 class="sm:text-2xl text-gray-dark text-center">
      <slot></slot>
    </h2>
    <div class="product-list grid gap-4 grid-cols-5 mt-6 px-10">
      <div class="product" v-for="(item, index) in getProducts" :key="index">
        <div class="name">{{ item.name }} <span class="text-sm" v-show="size && index != 'normal'"
            v-for="(size, index) in item.sizeType" :key="index">({{ index }})</span></div>
        <img @mouseenter="enter(item._id)" class="h-full" :src="'../../small/' + item.src" alt="" />
        <div :class="{ active: isActive == item._id }" @mouseleave="leave"
          class="settings w-full h-full flex items-center justify-around">
          <span class="flex items-center justify-center" @click="update(item)">
            <SettingSvg />
          </span>
          <span class="flex items-center justify-center" @click="del(item._id)">
            <RemoveSvg />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingSvg from "@/components/icon/SettingSvg";
import RemoveSvg from "@/components/icon/RemoveSvg";
import PlusSvg from "@/components/icon/PlusSvg";
import CheckSvg from "@/components/icon/CheckSvg";
export default {
  props: ['products', 'type'],
  components: {
    SettingSvg,
    RemoveSvg,
    PlusSvg,
    CheckSvg,
  },
  data() {
    return {
      isActive: false,
      isValid: null,
    };
  },
  computed: {
    getProducts() {
      if (this.type == 'discount') {
        const clone = [...this.$store.getters.getProducts];
        clone.sort((a, b) => {
          return a.newPrice - b.newPrice;
        });
        return clone.slice(0, 4);

      } else if (this.type == 'special') {
        const clone = [...this.$store.getters.getProducts];
        clone.sort((a, b) => {
          return b.newPrice - a.newPrice;
        });
        return clone.slice(0, 4);


      } else if (this.type == 'fav') {
        const clone = [...this.$store.getters.getProducts];
        clone.sort((a, b) => {
          return b.fav - a.fav;
        });
        return clone.slice(0, 4);

      } else if (this.products == 'getFavorites') {
        return this.$store.getters.getFavorites;
      } else {
        return this.$store.getters.getProducts.filter(a => a.collectionName == this.products)
      }
    },
  },
  methods: {
    enter(id) {
      this.isActive = id;
    },
    leave() {
      if (!this.isValid) {
        this.isActive = false;
      }
    },
    del(value) {
      this.$store.dispatch("delProduct", value)
    },
    update(item) {
      this.$emit("updateProduct", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {

  .product {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.563);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    .name {
      padding: 0.3rem .5rem;
      position: absolute;
      top: 0;
      color: #183a0d;
      font-size: var(--mediumSize);
      font-weight: normal;
      letter-spacing: 1px;
      background-color: #ffffff96;
      width: 100%;
      font-weight: bold;
    }


    .settings {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      background-color: rgba(205, 205, 205, 0.5);
      transition: all 0.5s;

      span {
        transition: all 0.3s;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        cursor: pointer;

        &:hover {
          background-color: rgba(83, 119, 173, 0.7);
        }

        svg {
          width: 20px;
          height: 20px;
          fill: #183a0d;
        }
      }
    }

    .active {
      opacity: 1;
      visibility: visible;
    }
  }


}
</style>