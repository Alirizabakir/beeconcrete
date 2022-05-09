<template>
  <div :class="{ signup: !status }" class="user flex column j-between a-start">
    <div class="root w-full">
      <nuxt-link class="signin" to="/signin">Sign In</nuxt-link>
      <nuxt-link class="signup" to="/signup">Sign Up</nuxt-link>
      <div class="p-border"></div>
    </div>
    <div class="footer w-full">
      <div class="data w-full">
        <div v-show="!status" class="name flex column">
          <label
            :class="{
              active: isActive == 'name' || name != null,
            }"
            for="name"
            >Name</label
          >
          <input
            :class="{ validName: validName }"
            autocomplete="off"
            v-model="name"
            @blur="isActive = ''"
            @focus="isActive = 'name'"
            id="name"
            type="text"
          />
        </div>
        <div v-show="!status" class="familyName flex column">
          <label
            :class="{
              active: isActive == 'familyName' || familyName != null,
            }"
            for="familyName"
            >Family Name</label
          >
          <input
            :class="{ validName: validName }"
            autocomplete="off"
            v-model="familyName"
            @blur="isActive = ''"
            @focus="isActive = 'familyName'"
            id="familyName"
            type="text"
          />
        </div>
        <div class="email flex column">
          <label
            :class="{
              active: isActive == 'email' || email != null,
            }"
            for="email"
            >Email</label
          >
          <input
            :class="{ validEmail: validEmail }"
            autocomplete="off"
            v-model="email"
            @blur="isActive = ''"
            @focus="isActive = 'email'"
            id="email"
            type="email"
          />
        </div>
        <div class="pass flex column">
          <label
            :class="{
              active: isActive == 'pass' || password != null,
            }"
            for="pass"
            >Password</label
          >
          <input
            :class="{ validPass: validPass }"
            autocomplete="off"
            v-model="password"
            @blur="isActive = ''"
            @focus="isActive = 'pass'"
            id="pass"
            type="password"
          />
        </div>
        <div v-show="!status" class="passrep flex column">
          <label
            :class="{
              active: isActive == 'passrep' || passwordrepeat != null,
            }"
            for="passrep"
            >Repeat Password</label
          >
          <input
            :class="{ validPassRep: validPassRep }"
            autocomplete="off"
            v-model="passwordrepeat"
            @blur="isActive = ''"
            @focus="isActive = 'passrep'"
            id="passrep"
            type="password"
          />
        </div>
      </div>
      <div v-show="!status" class="available flex j-between">
        <div class="concract-box flex a-center j-between">
          <span
            @click="available = !available"
            :class="{ validAvailable: validAvailable }"
            class="check flex a-center j-center"
          >
            <CheckSvg v-show="available" />
          </span>
          <div class="concract">
            <span
              >I have read and accepted
              <strong
                href="#"
                @click="(concractActive = !concractActive), (content = false)"
                >Terms & Conditions</strong
              >
              and the BeeConcrete
              <strong
                href="#"
                @click="(concractActive = !concractActive), (content = true)"
                >Privacy Policy</strong
              ></span
            >
            <div v-show="concractActive" class="concract-text">
              <Concract v-show="!content" />
              <PrivacyPolicy v-show="content" />
              <div class="button-box w-full flex a-center j-center">
                <button
                  @click="(available = true), (concractActive = false)"
                  class="button accept"
                >
                  Accept
                </button>
                <button
                  @click="(available = false), (concractActive = false)"
                  class="button decline"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="status" class="forgot flex a-center j-end">
        <a v-show="status" href="#">Forgot Password ?</a>
      </div>
      <div class="next w-full">
        <button @click="signUp" v-show="!status">Sign Up</button>
        <button @click="signIn" v-show="status">Sign In</button>
      </div>
      <div class="google w-full">
        <div
          class="flex a-center j-center"
          @click="loginWithGoogle"
          v-show="!status"
        >
          <span class="img flex a-center j-center"
            ><img :src="'google.png'" alt="" /></span
          ><span class="text">Sign up with Google</span>
        </div>
        <div
          class="flex a-center j-center"
          @click="loginWithGoogle"
          v-show="status"
        >
          <span class="img flex a-center j-center"
            ><img :src="'google.png'" alt="" /></span
          ><span class="text">Sign in with Google</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckSvg from "@/components/icon/CheckSvg.vue";
