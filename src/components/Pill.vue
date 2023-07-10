<template>
  <RouterLink
    :to="`/projects?${categories}`"
    @click="() => handleFilter(categories)"
    class="border border-black rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium md:text-xs xxl:text-base hover:bg-black hover:text-white"
    :class="size === 'lg' ? 'px-4 py-2' : 'px-2'"
  >
    {{ categories }}
  </RouterLink>
</template>

<script setup>
import { ref } from "vue";

const skill = ref("");

const props = defineProps({
  categories: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    default: "sm",
  },
});

const emit = defineEmits(["filter"]);

const handleFilter = (categories) => {
  skill.value = categories;
  emit("filter", skill.value);
  console.log("child", categories);
};
</script>
