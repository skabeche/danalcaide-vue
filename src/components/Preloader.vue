<template>
  <div ref="overlayRef" class="overlay absolute inset-0 w-full h-dvh pt-20 pb-[5dvh] flex flex-col justify-center bg-black" :data-loaded="isLoaded">
    <div class="container">
      <slot />
      <span class="loader absolute text-sm text-white" role="status">{{ $t('preloader.loading') }}...</span>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, useTemplateRef } from 'vue';
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const isLoaded = ref(false);
  const overlayRef = useTemplateRef('overlayRef');

  document.documentElement.dataset.pageLoaded = isLoaded.value;
  // history.scrollRestoration = 'manual';
  ScrollTrigger.clearScrollMemory('manual');

  onMounted(() => {
    // Lock scroll during page loading.
    document.querySelector('html').classList.add('scroll-lock');
    document.querySelector('body').classList.add('scroll-lock');

    window.addEventListener('load', () => {
      isLoaded.value = true
      document.documentElement.dataset.pageLoaded = isLoaded.value
    })

    overlayRef.value.addEventListener('animationend', () => {
      // Unlock scroll after the loading animation ends.
      document.querySelector('html').classList.remove('scroll-lock');
      document.querySelector('body').classList.remove('scroll-lock');
    });
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
