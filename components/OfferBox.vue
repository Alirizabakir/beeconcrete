<template>
    <div class="offer-box fixed inset-0 bg-gray bg-opacity-25 z-50 flex items-start lg:items-center justify-center">
        <div class="offer lg:w-1/2 flex flex-col justify-between w-full h-screen lg:h-auto bg-gray-100 p-6 rounded-sm shadow-show">
            <div class="flex flex-col mb-3">
                <label for="name">
                    {{ getLang.global.name }}
                </label>
                <input v-model="sendOffer.name" class="px-2 py-1 border border-gray-light rounded-sm" id="name"
                    type="text">
            </div>
            <div class="flex flex-col mb-3">
                <label for="email">
                    Email
                </label>
                <input v-model="sendOffer.email" class="px-2 py-1 border border-gray-light rounded-sm" id="email"
                    type="email">
            </div>
            <div class="flex flex-col mb-3">
                <label for="phone">
                    {{ getLang.global.phone }}
                </label>
                <input v-model="sendOffer.phone" class="px-2 py-1 border border-gray-light rounded-sm" id="name"
                    type="tel">
            </div>
            <div class="flex flex-col mb-3">
                <label for="offer">
                    {{ getLang.global.yourOffer }}
                </label>
                <input v-model="sendOffer.yourOffer" class="px-2 py-1 border border-gray-light rounded-sm" id="offer"
                    type="number">
            </div>
            <div class="flex flex-col mb-6">
                <label for="message">
                    {{ getLang.global.message }}
                </label>
                <textarea v-model="sendOffer.message" class="px-2 py-1 border h-30 border-gray-light rounded-sm"
                    name="message" id="message" style="resize: none;" :placeholder="getLang.global.message">
                    </textarea>
            </div>
            <div class="offer-info-box flex flex-col p-2">
                <div class="flex items-center justify-between mt-4 p-2 border-t border-gray">
                    <p>Total Price</p>
                    <p class="text-lg font-bold">{{ getFavTotal }} TL</p>
                </div>
            </div>
            <div class="flex">
                <button @click.prevent="send" class="p-2 flex-1 mr-1 text-white bg-blue">{{ getLang.button.getOffer
                }}</button>
                <button @click="cancel" class="p-2 flex-1 ml-1 text-white bg-red">{{ getLang.button.cancel
                }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sendOffer: {
                name: '',
                phone: '',
                email: '',
                yourOffer: '',
                message: '',
                selected: '',
                total: '',
            }
        }
    },
    created() {
        this.getFav.map((a, index) => this.sendOffer.selected += (index + 1) + ':' + a.name + '<br/>')
        this.sendOffer.total = this.getFavTotal
        console.log(this.sendOffer);
    },
    computed: {
        getFavTotal() {
            return this.$store.getters.getFavTotalPrice
        },
        getFav() {
            return this.$store.getters.getFavorites
        },
        getLang() {
            return this.$store.getters.getLang
        }
    },
    methods: {
        cancel() {
            this.$emit('close', false)
        },
        send() {
            Email.send({
                SecureToken: "6e985e68-1318-41f7-b631-26ebb3e4fd8c",
                From: 'aarizabkr@gmail.com',
                To: this.sendOffer.email,
                Subject: 'Teklif',
                Body: this.sendOffer.name.toUpperCase() +
                    '<br/>' + this.sendOffer.email + '<br/>'
                    + this.sendOffer.phone + '<br/>' + '<br/>' +
                    this.sendOffer.yourOffer + '<br/>' +
                    this.sendOffer.message + '<br/>' +
                    this.sendOffer.selected + '<br/>' +
                    this.sendOffer.total,
            }).then((message) => alert(message));
        },
    },
}
</script>

<style lang="scss" scoped>
.offer-box {
    overflow-y: scroll;

    .offer {
        min-height: 700px;

        .offer-info-box {
            .info {
                &::-webkit-scrollbar {
                    width: 3px;
                    height: 3px;
                }

                &::-webkit-scrollbar-thumb {
                    background: #565656;
                }


            }
        }
    }
}
</style>