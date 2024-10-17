<template>
  <Header />
  <main ref="refMain" class="bg-horizon bg-bottom bg-no-repeat">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
  import { onMounted, watchEffect, useTemplateRef } from 'vue'
  import { useI18n } from "vue-i18n"
  import { useHead } from 'unhead'
  import Header from '@components/Header.vue'
  import Footer from '@components/Footer.vue'
  import Lenis from 'lenis'
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const { t } = useI18n()
  const main = useTemplateRef('refMain');

  watchEffect(() => {
    // A watcher doesn't seem to be the best practice for unhead library,
    // but I've not found any other effective method to make it reactive for translations
    // @see https://unhead.unjs.io/setup/vue/best-practices
    useHead({
      htmlAttrs: {
        lang: t('languages.code'),
      },
      title: 'Dan Alcaide · ' + t('meta.title'),
      meta: [
        {
          name: 'description',
          content: t('meta.description')
        },
        {
          property: 'og:title',
          content: 'Dan Alcaide · ' + t('meta.title'),
        },
        {
          property: 'og:description',
          content: t('meta.description'),
        },
      ],
    });
  });

  onMounted(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smoothTouch: false
    });

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    gsap.to(main.value, {
      "--bgSizeHorizon": "auto 100%",
      scrollTrigger: {
        trigger: main.value,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });
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

  main {
    opacity: 0;
    animation: anim-init-main 500ms 1900ms forwards;
  }

  @keyframes anim-init-main {
    0% {
      opacity: 0;
      transform: translateY(-4vh);
      background-size: auto 90%;
    }

    100% {
      opacity: 1;
      transform: translateY(0vh);
      background-size: var(--bgSizeHorizon);
    }
  }
</style>
