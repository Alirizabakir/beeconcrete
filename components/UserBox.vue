<template>
  <div class="user-box">
    <div class="info">
      <div class="flex w-full">
        <InputBox
          class="mr"
          @payload="(payload) => (dataBase.name = payload)"
          :type="'text'"
          :name="'Name'"
          :value="dataBase.name"
        />
        <InputBox
          class="ml"
          @payload="(payload) => (dataBase.familyName = payload)"
          :type="'text'"
          :name="'Surname'"
          :value="dataBase.familyName"
        />
      </div>
      <InputBox
        @payload="(payload) => (dataBase.email = payload)"
        :type="'email'"
        :name="'Email'"
        :value="dataBase.email"
      />
      <div class="flex a-end w-full mb-1">
        <InputBox
          :disabled="'disabled'"
          class="m-0"
          style="width: 80px"
          :name="'Country'"
          :value="'+90'"
        />
        <InputBox
          class="m-1 m-0"
          @payload="(payload) => (dataBase.number = payload)"
          :type="'tel'"
          :name="'Phone Number'"
          :value="dataBase.number"
          :placeholder="'555 -- --'"
        />
        <button @click="updateUser" class="button save">Update</button>
      </div>

      <InputBox class="m-0">
        <template v-slot:inputArea>
          <InputBox :name="'Day'" :type="'text'">
            <template v-slot:inputArea>
              <select v-model="day" name="day" id="day">
                <option :value="day" selected disabled hidden>
                  {{ day != null ? day : "Choose Ctiy" }}
                </option>
                <option :value="item" v-for="(item, index) in 30" :key="index">
                  {{ item }}
                </option>
              </select>
            </template>
          </InputBox>
          <InputBox :name="'Month'" class="m-1" :type="'text'">
            <template v-slot:inputArea>
              <select v-model="month" name="month" id="month">
                <option :value="month" selected disabled hidden>
                  {{ month != null ? month : "Choose Ctiy" }}
                </option>
                <option :value="item" v-for="(item, index) in 12" :key="index">
                  {{ item }}
                </option>
              </select>
            </template>
          </InputBox>
          <InputBox :name="'Year'" :type="'text'">
            <template v-slot:inputArea>
              <select v-model="year" name="year" id="year">
                <option :value="year" selected disabled hidden>
                  {{ year != null ? year : "Choose Ctiy" }}
                </option>
                <option
                  :value="2022 - item"
                  v-for="(item, index) in 60"
                  :key="index"
                >
                  {{ 2022 - item }}
                </option>
              </select>
            </template>
          </InputBox>
        </template>
      </InputBox>
      <InputBox :type="'text'" :name="'Provience'">
        <template v-slot:inputArea>
          <select v-model="dataBase.provience" name="provience" id="provience">
            <option :value="dataBase.provience" selected disabled hidden>
              {{
                dataBase.provience != null ? dataBase.provience : "Choose Ctiy"
              }}
            </option>
            <option
              :value="item"
              v-for="(item, index) in provienceList"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
        </template>
      </InputBox>
      <InputBox :type="'address'" :name="'Address'">
        <template v-slot:inputArea>
          <textarea
            name="provience"
            id="provience"
            cols="30"
            rows="10"
            style="resize: none"
            v-model="dataBase.address"
          ></textarea>
        </template>
      </InputBox>
      <InputBox
        @payload="(payload) => (dataBase.addressTitle = payload)"
        :type="'text'"
        :name="'Address Name'"
        :value="dataBase.addressTitle"
      />
    </div>
    <div class="button-box flex">
      <button @click="updateUser" class="button save">Save</button>
      <button @click="deleteUser" class="button delete">
        Delete My Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: "",
      month: "",
      year: "",
      id: null,
      payload: "",
      dataBase: {
        name: "",
        familyName: "",
        number: "",
        email: "",
        birthday: "",
        address: "",
        provience: "",
        addressTitle: "",
      },
      provienceList: [
        "ADANA",
        "KOCAELİ",
        "ADIYAMAN",
        "KONYA",
        "AFYONKARAHİSAR",
        "KÜTAHYA",
        "AĞRI",
        "MALATYA",
        "AMASYA",
        "MANİSA",
        "ANKARA",
        "KAHRAMANMARAŞ",
        "ANTALYA",
        "MARDİN",
        "ARTVİN",
        "MUĞLA",
        "AYDIN",
        "MUŞ",
        "BALIKESİR",
        "NEVŞEHİR",
        "BİLECİK",
        "NİĞDE",
        "BİNGÖL",
        "ORDU",
        "BİTLİS",
        "RİZE",
        "BOLU",
        "SAKARYA",
        "BURDUR",
        "SAMSUN",
        "BURSA",
        "SİİRT",
        "ÇANAKKALE",
        "SİNOP",
        "ÇANKIRI",
        "SİVAS",
        "ÇORUM",
        "TEKİRDAĞ",
        "DENİZLİ",
        "TOKAT",
        "DİYARBAKIR",
        "TRABZON",
        "EDİRNE",
        "TUNCELİ",
        "ELAZIĞ",
        "ŞANLIURFA",
        "ERZİNCAN",
        "UŞAK",
        "ERZURUM",
        "VAN",
        "ESKİŞEHİR",
        "YOZGAT",
        "GAZİANTEP ZONGULDAK",
        "GİRESUN",
        "AKSARAY",
        "GÜMÜŞHANE",
        "BAYBURT",
        "HAKKARİ",
        "KARAMAN",
        "HATAY",
        "KIRIKKALE",
        "ISPARTA",
        "BATMAN",
        "MERSİN",
        "ŞIRNAK",
        "İSTANBUL",
        "BARTIN",
        "İZMİR",
        "ARDAHAN",
        "KARS",
        "IĞDIR",
        "KASTAMONU",
        "YALOVA",
        "KAYSERİ",
        "KARABÜK",
        "KIRKLARELİ",
        "KİLİS",
        "KIRŞEHİR",
        "OSMANİYE",
        "DÜZCE",
      ],
    };
  },
  created() {
    this.dataBase = { ...this.getUser };
    if (this.getUser.birthday != null) {
      const birthday = this.getUser.birthday.split("-");
      this.day = birthday[0];
      this.month = birthday[1];
      this.year = birthday[2];
    }
    if (this.getUser.number != null) {
      const number = this.getUser.number.slice(3, this.getUser.number.length);
      this.dataBase.number = number;
    }
    this.id = this.getID;
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getID() {
      return this.$store.state.id;
    },
  },
  methods: {
    changeData(payload) {
      this.dataBase[payload.index] = payload.newData;
    },
    updateUser() {
      if (this.dataBase.number[0] == "0") {
        this.dataBase.number =
          "+90" + this.dataBase.number.slice(1, this.dataBase.number.length);
      } else {
        this.dataBase.number = "+90" + this.dataBase.number;
      }
      this.dataBase.birthday = this.day + "-" + this.month + "-" + this.year;
      this.$store.dispatch("updateUser", { id: this.id, ...this.dataBase });
      this.$emit("succes", true);
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", {
        id: this.id,
        email: this.dataBase.email,
      });
      this.$emit("del", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-box {
  width: 70%;
  margin: 0 auto;
  .info {
    display: flex;
    flex-wrap: wrap;
    .m-0 {
      margin: 0;
    }
    .m-1 {
      margin: 0 1rem;
    }
    .ml {
      margin-left: 0.5rem;
    }
    .mr {
      margin-right: 0.5rem;
    }
    .mb-1 {
      margin-bottom: 1rem;
    }
    .button {
      height: 44px;
    }
  }
  .button-box {
    .button {
      padding: 1rem;
      margin: 0 0.5rem;
      width: 50%;
      font-size: var(--mediumSize);
      font-weight: normal;
    }
    .delete {
      background-color: rgb(148, 1, 1);
      color: white;
      border-color: rgb(148, 1, 1);
    }
  }
}

@media only screen and (max-width: 1024px) {
  .user-box {
    width: 100%;
    .info {
      grid-template-columns: 1fr;
      padding: 0 0.5rem;
    }
    .button-box {
      .button {
        padding: 0.5rem;
        font-size: var(--smallize);
      }
    }
  }
}
</style>