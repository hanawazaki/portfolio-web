<template>
  <div class="border border-black rounded-full w-auto px-2 mr-2 md:text-xs xxl:text-base">
    {{ categories }}
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: String,
    required: true,
  },
});
</script>
