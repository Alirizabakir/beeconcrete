<template>
  <li class="product">
    <div class="name">{{ item.name }}</div>
    <img
      @mouseenter="enter(item._id)"
      class="img"
      :src="'../../small/'+ item.src.a"
      alt=""
    />
    <div
      :class="{ active: isActive == item._id }"
      @mouseleave="leave"
      class="settings w-full h-full flex a-center j-around"
    >
      <span v-if="!slider" class="svg-span" @click="update(item)">
        <SettingSvg />
      </span>
      <span v-if="!isValid && slider" class="svg-span" @click="add(item)">
        <CheckSvg />
      </span>
      <span v-if="!slider" class="svg-span" @click="del(item._id)">
        <RemoveSvg />
      </span>
      <span v-if="slider && isValid" class="svg-span" @click="del(item.name)">
        <RemoveSvg />
      </span>
    </div>
  </li>
</template>

<script>
import SettingSvg from "@/components/icon/SettingSvg";
import RemoveSvg from "@/components/icon/RemoveSvg";
import PlusSvg from "@/components/icon/PlusSvg";
import CheckSvg from "@/components/icon/CheckSvg";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    slider: {
      type: Boolean,
      required: false,
    },
  },
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
  created() {
    if (this.slider) {
      return this.checked;
    }
  },
  computed: {
    checked() {
      return this.$store.getters.getSlider.map((a) => {
        if (a.name == this.item.name) {
          this.isActive = this.item._id;
          this.isValid = true;
        }
      });
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
    add(item) {
      this.$store.dispatch("addSlider", {
        name: item.name,
        src: { a: item.src.a },
      });
      this.isValid = true;
    },
    del(value) {
      if (this.slider) {
        this.$store.dispatch("delSlider", value);
        this.isValid = null;
      } else {
        this.$store.dispatch("delProduct", value);
      }
    },
    update(item) {
      this.$emit("item", item);
      this.$store.commit("displayForm", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.563);
  border-radius: 5px;
  overflow: hidden;
  .name {
    padding: 0.5rem 1rem;
    position: absolute;
    top: 0;
    color: #183a0d;
    font-size: var(--mediumSize);
    font-weight: normal;
    letter-spacing: 1px;
    background-color: #ffffff96;
    width: 100%;
  }
  .img {
    max-width: 100%;
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      svg {
        width: 30px;
        height: 30px;
        fill: #183a0d;
      }
    }
  }
  .active {
    opacity: 1;
    visibility: visible;
  }
}
</style>