<template>
  <Header />
  <main class="h-dvh relative overflow-hidden before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-50 before:[clip-path:polygon(0_63%,100%_15%,100%_100%,0%_100%)]">
    <RouterView />
    <Garden />
  </main>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Garden from "@/components/Garden.vue";
</script>

<style scoped>

  /* Page loaded */
  html[data-page-loaded="true"] {
    overflow: hidden;
    animation: anim-init-scroll 500ms 1900ms forwards;

  }

  @keyframes anim-init-scroll {
    0% {
      overflow: hidden;
    }

    100% {
      overflow: auto;
    }
  }

  html[data-page-loaded="true"] {
    main {
      opacity: 0;
      animation: anim-init-main 500ms 1700ms forwards;
    }
  }

  @keyframes anim-init-main {
    0% {
      opacity: 0;
      /* margin-top: 4vh; */
      transform: translateY(4vh);
      background-size: auto 90%;
    }

    100% {
      opacity: 1;
      /* margin-top: 0; */
      transform: translateY(0);
      background-size: auto 95%;
    }
  }
</style>
