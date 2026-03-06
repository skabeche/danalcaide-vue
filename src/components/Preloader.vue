<template>
  <div ref="overlayRef" class="overlay absolute z-40 inset-0 w-full h-[105dvh] pt-20 pb-[5dvh] flex flex-col justify-center bg-black text-white">
    <div class="container flex flex-col justify-end">
      <slot />
      <span ref="loaderRef" class="loader -mt-1 text-sm" role="status">
        {{ $t('preloader.loading') }}...
      </span>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, useTemplateRef } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  const isLoaded = ref(false);

  const overlayRef = useTemplateRef("overlayRef");
  const loaderRef = useTemplateRef("loaderRef");

  document.documentElement.dataset.pageLoaded = isLoaded.value;
  ScrollTrigger.clearScrollMemory("manual");

  onMounted(() => {
    const html = document.documentElement;
    const body = document.body;
    const logo = overlayRef.value.querySelector('.logo');
    const svgPaths = overlayRef.value.querySelectorAll('.logo svg path');

    // Lock scroll during page loading.
    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    window.addEventListener("load", () => {
      isLoaded.value = true;
      document.documentElement.dataset.pageLoaded = isLoaded.value;

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          // Unlock scroll after the loading animation ends.
          html.classList.remove("scroll-lock")
          body.classList.remove("scroll-lock")
        }
      });

      tl
        .to(loaderRef.value, {
          autoAlpha: 0,
          y: 8,
          duration: 0.3,
        })
        .to(logo, {
          y: 30,
          duration: 0.7,
          ease: "power4.inOut",
        }, '0.4')
        .to(svgPaths, {
          y: 10,
          stagger: {
            each: 0.02,
            from: "center"
          },
          duration: 0.3,
          ease: "power4.in",
        }, '<')
        .to(overlayRef.value, {
          height: 0,
          color: '#000000',
          backgroundColor: "transparent",
          duration: 0.6,
          ease: "power4.in",
        })
        .to(svgPaths, {
          y: 0,
          stagger: {
            each: 0.025,
            from: "center"
          },
          duration: 0.3,
          ease: "power4.in",
        }, '<')
        .to(logo, {
          y: 0,
          duration: 0.1,
          ease: "power4.out",
        })
        .play();
    })
  })
</script>

<style scoped>

  /* Page loading */
  html[data-page-loaded="false"] {
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
  html[data-page-loaded="true"] {
    .loader {
      animation: none;
    }
  }
</style>
