<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item" v-show="status">
        <span class="border-r">Sign In</span>
      </li>
      <li class="one-item" v-show="!status">
        <span class="border-r">Sign Up</span>
      </li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div v-show="status" class="sign flex">
          <div @click="$router.go(-1)" class="prev"></div>
          Sign In
        </div>
        <div v-show="!status" class="sign flex">
          <div @click="$router.go(-1)" class="prev"></div>
          Sign Up
        </div>
      </div>
      <div class="two-footer flex a-start j-center">
        <Login />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      status: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      .box {
        position: relative;
        margin-top: 3rem;

        .page {
          position: absolute;
          right: -30px;
          top: 20px;
          width: 100px;
          height: 100px;
          background-color: rgb(42, 80, 36);
          border-radius: 50%;
          transition: all 1s;
          box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.726);
          filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));
          cursor: pointer;

          span {
            font-size: 6rem;
            color: white;
          }
        }

        .active {
          transform: rotate(45deg);
          background-color: rgb(255, 255, 255);

          span {
            color: rgb(42, 80, 36);
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
        .box {
          width: 100%;

          .page {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 80px;
            height: 80px;
            background-color: rgb(42, 80, 36);
            border-radius: 50%;
            transition: all 1s;
            cursor: pointer;

            span {
              font-size: 6rem;
              color: white;
            }
          }

          .active {
            transform: rotate(45deg);
            background-color: rgb(255, 255, 255);

            span {
              color: rgb(42, 80, 36);
            }
          }
        }
      }
    }
  }
}
</style>