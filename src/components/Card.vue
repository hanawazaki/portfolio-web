<template>
  <div
    class="card text-start w-auto md:w-[300px] lg:w-[275px] xl:w-[300px] xxl:w-[375px] rounded-xl mb-5 md:mb-10 border border-black transition-all duration-300 ease-in-out transform"
  >
    <img
      class="card-img-top w-full h-[200px] xxl:h-auto rounded-t-xl"
      src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
      alt="project"
    />
    <div class="card-body p-5">
      <div class="flex justify-between items-center align-middle">
        <h4 class="card-title text-xl font-medium my-3 xxl:text-2xl">
          {{ project.name }}
        </h4>
      </div>
      <p class="card-text text-sm xxl:text-lg">
        {{ project.description }}
      </p>
      <div class="card-categories flex justify-between mt-8 items-center">
        <div class="pills flex justify-between">
          <Pill
            :categories="pill"
            v-for="(pill, index) in project.categories"
            :key="index"
          />
        </div>
      </div>
      <div class="flex justify-start h-auto">
        <a
          target="_blank"
          :href="project.link"
          class="w-8 border p-1 mr-3 border-black rounded-full mb-2 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="../assets/github.svg"
            :alt="project.name"
            class="w-[1.5rem] m-auto h-auto"
          />
        </a>
        <a
          target="_blank"
          :href="project.link"
          class="w-8 border p-1 border-black rounded-full mb-2 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <i v-html="arrow" class="text-base md:text-sm"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Pill from "../components/Pill.vue";
import RoundButton from "./RoundButton.vue";

const pills = ref(["vuejs", "tailwind"]);
const arrow = ref("&UpperRightArrow;");

console.log("card");
const props = defineProps({
  project: {
    type: Object,
  },
});
</script>
