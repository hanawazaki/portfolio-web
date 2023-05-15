<template>
  <button
    class="px-4 py-2 border border-black rounded-full transition-all duration-300 ease-in-out hover:scale-105"
  >
    <label v-html="symbol"></label>

    <label>
      {{ props.textButton }}
    </label>
  </button>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  textButton: {
    type: String,
    required: true,
  },
});

const symbol = ref(null);
const words = ref("");

if (props.textButton.indexOf("&") > -1) {
  symbol.value = props.textButton;
  console.log(props.textButton);
} else {
  words.value = props.textButton;
}
</script>
