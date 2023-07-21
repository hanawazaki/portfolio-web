<template>
  <div class="Contact__socmed-items flex mt-3">
    <a
      target="_blank"
      v-for="icon in icons"
      :key="icon.id"
      :href="icon.link"
      class="w-8 p-1 mr-3 mb-2 transition-all duration-300 ease-in-out hover:scale-105"
    >
      <img
        :src="icon.image"
        :alt="icon.name"
        class="w-[1.5rem] m-auto h-auto"
      />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  {
    id: 1,
    name: "gmail",
    image: "/src/assets/gmail.svg",
    link: "mailto:hanawazaki002@gmail.com",
  },
  {
    id: 2,
    name: "github",
    image: "/src/assets/github.svg",
    link: "https://github.com/hanawazaki",
  },
  {
    id: 3,
    name: "linkedin",
    image: "/src/assets/Linkedin.svg",
    link: "https://www.linkedin.com/in/hanawazaki/",
  },
  {
    id: 4,
    name: "telegram",
    image: "/src/assets/telegram.svg",
    link: "https://t.me/hanawazaki",
  },
]);
</script>
