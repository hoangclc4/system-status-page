<script setup lang="ts">
import FooterPage from '~/components/main-components/footer-page.vue';
import HeaderPage from '~/components/main-components/header-page.vue';
</script>
<template>
  <div class="dark:bg-gray-700">
    <HeaderPage />
    <slot></slot>
    <FooterPage />
  </div>
</template>

<style scoped></style>
