<template>
  <div class="input-box w-full">
    <span v-if="name" class="label">
      <slot name="labelArea">
        <label :for="name">{{ name }}*</label>
      </slot>
    </span>
    <span class="flex j-between">
      <slot name="inputArea">
        <input :disabled="disabled" :type="type" :id="name" v-model="data" @change="changeData()" :placeholder="placeholder ? placeholder : name"/>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ["name", "type", "value", 'disabled', 'placeholder'],
  data() {
    return {
      data: "",
    };
  },
  created() {
    if (this.value) {
      this.data = this.value;
    }
  },
  methods: {
    changeData() {
      this.$emit("payload", this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  margin-bottom: 1rem;
  input,
  select,
  textarea {
    padding: 0.5rem 1rem;
    width: 100%;
    outline: none;
    font-weight: normal;
    font-size: var(--smallSize);
    border: solid 1px #e6e6e6;
    border-radius: 6px;
    background-color: #fbfbfb;
    height: 44px;
    padding: 10px 12px;
    width: 100%;
  }
  select {
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
    }

    &::-webkit-scrollbar-thumb {
      background: #194914;
    }
  }
  .label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  label {
    font-size: 14px;
    font-weight: semibold;
  }
  textarea {
    resize: none;
    height: 90px;
  }
}
</style>