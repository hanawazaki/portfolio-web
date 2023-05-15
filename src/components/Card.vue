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
      <a href="#" class="flex justify-between items-center align-middle">
        <h4 class="card-title text-xl font-medium my-3 xxl:text-2xl">Project A</h4>
        <button
          class="px-2 py-0 border border-black rounded-full transition-all duration-300 ease-in-out hover:scale-105 md:px-2 md:py-0"
        >
          <label v-html="arrow" class="text-base md:text-sm"></label>
        </button>
      </a>
      <p class="card-text text-sm xxl:text-lg">
        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
        Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
      </p>
      <div class="card-categories flex justify-between mt-8 items-center">
        <div class="pills flex justify-between">
          <Pill :categories="pill" v-for="(pill, index) in pills" :key="index" />
        </div>
        <!-- <button class="p-2 border border-black rounded-full">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0122 0C6.10596 0 0.512207 5.73524 0.512207 12.8162C0.512207 18.4873 4.09033 23.2774 9.05908 24.9755C9.68408 25.0877 9.91846 24.7032 9.91846 24.3667C9.91846 24.0624 9.90283 23.0531 9.90283 21.9797C6.76221 22.5725 5.94971 21.1947 5.69971 20.4738C5.55908 20.1054 4.94971 18.9679 4.41846 18.6636C3.98096 18.4232 3.35596 17.8305 4.40283 17.8145C5.38721 17.7985 6.09033 18.7437 6.32471 19.1281C7.44971 21.0666 9.24658 20.5219 9.96533 20.1855C10.0747 19.3524 10.4028 18.7917 10.7622 18.4713C7.98096 18.1509 5.07471 17.0455 5.07471 12.1433C5.07471 10.7496 5.55908 9.59611 6.35596 8.69898C6.23096 8.37857 5.79346 7.06492 6.48096 5.30269C6.48096 5.30269 7.52783 4.96627 9.91846 6.61635C10.9185 6.32799 11.981 6.1838 13.0435 6.1838C14.106 6.1838 15.1685 6.32799 16.1685 6.61635C18.5591 4.95025 19.606 5.30269 19.606 5.30269C20.2935 7.06492 19.856 8.37857 19.731 8.69898C20.5278 9.59611 21.0122 10.7335 21.0122 12.1433C21.0122 17.0615 18.0903 18.1509 15.3091 18.4713C15.7622 18.8718 16.1528 19.6408 16.1528 20.8423C16.1528 22.5565 16.1372 23.9342 16.1372 24.3667C16.1372 24.7032 16.3716 25.1037 16.9966 24.9755C19.4781 24.1166 21.6344 22.4815 23.162 20.3002C24.6896 18.119 25.5115 15.5015 25.5122 12.8162C25.5122 5.73524 19.9185 0 13.0122 0Z"
              fill="black"
            />
          </svg>
        </button> -->
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
</script>
