<template>
  <section
    class="projects mx-[16px] mt-8 mb-10 md:mb-100px md:mt-[100px] md:mx-[50px] lg:mx-[75px] xl:mx-[120px]"
  >
    <h1 class="projects__title text-2xl font-medium text-center mb-8">
      My Exploration Projects
    </h1>
    <div class="pills flex flex-wrap px-20 mb-8">
      <Pill
        size="lg"
        :categories="pill"
        v-for="(pill, index) in pills"
        :key="index"
        @filter="handleFilter"
      />
    </div>
    <div
      class="projects__list grid items-center grid-cols-1 gap-12 xl:gap-0 xxl:gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        v-for="(project, index) in projects"
        :project="project"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup>
import Card from "../components/Card.vue";
import Skills from "../components/Skills.vue";
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

const projects = ref([
  {
    id: 1,
    name: "Luxspace laravel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["laravel", "tailwind"],
  },
  {
    id: 2,
    name: "Vue Chat app",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["vuejs", "firebase"],
  },
  {
    id: 3,
    name: "Cook Recipes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["Reactjs", "firebase"],
  },
]);

console.log("works");
const handleFilter = (skill) => {};
</script>
