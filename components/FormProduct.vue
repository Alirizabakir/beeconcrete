<template>
  <div class="full flex a-center j-center">
    <div class="box flex column">
      <header v-if="post == null">New Product</header>
      <header v-else>Update Product</header>
      <ul class="page-link flex a-center j-center">
        <li :class="{ activeLink: page == 'info' }" @click="page = 'info'">
          Info
        </li>
        <li :class="{ activeLink: page == 'size' }" @click="page = 'size'">
          Size
        </li>
      </ul>
      <div class="product flex column a-center j-center">
        <div v-show="page == 'info'" class="page">
          <SimpleUpload
            :imgInvalid="imgInvalid"
            :src="product.src"
            @file="(a) => (product.file = a)"
          />
          <div class="info flex column j-center">
            <div class="name">
              <label for="name">Name :</label>
              <input
                id="name"
                :class="{ invalid: nameInvalid }"
                class="admin-text-input"
                type="text"
                v-model="product.name"
                placeholder="Name.."
              />
            </div>
            <div class="collection">
              <label for="collection">Collection :</label>
              <select
                require
                :class="{ invalid: collectionInvalid }"
                class="admin-text-input"
                v-model="product.collectionName"
              >
                <option selected disabled value="null">
                  Please select one
                </option>
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="bigPrice flex column">
              <h3 class="priceHeader w-full">Big Price (TL)</h3>
              <div class="w-full">
                <label for="bigNewPrice">New Price :</label>
                <input
                  id="bigNewPrice"
                  class="admin-text-input"
                  type="number"
                  v-model="product.big.newPrice"
                  placeholder="New Price.."
                />
              </div>
              <div class="w-full">
                <label for="bigOldPrice">Old Price :</label>
                <input
                  id="bigOldPrice"
                  class="admin-text-input"
                  type="number"
                  v-model="product.big.oldPrice"
                  placeholder="Old Price.."
                />
              </div>
            </div>
            <div class="smallPrice flex column">
              <h3 class="priceHeader w-full">Small Price (TL)</h3>
              <div class="w-full">
                <label for="smallNewPrice">New Price :</label>
                <input
                  id="smallNewPrice"
                  class="admin-text-input"
                  type="number"
                  v-model="product.small.newPrice"
                  placeholder="New Price.."
                />
              </div>
              <div class="w-full">
                <label for="smallOldPrice">Old Price :</label>
                <input
                  id="smallOldPrice"
                  class="admin-text-input"
                  type="number"
                  v-model="product.small.oldPrice"
                  placeholder="Old Price.."
                />
              </div>
            </div>

            <div class="color-rub flex">
              <input
                type="checkbox"
                id="color"
                v-model="product.color"
                v-show="false"
              />
              <label
                :class="{ activeCheckbox: product.color }"
                class="admin-checkbox flex a-center j-between"
                for="color"
                >Color <span class="svg-form"> <CheckSvg /></span
              ></label>
              <input
                type="checkbox"
                id="rub"
                v-model="product.rub"
                v-show="false"
              />
              <label
                :class="{ activeCheckbox: product.rub }"
                class="admin-checkbox flex a-center j-between"
                for="rub"
                >Rub <span class="svg-form"> <CheckSvg /></span>
              </label>
            </div>
          </div>
        </div>
        <div v-show="page == 'size'" class="page">
          <ul v-show="true" class="big-size">
            <li class="header"><h2>Big Size (cm)</h2></li>
            <li
              v-show="index != 'newPrice' && index != 'oldPrice'"
              v-for="(item, index) in product.big"
              :key="index"
              class="size flex j-between a-center"
            >
              <label :for="item">{{ index }} :</label>
              <input
                class="admin-input"
                type="number"
                min="0"
                :id="item"
                v-model="product.big[index]"
              />
            </li>
          </ul>
          <ul class="small-size">
            <li class="header"><h2>Small Size (cm)</h2></li>
            <li
              v-show="index != 'newPrice' && index != 'oldPrice'"
              v-for="(item, index) in product.small"
              :key="index"
              class="size flex j-between a-center"
            >
              <label :for="item">{{ index }} :</label>
              <input
                class="admin-input"
                type="number"
                min="0"
                :id="item"
                v-model="product.small[index]"
              />
            </li>
          </ul>
        </div>
        <div class="button-box flex a-center j-center">
          <button
            v-if="isMethods"
            @click="add"
            type="submit"
            class="admin-button add"
          >
            Add
          </button>
          <button v-else @click="save" class="admin-button save">Save</button>
          <button @click="cancel" class="admin-button cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckSvg from "@/components/icon/CheckSvg.vue";
