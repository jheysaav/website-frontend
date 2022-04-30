<template>
  <router-view></router-view>
</template>

<style>
  @tailwind base;

  ::selection {
    @apply text-gray-50 bg-primary-500;
  }

  ::-webkit-scrollbar {
    width: auto;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-gray-300;
    @apply border-2 border-solid border-gray-100 rounded-md;

    @apply dark:bg-gray-700;
    @apply border-2 border-solid dark:border-gray-800 rounded-md;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-800;
  }
</style>
