<template>
  <header
    class="flex items-center justify-between px-2 py-4 bg-gray-50 dark:bg-gray-900 select-none md:px-4 md:py-6"
  >
    <div class="flex flex-col md:flex-row items-center justify-center">
      <IconButton class="flex md:hidden" @click="toggleMenu"
        ><MenuAlt1Icon class="w-5 h-5"
      /></IconButton>
      <nav>
        <ul
          :class="`flex flex-col items-center justify-center absolute p-2 space-y-2 rounded-lg bg-gray-100 dark:bg-gray-800 max-w-[80%] max-h-[60%] shadow-xl ${
            menuIsOpen ? 'translate-x-0 scale-100' : '-translate-x-full scale-0'
          } transition-transform motion-reduce:transition-none duration-300 md:flex-row md:relative md:translate-x-0 md:scale-100 md:bg-gray-50 md:dark:bg-gray-900 md:shadow-none md:space-y-0 md:space-x-2 md:max-w-full md:max-h-full`"
        >
          <li
            v-for="item in navigationItems"
            :key="item.name"
            :class="`px-6 py-2 hover:bg-gray-200 hover:dark:bg-gray-700/75 rounded-lg ${
              route.fullPath === item.path ||
              (route.fullPath.startsWith(item.path) && item.path !== '/')
                ? 'text-gray-800 dark:text-gray-100'
                : 'text-gray-600 dark:text-gray-500'
            } font-[420] transition-all duration-500 motion-reduce:transition-none md:hover:bg-gray-100 md:hover:dark:bg-gray-800`"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex">
      <IconButton v-if="themeIsDark" @click="toggleTheme"
        ><SunIcon class="w-5 h-5"
      /></IconButton>
      <IconButton v-else @click="toggleTheme"
        ><MoonIcon class="w-5 h-5"
      /></IconButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IconButton from '@/components/IconButton.vue'
import { MenuAlt1Icon, MoonIcon, SunIcon } from '@heroicons/vue/outline'

const navigationItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
]

const route = useRoute()
const themeIsDark = ref(false)
const menuIsOpen = ref(false)
const html = document.getElementsByTagName('html')[0]

onMounted(() => {
  html.classList.contains('dark') && (themeIsDark.value = true)
})

window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches) {
      themeIsDark.value = true
    } else {
      themeIsDark.value = false
    }
  })

const toggleTheme = () => {
  themeIsDark.value = !themeIsDark.value
  themeIsDark.value ? html.classList.add('dark') : html.classList.remove('dark')
}

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value
}
</script>

<style lang="scss">
@tailwind base;

header a.router-link-active {
  @apply text-gray-800 dark:text-gray-100;
}
</style>
