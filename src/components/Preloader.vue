<template>
  <div class="overlay absolute z-40 inset-0 w-full h-dvh pt-20 pb-[5dvh] flex flex-col justify-center bg-black" :data-loaded="isLoaded">
    <div class="container">
      <slot />
      <span class="loader absolute text-sm text-white" role="status">{{ $t('preloader.loading') }}...</span>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const isLoaded = ref(false);
  document.documentElement.dataset.pageLoaded = isLoaded.value;
  // history.scrollRestoration = 'manual';
  ScrollTrigger.clearScrollMemory('manual');

  onMounted(() => {
    window.addEventListener('load', () => {
      isLoaded.value = true
      document.documentElement.dataset.pageLoaded = isLoaded.value
    })
  });
</script>

<style scoped>

  /* Page loading */
  .overlay[data-loaded="false"] {
    .loader {
      animation: anim-loader 500ms infinite;
    }
  }

  @keyframes anim-loader {
    0% {
      font-family: Arial, Helvetica, sans-serif;
    }

    20% {
      font-family: "Times New Roman", Times, serif;
    }

    40% {
      font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", sans-serif;
    }

    60% {
      font-family: "Courier New", Courier, monospace;
    }

    80% {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }

  /* Page loaded */
  .overlay[data-loaded="true"] {
    animation: anim-loaded 900ms 1200ms forwards;

    .loader {
      animation: none;
      display: none;
      opacity: 0;
      transform: translateY(.4rem);
      transition: all 0.2s linear;
      transition-behavior: allow-discrete;
    }
  }

  @keyframes anim-loaded {
    0% {
      height: 100vh;
    }

    50% {
      height: 105vh;
    }

    100% {
      height: 0;
      background-color: #fff;
    }
  }
</style>