export default {
  name: "UserComp",
  props: {
    status: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CheckSvg,
  },
  data() {
    return {
      content: false,
      validAvailable: false,
      available: false,
      concractActive: false,
      isActive: "",
      validName: false,
      validEmail: false,
      validPass: false,
      validPassRep: false,
      name: null,
      familyName: null,
      email: null,
      password: null,
      passwordrepeat: null,
      fromCookie: null,
    };
  },
  methods: {
    // Udemy
    signIn() {
      if (this.email) {
        this.validName = false;
        if (this.password) {
          this.validPass = false;
          this.$store
            .dispatch("loginWithEmail", {
              status: this.status,
              name: this.name,
              familyName: this.familyName,
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              this.$router.push("/");
            });
        } else {
          this.validPass = true;
        }
      } else {
        this.validEmail = true;
      }
    },
    signUp() {
      if (this.available) {
        this.validAvailable = false;

        if (this.name) {
          this.validName = false;

          if (this.email) {
            this.validEmail = false;

            if (this.password) {
              this.validPass = false;

              if (this.password == this.passwordrepeat) {
                this.validPassRep = false;

                this.$store
                  .dispatch("signUp", {
                    status: this.available,
                    name: this.name,
                    familyName: this.familyName,
                    email: this.email,
                    password: this.password,
                  })
                  .then((response) => {
                    this.$router.push("/signin");
                  });
              } else {
                this.validPassRep = true;
              }
            } else {
              this.validPass = true;
            }
          } else {
            this.validEmail = true;
          }
        } else {
          this.validName = true;
        }
      } else {
        this.validAvailable = true;
      }
    },
    loginWithGoogle() {
      return this.$store.dispatch("loginWithGoogle");
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  width: 400px;
  padding: 0 0 2rem 0;
  transition: all 0.5s;
  .root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    position: relative;
    a {
      line-height: 40px;
      text-align: center;
      border-radius: 3px 3px 0 0;
      font-size: var(--mediumSize);
      flex: 1;
      border-top: 1px solid rgb(166, 166, 166);
      border-left: 1px solid rgb(166, 166, 166);
      border-right: 1px solid rgb(166, 166, 166);
    }
    .signup {
      background-color: rgb(166, 166, 166);
      color: rgb(255, 255, 255);
    }
    .signin {
      background-color: rgb(255, 255, 255);
      color: rgb(66, 133, 244);
    }
    .p-border {
      width: calc(50% + 0.5rem);
      height: 1px;
      background-color: rgb(166, 166, 166);
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .footer {
    background-color: white;
    padding: 2rem;
    border-radius: 0 0 5px 5px;
    border-bottom: 1px solid rgb(166, 166, 166);
    border-left: 1px solid rgb(166, 166, 166);
    border-right: 1px solid rgb(166, 166, 166);
    .data {
      margin-bottom: 2rem;
      div {
        position: relative;
        margin: 1rem 0;
        label {
          font-size: var(--smallSize);
          letter-spacing: 1px;
          position: absolute;
          top: calc(50% - 7px);
          left: 15px;
          transition: 0.4s;
          padding: 0 0.3rem;
          color: gainsboro;
        }
        input {
          border: 1px solid rgb(197, 197, 197);
          padding: 0.7rem 1rem;
          border-radius: 3px;
          font-size: var(--mediumSize);
          background-color: transparent;
          transition: 0.4s;
          &:focus {
            border: 1px solid rgb(66, 133, 244);
          }
          &:invalid {
            border: 1px solid rgb(175, 17, 17);
          }
        }
        .validName {
          border: 1px solid rgb(175, 17, 17);
        }
        .validEmail {
          border: 1px solid rgb(175, 17, 17);
        }
        .validPass {
          border: 1px solid rgb(175, 17, 17);
        }
        .validPassRep {
          border: 1px solid rgb(175, 17, 17);
        }
        .active {
          top: -7px;
          color: rgb(66, 133, 244);
          background-color: white;
        }
      }
    }
    .available {
      margin-bottom: 2rem;

      .concract-box {
        .check {
          background-color: white;
          border: 1px solid rgb(104, 104, 104);
          min-width: 15px;
          height: 15px;
          margin-right: 10px;
          border-radius: 2px;
          svg {
            width: 9px;
            fill: blue;
          }
        }
        .concract {
          font-size: var(--smallSize);
          strong {
            cursor: pointer;
          }
          .concract-text {
            position: fixed;
            top: calc(50% - 40vh);
            left: calc(50% - 30vw);
            .button-box {
              background-color: white;
              padding: 1rem;
              button {
                padding: 0.5rem 1rem;
                margin: 0 1rem;
              }
              .accept {
                background-color: green;
              }
              .decline {
                background-color: red;
              }
            }
          }
        }
        .validAvailable {
          background-color: rgb(218, 56, 56);
        }
      }
    }
    .forgot {
      margin-bottom: 2rem;
    }
    .next {
      padding: 0 2rem;
      margin-bottom: 1rem;

      button {
        background-color: rgb(66, 133, 244);
        width: 100%;
        padding: 1rem;
        border-radius: 5px;
        color: white;
        font-size: var(--mediumSize);
        letter-spacing: 1px;
      }
    }
    .google {
      padding: 0 2rem;

      div {
        background-color: rgb(66, 133, 244);
        border: 1px solid rgb(66, 133, 244);
        border-radius: 2px;
        cursor: pointer;
        .img {
          height: 40px;
          width: 40px;
          background-color: white;
          border-radius: 2px;
          img {
            width: 25px;
          }
        }
        .text {
          flex: 1;
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: white;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}
.signup {
  .root {
    .signup {
      background-color: white;
      color: rgb(66, 133, 244);
    }
    .signin {
      background-color: rgb(166, 166, 166);
      color: rgb(255, 255, 255);
    }
    .p-border {
      left: 0;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .user {
    width: 100%;
    .footer {
      .available {
        .concract-box {
          .concract {
            .concract-text {
              left: 0;
            }
          }
        }
      }
    }
  }
}
</style>