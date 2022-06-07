<template>
    <div class="user flex-1 flex flex-col items-start mt-8 px-4">
        <div class="flex w-full items-center justify-center" v-for="(item, index) in getLang.inputData" :key="index">
            <div :class="input.id + '-box'" class="flex w-full flex-col px-1 my-4"
                v-for="(input, inpex) in item.input" :key="inpex">
                <label :for="input.id">{{ getLang.global[input.id] }}*</label>
                <input :class="input.id" class="text-sm w-full" v-model="userInfo[input.id]"
                    v-if="input.data.length < 1 && input.id != 'address'" :id="input.id" :type="input.type"
                    @change="change(input.id)" :placeholder="input.placeholder + '..'">
                <select :class="input.id" v-model="userInfo[input.id]" v-else-if="input.id != 'address'"
                    :name="input.id" :id="input.id">
                    <option v-for="(opti, opdex) 
                        in input.data" :key="opdex" :value="opti">{{ opti }}</option>
                </select>
                <textarea :class="input.id" class="text-sm" v-model="userInfo[input.id]" v-else :name="input.id"
                    :id="input.id" style="resize: none;" :placeholder="input.placeholder + '..'"></textarea>
            </div>
        </div>
        <div class="button-box w-full flex">
            <button @click="updateUser" class="button flex-1 update px-4 py-2 mr-1 bg-blue rounded-sm text-white font-bold"> {{
                    getLang.button.update
            }}</button>
            <button @click="deleteUser" v-if="false" class="button flex-1 delete px-4 py-2 ml-1 bg-pink rounded-sm text-white font-bold">
                {{ getLang.button.delAccount }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            userInfo: {
                name: null,
                surname: '',
                email: '',
                areacode: '+90',
                phone: '',
                day: '0',
                month: '0',
                year: '',
                country: '',
                ctiy: '',
                town: '',
                district: '',
                address: '',
            }
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        },
    },
    created() {
        this.userInfo = { ...this.getUser() };
        this.id = this.getID();
    },
    methods: {
        
        change(id) {
            if (id == 'phone') {
                if (this.userInfo.phone[0] == '0') {
                    this.userInfo.phone = this.userInfo.phone.slice(1, this.userInfo.phone.length)
                }
            }
        },
        getUser() {
            if (this.$store.getters.getUser) {
                return this.$store.getters.getUser;
            } else {
                return this.userInfo
            }
        },
        getID() {
            return this.$store.state.id;
        },
        updateUser() {
            this.$store.dispatch("updateUser", { id: this.id, ...this.userInfo });
        },
        deleteUser() {
            this.$store.dispatch("deleteUser", {
                id: this.id,
                email: this.userInfo.email,
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.user {

    input,
    textarea,
    select {
        padding: 5px 0px 5px 13px;
        font-weight: normal;
        outline: none;
        border-radius: 2px;
        border: 1px solid rgb(160, 160, 160);
    }

    label {
        color: rgb(68, 68, 68);
    }

    .email-box {}

    .areacode-box {
        width: 130px;
    }

    .phone-box {}

    .day-box,
    .month-box,
    .year-box {}


    textarea {
        height: 100px;
    }

}
</style>