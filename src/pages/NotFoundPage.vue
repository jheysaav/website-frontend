<template>
  <default-layout
    title="Page not found"
    description="The page you're looking for doesn't exist"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        src="../assets/illustrations/taken.svg"
        alt="Page not found illustration"
        class="w-full max-w-sm"
      />
      <h1 class="mt-4 font-bold text-4xl">Page not found</h1>
      <p>
        The page you're looking for doesn't exist. You can
        <router-link to="/" class="underline text-primary-500"
          >return to home</router-link
        >
        or wait {{ seconds }} seconds.
      </p>
    </div>
  </default-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const seconds = ref(10);

setInterval(() => {
  seconds.value = seconds.value - 1;
  seconds.value <= 0 && clearInterval();
}, 1000);

setTimeout(() => {
  router.push("/");
}, 10000);
</script>
