<template>
  <header
    class="navigation flex justify-between mx-[16px] mt-[16px] md:mx-[50px] lg:mx-[75px] xl:mx-[120px] md:mt-[50px]"
  >
    <div class="w-full mx-auto">
      <div class="flex items-center">
        <RouterLink
          to="/"
          class="flex items-center navigation__logo flex w-32 text-base leading-4 font-medium md:text-[28px] md:leading-[34px] lg:text-[20px] lg:leading-[26px]"
        >
          <img src="../assets/logo-cat.svg" alt="" />
          <h4>Hanawazaki</h4>
        </RouterLink>
        <div class="w-full"></div>
        <div class="navigation__nav w-auto">
          <ul
            id="menu"
            class="navigation__list fixed bg-white inset-0 flex flex-col items-center justify-center lg:visible lg:flex-row lg:bg-transparent lg:relative lg:opacity-100"
            :class="[
              toggle ? 'opacity-0' : 'opacity-100 z-30',
              toggle ? 'invisible' : '',
            ]"
          >
            <li class="navigation__item mx-3 py-6 md:py-0">
              <RouterLink
                @click="handleToggle"
                to="/"
                active-class="active"
                class="navigation__link text-base md:text-lg xl:text-xl font-medium"
                >Home</RouterLink
              >
            </li>
            <li class="navigation__item mx-3 py-6 md:py-0">
              <RouterLink
                @click="handleToggle"
                to="/about"
                active-class="active"
                class="navigation__link text-base md:text-lg xl:text-xl font-medium"
                >About</RouterLink
              >
            </li>
            <li class="navigation__item mx-3 py-6 md:py-0">
              <RouterLink
                @click="handleToggle"
                to="/projects"
                active-class="active"
                class="navigation__link text-base md:text-lg xl:text-xl font-medium"
                >Projects</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="w-auto lg:hidden">
          <button
            :class="[
              toggle ? '' : 'fixed',
              toggle ? '' : 'right-0',
              toggle ? '' : 'top-0',
              toggle ? 'relative' : '',
            ]"
            @click="handleToggle"
            id="menu-toggler"
            class="flex z-50 items-center justify-center w-8 h-8 text-black focus:outline-none"
          >
            <svg
              class="fill-current"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
              />
              <path
                d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
              />
              <path
                d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const toggle = ref(true);

const handleToggle = () => {
  toggle.value = !toggle.value;
  console.log(toggle.value);
};
</script>

<style lang="scss">
.navigation__link {
  color: #c4c4c4;
  &:hover {
    border-bottom: 2px solid black;
  }
}
.navigation__link.active {
  color: black;
  border-bottom: 2px solid black;
}
</style>
