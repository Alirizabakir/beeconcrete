<template>
    <div class="flex flex-col sm:w-1/2 md:p-2 p-1">
        <label class="text-sm mb-2" for="name">Name</label>
        <input class="border mb-4 border-gray" id="name" type="text">
        <label class="text-sm mb-2" for="email">Email</label>
        <input class="border mb-4 border-gray" id="email" type="text">
        <label class="text-sm mb-2" for="subject">Subject</label>
        <input class="border mb-4 border-gray" id="subject" type="text">
        <label class="text-sm mb-2" for="message">Message</label>
        <textarea class="border mb-4 border-gray resize-none h-20" id="message" type="text"></textarea>
        <button class="bg-gray-dark mb-4 p-2 text-white">SEND</button>
    </div>
</template>