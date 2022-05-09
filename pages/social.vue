<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item">
        <span class="border-r">
          <img src="instagram.png" alt="" />
        </span>
      </li>
      <li class="one-item">
        <span class="border-r">
          <img src="facebook.png" alt="" />
        </span>
      </li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        Social
      </div>
      <div class="two-footer">
        <div
          class="item w-full flex column"
          v-for="(item, index) in getSocial"
          :key="index"
        >
          <a :href="item.link" target="_blank">
            <div class="header w-full flex a-center">
              <img src="icon.png" alt="" />
              <h3>beeconcretedesign</h3>
            </div>
            <img class="img w-full" :src="'instagram/' + item.src.a" alt="" />
            <div class="description w-full">
              <h3 class="w-full">beeconcretedesign</h3>
              <p class="w-full">{{ item.name }}</p>

              <p class="w-full">{{ item.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {};
  },
  computed: {
    getSocial() {
      return this.$store.getters.getSocial;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
      align-items: flex-start;
      justify-content: center;
      grid-gap: 2rem;
      overflow-y: scroll;

      .item {
        width: 100%;
        background-color: white;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 2px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.255);

        .header {
          padding: 0.5rem 1rem;
          border-bottom: 1px solid rgb(221, 221, 221);
          img {
            width: 30px;
            margin-right: 0.5rem;
          }
        }
        .img {
          width: 100%;
          margin-bottom: 1rem;
        }
        .description {
          padding: 0 0.5rem;
          flex: 1;
          h3 {
            font-size: var(--normalSize);
            margin-bottom: 1rem;
          }
          p {
            padding: 0 0.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    .section-two {
      .two-footer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
        grid-gap: 1rem;
        width: 100%;
        .item {
          width: 100%;
          height: auto;
          align-items: center;
          justify-content: center;
          .header {
            img {
              width: 30px;
            }
            h3 {
              font-size: var(--normalSize);
            }
          }
          .img {
            max-width: 100%;
          }
          .description {
            h3 {
              font-size: var(--normalSize);
            }
            p {
              font-size: var(--smallSize);
            }
          }
        }
      }
    }
  }
}
</style>