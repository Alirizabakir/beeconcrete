<template>
  <div class="upload-box flex a-center j-center">
    <div class="show-box">
      <img class="img" v-if="file2 == ''" :src="require(`~/static/art/${src}`)" alt="default" />
      <img class="img" v-else :src="file2" alt="upload" />
    </div>

    <div class="input-box flex flex-col items-center justify-center">
      <div :class="{ activeInfo: file2 != '' }" class="file-info">
        <p>{{ fileName }}</p>
        <p>{{ fileSize }} MB</p>
      </div>
      <label :class="{ invalid: imgInvalid }" @click="(file = ''), (fileName = ''), (fileSize = '')" for="image2"
        class="label flex items-center justify-center">
        <span class="svg-form">
          <UploadSvg />
        </span>
      </label>
      <input multiple id="image2" type="file" accept="image/jpeg, image/jpg" ref="file" name="file2"
        @change="selectFile($event)" />
    </div>
  </div>
</template>

<script>
import UploadSvg from "@/components/icon/UploadSvg.vue";
export default {
  components: {
    UploadSvg,
  },
  props: ['src', 'imgInvalid'],
  data() {
    return {
      file2: "",
      fileName: "",
      fileSize: "",
    };
  },
  methods: {
    selectFile(e) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.file2 = reader.result;
        this.fileName = e.target.files[0].name;
        this.fileSize = (e.target.files[0].size / 1048576).toFixed(3);
        console.log(e.target.files);
        this.$emit("file", this.file2);
      });
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-box {
  position: relative;
  max-width: 100%;
  max-height: 100%;

  .show-box {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #fff;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .input-box {
    width: 150px;
    position: absolute;
    bottom: 0px;

    .file-info {
      background-color: rgb(255, 255, 255);
      padding: 7px;
      border-radius: 5px 5px 0 0;
      opacity: 0;
      transform: translateY(20px);
      transition: all 1s;
      transition-delay: 0.3s;
      z-index: 0;
      width: 100px;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #7cacf9;
        padding-bottom: 3px;
        text-align: center;
        font-size: 13px;

        &:nth-child(1) {
          margin-bottom: 5px;
        }
      }
    }

    .activeInfo {
      opacity: 1;
      transform: translateY(0px);
    }

    .label {
      background-color: #4d8cf2;
      padding: 8px;
      border: 1px solid #7cacf9;
      color: #fff;
      border-radius: 5px;
      z-index: 1;

      &:hover {
        background-color: #3b73ce;
        border-color: #729fe7;
        cursor: pointer;
      }

      .svg-form {
        margin-right: 5px;

        svg {
          width: 20px;
          fill: #fff;
        }
      }
    }

    input {
      display: none;
    }
  }
}

.invalid {
  background-color: rgba(244, 0, 0, 0.7) !important;
}
</style>