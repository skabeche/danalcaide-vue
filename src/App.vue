<template>
  <Header />
  <div class="wrapper bg-horizon bg-bottom bg-no-repeat">
    <section class="relative z-10 prose-lg prose-li:m-0 prose-li:p-0 prose-h2:text-xl prose-h2:font-normal prose-ul:pl-4 leading-relaxed mt-12 mb-80 xl:mb-72 2xl:mb-80 min-[1700px]:mb-72 text-pretty">
      <div class="container">
        <h1 class="text-3xl md:text-4xl lg:text-5xl sm:text-balance">{{ $t('yo.title') }}</h1>
        <div class="lg:w-[55%] 3xl:w-3/4">
          <p>{{ $t('yo.text') }}</p>
          <ul>
            <li>{{ $t('yo.timeline.13.text') }} <a href="https://youtu.be/VrUvnLQ5-h4" target="_blank">{{ $t('yo.timeline.13.linkText') }}</a>.</li>
            <li>{{ $t('yo.timeline.16.text') }} <a href="https://youtu.be/qFfnlYbFEiE" target="_blank">{{ $t('yo.timeline.16.linkText') }}</a>.</li>
            <li>{{ $t('yo.timeline.18.text') }} <a href="https://en.wikipedia.org/wiki/File:Attempted_restoration_of_Ecce_Homo.jpg#/media/File:Attempted_restoration_of_Ecce_Homo.jpg" target="_blank">{{ $t('yo.timeline.18.linkText') }}</a>.</li>
            <li>{{ $t('yo.timeline.21.text') }} <a href="https://youtu.be/gkLqopaEHpU" target="_blank">{{ $t('yo.timeline.21.linkText') }}</a>.</li>
            <li>{{ $t('yo.timeline.23.text') }}</li>
            <li>{{ $t('yo.timeline.27.text') }} <a href="https://web.archive.org/web/20081005040052/http://www.danalcaide.es/" target="_blank">{{ $t('yo.timeline.27.linkText') }}</a>.</li>
            <li>{{ $t('yo.timeline.33.text') }} <a href="https://youtu.be/2jf7FmNt4Tg" target="_blank">{{ $t('yo.timeline.33.linkText') }}</a>.</li>
          </ul>
          <Projects />
          <Skills />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
  import { onMounted, watchEffect } from 'vue'
  import { useI18n } from "vue-i18n"
  import { useHead } from 'unhead'
  import Header from './components/Header.vue'
  import Projects from './components/Projects.vue'
  import Skills from './components/Skills.vue'
  import Footer from './components/Footer.vue'
  import Lenis from 'lenis'
  import { gsap } from "gsap";
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

    lenis.on('scroll', (e) => {
      // console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(10)

    gsap.to(".wrapper", {
      "--bgSizeHorizon": "100% 85%",
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

  /* Page loading */
  body {
    overflow: hidden;
  }

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
      background-size: var(--bgSizeHorizon);
      animation: anim-init-main 500ms 1900ms forwards;
    }

    @keyframes anim-init-main {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
        background-size: var(--bgSizeHorizon);
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
      }

      100% {
        opacity: 1;
        transform: translateY(0vh);
      }
    }
  }
</style>