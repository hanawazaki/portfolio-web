<template>
  <footer class="text-center my-[50px]">
    <h4 class="font-medium text-sm xxl:text-lg">{{ date }} Hairul Ardhan Nawazaki</h4>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const date = ref("");

let d = new Date();
date.value = d.getFullYear();
</script>
