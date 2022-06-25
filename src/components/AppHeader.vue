<template>
  <header
    class="flex items-center justify-between px-3 pt-4 pb-6 mx-auto max-w-3xl bg-grey-50 dark:bg-grey-900 select-none md:pt-6 md:pb-12 2xl:max-w-5xl"
  >
    <div class="flex flex-col md:flex-row items-center justify-center">
      <IconButton
        class="flex md:hidden"
        title="Show and hide the navigation menu"
        @click="toggleMenu"
        ><MenuAlt1Icon class="w-5 h-5"
      /></IconButton>
      <nav>
        <ul
          :class="`flex flex-col justify-center absolute py-1 px-2 mt-1.5 space-y-2 rounded-lg bg-grey-100 dark:bg-grey-800 max-w-[80%] max-h-[60%] shadow-xl ${
            menuIsOpen ? 'translate-x-0 scale-100' : '-translate-x-full scale-0'
          } transition-transform motion-reduce:transition-none duration-300 md:flex-row md:relative md:translate-x-0 md:scale-100 md:bg-grey-50 md:dark:bg-grey-900 md:shadow-none md:space-y-0 md:space-x-2 md:m-0 md:p-0 md:max-w-full md:max-h-full`"
        >
          <li v-for="item in navigationItems" :key="item.name" class="flex">
            <router-link
              :to="item.path"
              :class="`px-3 py-2 w-full hover:bg-grey-200 hover:dark:bg-grey-700/75 rounded-lg ${
                route.fullPath === item.path ||
                (route.fullPath.startsWith(item.path) && item.path !== '/')
                  ? 'text-grey-800 dark:text-grey-100'
                  : 'text-grey-600 dark:text-grey-500'
              } font-[450] transition-all duration-500 motion-reduce:transition-none md:hover:dark:bg-grey-800`"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex">
      <IconButton
        title="Toggle between light and dark theme"
        @click="toggleTheme"
        ><SunIcon v-if="themeIsDark" class="w-5 h-5" /><MoonIcon
          v-else
          class="w-5 h-5"
      /></IconButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import IconButton from "@/components/IconButton.vue";
import { MenuAlt1Icon, MoonIcon, SunIcon } from "@heroicons/vue/outline";

const navigationItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const route = useRoute();
const themeIsDark = ref(false);
const menuIsOpen = ref(false);
const html = document.getElementsByTagName("html")[0];

onMounted(() => {
  html.classList.contains("dark") && (themeIsDark.value = true);
});

window.matchMedia &&
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        themeIsDark.value = true;
      } else {
        themeIsDark.value = false;
      }
    });

const toggleTheme = () => {
  themeIsDark.value = !themeIsDark.value;
  themeIsDark.value
    ? html.classList.add("dark")
    : html.classList.remove("dark");
};

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>
