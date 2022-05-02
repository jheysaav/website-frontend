<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    const html = document.getElementsByTagName('html')[0]
    html.classList.add('dark')
  }
})

window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    const html = document.getElementsByTagName('html')[0]
    if (e.matches) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  })
</script>

<style lang="scss">
@import '~@/styles/fonts';
@tailwind base;

::selection {
  @apply text-gray-50 bg-primary-500;
}

::-webkit-scrollbar {
  @apply w-2.5;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
  @apply border-2 border-solid border-gray-50 rounded-md;

  @apply dark:bg-gray-800;
  @apply border-2 border-solid dark:border-gray-900 rounded-md;
}

::-webkit-scrollbar-track {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
