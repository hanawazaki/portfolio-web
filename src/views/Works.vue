<template>
  <section
    class="projects mx-[16px] mt-8 mb-10 md:mb-100px md:mt-[100px] md:mx-[50px] lg:mx-[75px] xl:mx-[120px]"
  >
    <h1 class="projects__title text-2xl font-medium text-center mb-8">
      My Exploration Projects
    </h1>
    <div class="pills flex flex-wrap px-20 mb-8">
      <Pill
        :isSelected="selectedSkill"
        size="lg"
        :categories="pill"
        v-for="(pill, index) in pills"
        :key="index"
        @filter="handleFilter"
      />

      <RouterLink
        to="/projects"
        class="border border-black px-4 py-2 rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium md:text-xs xxl:text-base hover:bg-black hover:text-white"
        @click="() => handleFilter(categories)"
      >
        All
      </RouterLink>
    </div>
    <div
      v-if="filteredProjects.length > 0"
      class="projects__list grid items-center justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        v-for="(project, index) in filteredProjects"
        :project="project"
        :key="index"
      />
    </div>
    <div v-else>
      <h1 class="flex justify-center text-base font-medium italic">
        Tidak ada data
      </h1>
    </div>
  </section>
</template>

<script setup>
import Card from "../components/Card.vue";
import Skills from "../components/Skills.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
    categories: ["Laravel", "Tailwind"],
  },
  {
    id: 2,
    name: "Vue Chat app",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["vueJs", "firebase"],
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

const filteredProjects = ref([]);
const selectedSkill = ref();

const router = useRouter();
onMounted(() => {
  const currentRoute = router.currentRoute.path;
  const getFilter = router.currentRoute.value.query.filter;

  selectedSkill.value = getFilter;
  console.log("getFilter", getFilter);
  console.log("selectedSkill", selectedSkill.value);
  if (getFilter) {
    handleFilter(getFilter);
  } else {
    filteredProjects.value = projects.value;
  }
});

const handleFilter = (skill) => {
  selectedSkill.value = skill;

  if (skill !== "" && skill !== undefined) {
    filteredProjects.value = projects.value.filter((item) =>
      item.categories
        .map((category) => category.toLowerCase())
        .includes(skill.toLowerCase())
    );
  } else {
    filteredProjects.value = projects.value;
  }
};
</script>

<style>
.projects__list:last-child {
  gap: 0;
}
</style>
