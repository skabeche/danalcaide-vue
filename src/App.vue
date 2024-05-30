<template>
  <Header />
  <div class="wrapper bg-horizon bg-bottom bg-no-repeat">
    <section class="relative z-10 prose-lg prose-li:m-0 prose-li:p-0 prose-h2:text-xl prose-h2:font-normal prose-ul:pl-4 leading-relaxed mt-12 mb-80 xl:mb-72 2xl:mb-64 text-pretty">
      <div class="container">
        <h1 class="text-3xl md:text-4xl lg:text-5xl sm:text-balance">Desarrollador Web Full-Stack que se ha topado con el mundo del Diseño Web y Gráfico como freelance o parte de un equipo multidisciplinario.</h1>
        <div class="lg:w-[55%] 3xl:w-3/4">
          <p>Además de entender los aspectos de usabilidad, accesibilidad, estética, interactividad y comunicación involucrados en el proceso de diseño, soy un músico hipnotizado por la música que lleva rascando la guitarra desde hace más de 25 años.</p>
          <ul>
            <li>A los 13 años di <a href="https://youtu.be/VrUvnLQ5-h4" target="_blank">mi primer beso</a>.</li>
            <li>A los 16 adquirí mi <a href="https://youtu.be/qFfnlYbFEiE" target="_blank">Fender Stratocaster</a>.</li>
            <li>A los 18 años instalé <a href="https://en.wikipedia.org/wiki/File:Attempted_restoration_of_Ecce_Homo.jpg#/media/File:Attempted_restoration_of_Ecce_Homo.jpg" target="_blank">Photoshop</a>.</li>
            <li>A los 21 fundé la banda <a href="https://youtu.be/gkLqopaEHpU" target="_blank">Skizophonic</a>.</li>
            <li>A los 23 conseguí mi primer trabajo como Desarrollador y Diseñador Web.</li>
            <li>A los 27 años subí <a href="https://web.archive.org/web/20081005040052/http://www.danalcaide.es/" target="_blank">mi primer portfolio</a>.</li>
            <li>A los 33 me mudé a <a href="https://youtu.be/2jf7FmNt4Tg" target="_blank">Belfast</a> para vivir una aventura.</li>
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
  import { onMounted } from 'vue';
  import Header from './components/Header.vue'
  import Projects from './components/Projects.vue'
  import Skills from './components/Skills.vue'
  import Footer from './components/Footer.vue'
  import Lenis from 'lenis'
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
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