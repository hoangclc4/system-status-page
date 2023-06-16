<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

const props = withDefaults(defineProps<{ visible?: boolean }>(), {
  visible: false,
});
const themeMode = ref($q.localStorage.getItem('theme')) as Ref<string>;

const toggleTheme = () => {
  let mode = themeMode.value || 'light';
  console.log('mode', themeMode.value, mode);
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  mode = mode === 'dark' ? 'light' : 'dark';
  themeMode.value = mode;
  $q.localStorage.set('theme', mode);
};
onMounted(() => {});
</script>

<template>
  <header>
    <div
      class="w-full flex items-center justify-between px-80 py-4 bg-white dark:bg-gray-800 shadow"
    >
      <div class="mb-8 md:mb-0 text-gray-800 dark:text-gray-100">
        <a href="/" class="flex items-center content-start divide-x">
          <img class="logo !w-20" src="/logo.png" alt="logo" />
        </a>
      </div>
      <div class="links flex space-x-2 items-center leading-none font-medium">
        <a href="/" class="text-gray-700 dark:text-gray-200 text-4xl"
          >System Status</a
        >
        <button
          @click="toggleTheme()"
          type="button"
          class="inline-flex items-center p-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
        >
          <svg
            style="display: none"
            x-show="dark"
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
          <svg
            x-show="!dark"
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
          @click="$router.push('/history')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="-ml-1 mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 8l0 4l2 2"></path>
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
          </svg>
          History
        </button>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
        >
          <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8z"
              fill="currentColor"
            ></path>
          </svg>
          Report an Issue
        </button>
        <!-- <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
        >
          <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10.5002 19.2498c.9625 0 1.75-.7875 1.75-1.75H8.75024c0 .9625.7875 1.75 1.74996 1.75zm5.25-5.25V9.62478c0-2.68625-1.4262-4.93499-3.9375-5.52999v-.595c0-.72625-.5862-1.3125-1.3125-1.3125-.72621 0-1.31246.58625-1.31246 1.3125v.595c-2.5025.595-3.9375 2.83499-3.9375 5.52999v4.37502l-1.75 1.75v.875H17.5002v-.875l-1.75-1.75zm-1.75.875H7.00024V9.62478c0-2.17 1.32125-3.9375 3.49996-3.9375 2.1788 0 3.5 1.7675 3.5 3.9375v5.25002zM6.63274 3.56979L5.38149 2.31854c-2.1 1.60125-3.4825 4.06874-3.605 6.86874h1.75c.06198-1.10966.37347-2.19105.91128-3.16366.53781-.9726 1.28809-1.81136 2.19497-2.45383zM17.474 9.18728h1.75c-.1313-2.8-1.5138-5.26749-3.605-6.86874l-1.2425 1.25125c.903.64563 1.6499 1.48532 2.1859 2.4574.536.97208.8475 2.05188.9116 3.16009z"
            />
          </svg>
          Subscribe
        </button> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 250px;
}
</style>
