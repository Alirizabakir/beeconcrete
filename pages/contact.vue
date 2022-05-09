<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item"><span class="border-r">Contact</span></li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        Contact
      </div>
      <ul class="two-footer">
        <li class="contact w-full">
          <div class="send flex column">
            <InputBox
              :name="'Name'"
              :type="text"
              :payload="(payload) => (sendMail.name = payload)"
            />
            <InputBox
              :name="'Email'"
              :type="email"
              :payload="(payload) => (sendMail.email = payload)"
            />
            <InputBox :name="'Message'" :type="text">
              <template v-slot:inputArea>
                <textarea
                  name="message"
                  id="message"
                  v-model="sendMail.content"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </template>
            </InputBox>
            <button class="button" :type="submit" @click.prevent="send()">
              SEND
            </button>
          </div>
          <ul class="social flex">
            <li
              class="social-item"
              v-for="(item, index) in contactData"
              :key="index"
            >
              <a :href="item.link" target="_blank"
                ><img :src="item.src" alt=""
              /></a>
            </li>
          </ul>
        </li>
        <li class="iframe">
          <iframe
            class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12648.242172659022!2d36.92445259261883!3d37.57719202046663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x152dddbc3d7a1a47%3A0x8e9bdcea1291516f!2sKahramanmara%C5%9F!3m2!1d37.5752755!2d36.9228223!4m5!1s0x152ddd11c62b27e3%3A0x3cf5bbc3b7805637!2sKahramanmara%C5%9F%20Kalesi!3m2!1d37.586332999999996!2d36.925756899999996!5e0!3m2!1str!2str!4v1647718522547!5m2!1str!2str"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      contactData: [
        {
          content: "info@beeconcrete.com.tr",
          src: "email.png",
          link: "mailto: info@beeconcrete.com.tr",
        },
        {
          content: "+90 533 727 46 49",
          src: "telephone.png",
          link: "tel:+90 533 727 46 49",
        },
        {
          content: "Bee Concrete Design",
          src: "facebook.png",
          link: "https://www.facebook.com/Bee-Concrete-Design-108182985059888",
        },
        {
          content: "beeconcretedesign",
          src: "instagram.png",
          link: "https://www.instagram.com/beeconcretedesign/",
        },
        {
          content: "Address",
          src: "home.png",
          link: "https://goo.gl/maps/jF2vk9wJMeAnaghh6",
        },
      ],
      sendMail: {
        name: "",
        email: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      console.log(this.sendMail);
    },
    send() {
      Email.send({
        SecureToken: "6e985e68-1318-41f7-b631-26ebb3e4fd8c",
        To: "aarizabkr@gmail.com",
        From: this.sendMail.email,
        Subject: "Contact Form",
        Body: this.sendMail.content,
      }).then((message) => alert(message));
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .section-two {
    .two-footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      .contact {
        .send {
          button {
            height: 40px;
            margin-bottom: 2rem;
          }
        }
        .social {
          justify-content: space-evenly;

          .social-item {
            img {
              width: 30px;
            }
          }
        }
      }
      .iframe {
        border: 1px solid rgb(150, 150, 150);
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    .section-two {
      .two-footer {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
        padding: 1rem;
        .contact {
          .send {
            button {
              margin-bottom: 1rem;
            }
          }
          .social {
            justify-content: space-evenly;
            margin-bottom: 1rem;
            .social-item {
              img {
                width: 30px;
              }
            }
          }
        }
        .iframe {
          flex: 1;
        }
      }
    }
  }
}
</style>