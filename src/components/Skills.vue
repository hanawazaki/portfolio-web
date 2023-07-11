<template>
  <section class="skills mx-[16px] md:mx-[50px] xl:mx-[120px]">
    <div
      class="flex flex-col justify-between md:px-5 md:py-5 border-black rounded-xl px-5 py-5"
    >
      <div class="skills__text md:w-auto">
        <h4 class="font-medium text-28xl md:text-2xl md:mb-8">
          Skills & Technologies I use
        </h4>
        <div class="pills flex flex-wrap">
          <Pill
            size="lg"
            :categories="pill"
            v-for="(pill, index) in pills"
            :key="index"
            @filter="handleFilter"
          />
        </div>
      </div>
      <div
        class="contact__socmed flex flex-col md:flex-row text-center md:items-center"
      >
        <Socmed />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Pill from "../components/Pill.vue";

const pills = ref([
  "HTML5",
  "CSS3",
  "Javascript ES6",
  "Sass",
  "Tailwind",
  "Bootstrap",
  "vueJs",
  "ReactJs",
  "Laravel",
  "InertiaJs",
  "NuxtJs",
  "NextJs",
  "Pinia",
  "Wordpress",
  "Webflow",
]);
</script>

<style lang="scss" scoped></style>
