<script setup>
import { ref } from 'vue';

defineProps({});

const count = ref(0);
</script>

<template>
  <footer
    class="py-16 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
  >
    <div class="container flex justify-between">
      <div>
        Copyright© Uni-Voice Business Plan＆Planning Inc. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
