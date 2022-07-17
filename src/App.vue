<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import AppHeader from "@/components/AppHeader.vue";

onBeforeMount(() => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("dark");
  }
});

window.matchMedia &&
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const html = document.getElementsByTagName("html")[0];
      if (e.matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    });
</script>

<style lang="scss">
@import "~@/styles/fonts";

::selection {
  @apply text-grey-50 bg-primary-500;
}

::-webkit-scrollbar {
  @apply w-2.5;
}

::-webkit-scrollbar-thumb {
  @apply bg-grey-300;
  @apply border-2 border-solid border-grey-50 rounded-md;

  @apply dark:bg-grey-800;
  @apply border-2 border-solid dark:border-grey-900 rounded-md;
}

::-webkit-scrollbar-track {
  @apply bg-grey-50 dark:bg-grey-900;
}
</style>
