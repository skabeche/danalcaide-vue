<template>
  <Header />
  <div class="wrapper relative pb-8 bg-horizon bg-bottom bg-no-repeat after:bg-circles after:absolute after:bottom-[12dvh] xs:after:bottom-[4dvh] 4xl:after:-bottom-[3dvh] after:w-full after:h-[170px] after:bg-[length:auto_100%] after:bg-center after:bg-repeat-x after:-z-10">
    <section class="container relative z-10 prose-lg prose-li:m-0 prose-li:p-0 prose-h2:text-xl prose-h2:font-normal prose-ul:pl-0 sm:prose-ul:pl-4 leading-relaxed mt-12 mb-[28rem] xs:mb-[24rem] sm:mb-80 xl:mb-72 2xl:mb-80 3xl:mb-72 text-pretty">
      <RouterView />
    </section>
    <Footer />
  </div>
</template>

<script setup>
  import { onMounted, watchEffect } from 'vue'
  import { useI18n } from "vue-i18n"
  import { useHead } from 'unhead'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Lenis from 'lenis'
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const { t } = useI18n()

  // A watcher doesn't seem to be the best practice for unhead library,
  // but I've not found any other effective method to make it reactive for translations
  // @see https://unhead.unjs.io/setup/vue/best-practices
  watchEffect(() => {
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
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(10)

    gsap.to(".wrapper", {
      "--bgSizeHorizon": "auto 75%",
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to("footer", {
      yPercent: -40,
      scrollTrigger: {
        trigger: "main",
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

    @keyframes anim-init-scroll {
      0% {
        overflow: hidden;
      }

      100% {
        overflow: auto;
      }
    }

    .wrapper {
      opacity: 0;
      animation: anim-init-wrapper 500ms 1900ms forwards;
    }

    @keyframes anim-init-wrapper {
      0% {
        opacity: 0;
        transform: translateY(-4vh);
        background-size: auto 85%;
      }

      100% {
        opacity: 1;
        transform: translateY(0vh);
        background-size: var(--bgSizeHorizon);
      }
    }
  }
</style>