<template>
  <VueLenis root ref="lenisRef" :options="{ autoRaf: false }" />
  <RouterView />
</template>

<script setup>
  import { watchEffect, ref } from 'vue'
  import { useI18n } from "vue-i18n"
  import { useHead } from 'unhead'
  import { VueLenis, useLenis } from 'lenis/vue'
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const { t } = useI18n()
  const lenisRef = ref()

  watchEffect(() => {
    // Note: watchEffect is needed because `t()` doesn't trigger reactivity in useHead()
    // A watcher doesn't seem to be the best practice for unhead library,
    // but I've not found any other effective method to make it reactive for translations
    // @see https://v1.unhead.unjs.io/setup/vue/best-practices
    useHead({
      htmlAttrs: {
        lang: t('languages.code'),
      },
      title: `Dan Alcaide · ${t('meta.title')}`,
      meta: [
        {
          name: 'description',
          content: t('meta.description')
        },
        {
          property: 'og:title',
          content: `Dan Alcaide · ${t('meta.title')}`,
        },
        {
          property: 'og:description',
          content: t('meta.description'),
        },
      ],
    });
  });

  // GSAP/Lenis integration.
  // @see https://github.com/darkroomengineering/lenis/blob/main/packages/vue/README.md
  watchEffect((onInvalidate) => {
    if (!lenisRef.value?.lenis) return

    //  if using GSAP ScrollTrigger, update ScrollTrigger on scroll
    lenisRef.value.lenis.on('scroll', ScrollTrigger.update)

    // add the Lenis requestAnimationFrame (raf) method to GSAP's ticker
    // this ensures Lenis's smooth scroll animation updates on each GSAP tick
    function update(time) {
      lenisRef.value.lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)

    // disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0)

    // clean up GSAP's ticker from the previous execution of watchEffect, or when the effect is stopped
    onInvalidate(() => {
      gsap.ticker.remove(update)
    })
  })

</script>

<style>

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

  html[data-page-loaded="true"] main {
    opacity: 0;
    animation: anim-init-main 500ms 1900ms forwards;
  }

  @keyframes anim-init-main {
    0% {
      opacity: 0;
      margin-top: -4vh;
      background-size: auto 90%;
    }

    100% {
      opacity: 1;
      margin-top: 0;
      background-size: auto 95%;
    }
  }
</style>
