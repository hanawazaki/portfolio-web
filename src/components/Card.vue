<template>
  <div
    class="card relative text-start w-auto md:w-[300px] lg:w-[275px] xl:w-[300px] xxl:w-[375px] rounded-xl mb-5 md:mb-10 border border-black transition-all duration-300 ease-in-out transform"
  >
    <div class="flex h-auto absolute z-10 right-0 top-2">
      <a
        target="_blank"
        :href="project.link"
        class="w-8 p-1 mr-2 bg-white rounded-full mb-2 transition-all duration-300 ease-in-out hover:scale-105"
      >
        <img
          src="../assets/github.svg"
          :alt="project.name"
          class="w-[1.5rem] m-auto h-auto"
        />
      </a>
    </div>
    <img
      class="card-img-top w-full pt-5 xxl:h-auto rounded-t-xl"
      src="../assets/laptop.svg"
      alt="project"
    />

    <div class="card-body px-5 py-2">
      <a
        href="#"
        class="flex flex-row items-center gap-2 transition-all ease-in duration-150 hover:scale-105"
      >
        <h4 class="card-title text-base font-medium my-3 xxl:text-2xl">
          {{ project.name }}
        </h4>
        <i
          v-html="arrow"
          class="text-base md:text-[1.25rem] md:leading-5 text-center"
        ></i>
      </a>
      <p class="card-text text-xs xxl:text-lg">
        {{ project.description }}
      </p>
      <div class="card-categories flex justify-between mt-8 items-center">
        <div class="pills flex justify-between">
          <Pill
            :categories="pill"
            v-for="(pill, index) in project.categories"
            :key="index"
            size="sm"
            isSelected=""
          />
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Pill from "../components/Pill.vue";
import RoundButton from "./RoundButton.vue";

const pills = ref(["vuejs", "tailwind"]);
const arrow = ref("&UpperRightArrow;");

const props = defineProps({
  project: {
    type: Object,
  },
});
</script>
