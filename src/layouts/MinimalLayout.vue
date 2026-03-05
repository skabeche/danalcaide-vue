<template>
  <Header />
  <main class="h-dvh relative before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-50 before:[clip-path:polygon(0_63%,100%_15%,100%_100%,0%_100%)]">
    <RouterView />
    <Garden />
  </main>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Garden from "@/components/Garden.vue";
</script>

<style scoped>
  :deep(.garden .tree) {
    height: 82vh;
  }
</style>
