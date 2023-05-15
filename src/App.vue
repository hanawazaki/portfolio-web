<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="">
    <Navbar />
    <routerView />
    <Footer />
  </div>
</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,300&display=swap");

body {
  font-family: "Clash Display", sans-serif;
}
</style>
