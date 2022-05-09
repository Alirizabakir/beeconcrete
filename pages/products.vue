<template>
  <div class="content">
    <ul class="section-one" :class="{ activeMenu: activeMenu }">
      <li
        class="one-item flex column a-end j-start"
        v-for="(item, index) in listHeader"
        :key="index"
      >
        <span
          @click="
            (item.status = !item.status),
              filterProducts(item.name),
              aMenu(item.name)
          "
          class="border-r"
        >
          {{ item.name }}
        </span>
        <ul
          v-show="item.subList.length > 1"
          class="sublist flex column a-start j-start"
          :class="{ active: item.status }"
        >
          <li
            v-for="(subItem, index) in item.subList"
            :key="index"
            @click="filterProducts(subItem.name), aMenu(subItem.name)"
            class="w-full"
          >
            {{ subItem.name }}
          </li>
        </ul>
      </li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div
          @click="$router.push('/products'), (activeMenu = false)"
          class="prev"
        ></div>
        {{ getHeader }}
        <div @click="activeMenu = !activeMenu" class="hamburger j-end">
          <img :src="require('~/static/hamburgerwhite.png')" alt="" />
        </div>
      </div>
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      activeMenu: false,
      isActive: "",
      listHeader: [
        {
          name: "All Products",
          subList: [],
        },
        {
          name: "Covering",
          subList: [],
        },
        {
          status: false,
          name: "Pot",
          subList: [
            {
              name: "Bee",
            },
            {
              name: "Hive",
            },
            {
              name: "HoneyComb",
            },
            {
              name: "Queen",
            },
          ],
        },
        {
          status: false,
          name: "Furniture",
          subList: [
            {
              name: "Column",
            },
            {
              name: "Table",
            },
          ],
        },
      ],
    };
  },
  computed: {
    getHeader() {
      return this.$store.getters.getHeader;
    },
  },
  methods: {
    filterProducts(value) {
      this.$store.commit("filterProducts", value);
      this.$router.push("/products");
    },
    aMenu(name) {
      if ((name != "Pot") & (name != "Furniture")) {
        this.activeMenu = false;
      }
    },
    newPro() {
      this.$store.dispatch("newProduct", { bismillah: "Bismillah" });
      console.log("newPro");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .section-one {
    .one-item {
      overflow: hidden;
      transition: all 1s;
      .sublist {
        width: 80%;
        height: 0px;
        transition: all 1s;
        li {
          padding: 0.5rem 1rem;
          margin-bottom: 0.5rem;
          border-bottom-left-radius: 5px;
          cursor: pointer;
          background-color: #194914;
          color: #ffffff;
        }
      }
      .active {
        height: 160px;
        transition: all 1s;
      }
    }
  }
  .section-two {
    .two-header {
      .hamburger {
        display: none;
        img {
          max-width: 20px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    position: relative;
    .section-one {
      display: flex !important;
      position: absolute;
      height: 100%;
      width: 100%;
      background: #ffffff;
      z-index: 100;
      top: 36px;
      right: -100%;
      padding: 2rem 0 0 2rem;
      transition: all 0.4s;
      .one-item{
        .border-r {
          border-bottom:1px solid #194914;
        }
      }
    }
    .activeMenu {
      right: 0%;
    }
    .section-two {
      .two-header {
        .hamburger {
          display: flex;
          flex: 1;
        }
      }
    }
  }
}
</style>