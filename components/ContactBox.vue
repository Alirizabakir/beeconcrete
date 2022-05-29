<template>
    <div class="flex flex-col w-full md:p-2 p-1">
        <label class="text-sm mb-2" for="name">Name</label>
        <input v-model="sendMail.name" class="border mb-4 border-gray" id="name" type="text">
        <label class="text-sm mb-2" for="email">Email</label>
        <input v-model="sendMail.email" class="border mb-4 border-gray" id="email" type="text">
        <label class="text-sm mb-2" for="subject">Subject</label>
        <input class="border mb-4 border-gray" id="subject" type="text">
        <label class="text-sm mb-2" for="message">Message</label>
        <textarea v-model="sendMail.content" class="border mb-4 border-gray resize-none h-20" id="message" type="text"></textarea>
        <button @click="send" class="bg-gray-dark mb-4 p-2 text-white">SEND</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sendMail: {
                name: "",
                email: "",
                content: "",
            },
        }
    },
    methods: {
        send() {
            Email.send({
                SecureToken: "6e985e68-1318-41f7-b631-26ebb3e4fd8c",
                From: "aarizabkr@gmail.com",
                // From: this.sendMail.email,
                to: this.sendMail.email,
                Subject: "Contact Form",
                Body: this.sendMail.content,
            }).then((message) => alert(message));
        },
    },
}
</script>