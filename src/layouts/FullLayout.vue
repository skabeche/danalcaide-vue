<template>
  <Header class="h-28" />
  <main class="bg-horizon bg-position-[46%_50%] 4xl:bg-top bg-no-repeat  overflow-hidden">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style scoped>

  /* Page loaded */
  html[data-page-loaded="true"] {
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
      animation: anim-init-main 500ms 1900ms forwards;
    }
  }

  @keyframes anim-init-main {
    0% {
      opacity: 0;
      margin-top: -4vh;
      /* transform: translateY(-4vh); */
      background-size: auto 90%;
    }

    100% {
      opacity: 1;
      margin-top: 0;
      /* transform: translateY(0); */
      background-size: auto 95%;
    }
  }
</style>