export default {
  components: {
    CheckSvg,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  created() {
    if (this.post != null) {
      this.product = {
        file: "",
        _id: this.post._id,
        name: this.post.name,
        src: {
          a: this.post.src.a,
          b: this.post.src.b,
        },
        big: {
          width: this.post.big.width,
          widthtop: this.post.big.widthtop,
          widthunder: this.post.big.widthunder,
          height: this.post.big.height,
          heighttop: this.post.big.heighttop,
          heightunder: this.post.big.heightunder,
          depth: this.post.big.depth,
          depthtop: this.post.big.depthtop,
          depthunder: this.post.big.depthunder,
          diameter: this.post.big.diameter,
          weight: this.post.big.weight,
          newPrice: this.post.big.newPrice,
          oldPrice: this.post.big.oldPrice,
        },
        small: {
          width: this.post.small.width,
          widthtop: this.post.small.widthtop,
          widthunder: this.post.small.widthunder,
          height: this.post.small.height,
          heighttop: this.post.small.heighttop,
          heightunder: this.post.small.heightunder,
          depth: this.post.small.depth,
          depthtop: this.post.small.depthtop,
          depthunder: this.post.small.depthunder,
          diameter: this.post.small.diameter,
          weight: this.post.small.weight,
          newPrice: this.post.small.newPrice,
          oldPrice: this.post.small.oldPrice,
        },
        collectionName: this.post.collectionName,
        fav: this.post.fav,
        color: this.post.color,
        rub: this.post.rub,
      };
    }
    // Header Change
    this.isMethods = this.post ? false : true;
  },
  computed: {
    getName() {
      return this.$store.getters.getProducts.find(
        (a) => a.name == this.product.name
      );
    },
  },
  data() {
    return {
      nameInvalid: false,
      collectionInvalid: false,
      imgInvalid: false,
      isMethods: false,
      page: "info",
      options: [
        { text: "Bee", value: "bee" },
        { text: "Hive", value: "hive" },
        { text: "Honeycomb", value: "honeycomb" },
        { text: "Covering", value: "covering" },
        { text: "Column", value: "column" },
        { text: "Table", value: "table" },
      ],
      product: {
        file: "",
        _id: null,
        name: null,
        src: {
          a: "default_image.png",
          b: "default_image.png",
        },
        big: {
          width: 0,
          widthtop: 0,
          widthunder: 0,
          height: 0,
          heighttop: 0,
          heightunder: 0,
          depth: 0,
          depthtop: 0,
          depthunder: 0,
          diameter: 0,
          weight: 0,
          newPrice: 0,
          oldPrice: 0,
        },
        small: {
          width: 0,
          widthtop: 0,
          widthunder: 0,
          height: 0,
          heighttop: 0,
          heightunder: 0,
          depth: 0,
          depthtop: 0,
          depthunder: 0,
          diameter: 0,
          weight: 0,
          newPrice: 0,
          oldPrice: 0,
        },
        collectionName: null,
        fav: 0,
        color: false,
        rub: false,
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
            this.$store.commit("displayForm", false);
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
      console.log(this.product);
      this.$store.dispatch("updateProduct", { ...this.product });
      this.$store.commit("displayForm", false);
    },
    cancel() {
      this.$store.commit("displayForm", false);
      this.$emit("postNull", null);
    },
  },
};
</script>
<style lang="scss" scoped>
.full {
  position: absolute;
  inset: 0;
  background-color: rgba(193, 193, 193, 0.5);
  .box {
    background-color: rgb(232, 232, 232);
    border-radius: 8px;
    height: 80vh;
    max-width: 900px;
    width: 900px;
    overflow: hidden;
    box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.311);
    header {
      padding: 8px;
      font-size: var(--mediumSize);
      background-color: rgb(200, 200, 200);
    }
    .page-link {
      border-bottom: 1px solid #4d8cf2;
      border-top: 1px solid #4d8cf2;
      li {
        background-color: #fff;
        color: #4d8cf2;
        padding: 10px 20px;
        font-weight: bold;
        border-right: 1px solid #4d8cf2;
        border-left: 1px solid #4d8cf2;
        cursor: pointer;
      }
      .activeLink {
        background-color: #4d8cf2;
        color: #fff;
      }
    }
    .product {
      padding: 1rem;
      flex: 1;

      .page {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        align-items: center;
        flex: 1;
        width: 100%;
        .info {
          width: 100%;
          padding: 0 1rem;
          div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
          }
          .admin-checkbox {
            margin-bottom: 1rem;
            .svg-form {
              svg {
                width: 13px;
                fill: #fff;
              }
            }
          }
        }
        .size {
          margin: 5px;
        }
        .activeCheckbox {
          background-color: #4d8cf2;
          color: #fff;
        }

        .priceHeader {
          border-bottom: 1px solid grey;
          padding: 5px 0;
          margin-bottom: 5px;
        }
      }

      .button-box {
        height: 50px;
        .add {
          background-color: rgb(2, 88, 2);
        }
        .save {
          background-color: rgb(191, 181, 0);
        }
        .cancel {
          background-color: rgb(151, 2, 2);
        }
      }
    }
  }
}
.invalid {
  background-color: rgba(244, 0, 0, 0.5);
}
</style>