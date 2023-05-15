<template>
  <section
    class="projects mx-[16px] mt-8 mb-10 md:mb-100px md:mt-[100px] md:mx-[50px] lg:mx-[75px] xl:mx-[120px]"
  >
    <h1 class="projects__title text-2xl font-medium text-center mb-8">My Works</h1>
    <div
      class="projects__list grid items-center grid-cols-1 gap-12 xl:gap-0 xxl:gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card v-for="(card, index) in 9" :key="index" />
    </div>
  </section>
</template>

<script setup>
import Card from "../components/Card.vue";
</script>
