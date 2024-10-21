<template>
  <section ref="refAbout" class="about container">
    <div class="lg:w-[60%] prose-xl prose-li:m-0 prose-li:p-0 prose-ul:pl-0 leading-relaxed mt-12 mb-[24rem] xs:mb-[24rem] sm:mb-80 xl:mb-72 2xl:mb-80 3xl:mb-72 text-balance">
      <h1 class="mb-0 text-5xl md:text-6xl lg:text-[5rem] font-alternateGothic2 uppercase" v-html="$t('yo.title')"></h1>
      <p>{{ $t('yo.text1') }}</p>
      <p>{{ $t('yo.text2') }}</p>
      <p>{{ $t('yo.text3') }}</p>
      <ul>
        <li>{{ $t('yo.timeline.13.text') }} <a href="https://youtu.be/VrUvnLQ5-h4" target="_blank">{{ $t('yo.timeline.13.linkText') }}</a>.</li>
        <li>{{ $t('yo.timeline.16.text') }} <a href="https://youtu.be/qFfnlYbFEiE" target="_blank">{{ $t('yo.timeline.16.linkText') }}</a>.</li>
        <li>{{ $t('yo.timeline.18.text') }} <a href="https://en.wikipedia.org/wiki/File:Attempted_restoration_of_Ecce_Homo.jpg#/media/File:Attempted_restoration_of_Ecce_Homo.jpg" target="_blank">{{ $t('yo.timeline.18.linkText') }}</a>.</li>
        <li>{{ $t('yo.timeline.21.text') }} <a href="https://youtu.be/gkLqopaEHpU" target="_blank">{{ $t('yo.timeline.21.linkText') }}</a>.</li>
        <li>{{ $t('yo.timeline.23.text') }}</li>
        <li>{{ $t('yo.timeline.27.text') }} <a href="https://web.archive.org/web/20081005040052/http://www.danalcaide.es/" target="_blank">{{ $t('yo.timeline.27.linkText') }}</a>.</li>
        <li>{{ $t('yo.timeline.33.text') }} <a href="https://youtu.be/2jf7FmNt4Tg" target="_blank">{{ $t('yo.timeline.33.linkText') }}</a> {{ $t('yo.timeline.33.text2') }}.</li>
      </ul>
    </div>
  </section>
  <section>
    <Garden />
    <div class="info border-circles pt-8 pb-40 text-white bg-black prose-xl prose-a:text-gray-400 prose-a:after:bg-gray-400 prose-li:m-0 prose-li:p-0 prose-h2:text-4xl lg:prose-h2:text-5xl prose-h2:font-alternateGothic2 prose-h2:uppercase prose-ul:pl-0">
      <div class="container grid lg:grid-cols-2 gap-x-32">
        <AnimationTimeline>
          <Projects />
        </AnimationTimeline>
        <AnimationTimeline :delay=".5">
          <Skills />
        </AnimationTimeline>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import Garden from "@components/Garden.vue";
  import Projects from '@components/Projects.vue'
  import Skills from '@components/Skills.vue'
  import AnimationTimeline from "@components/AnimationTimeline.vue";

  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const about = useTemplateRef('refAbout')

  onMounted(() => {
    gsap.to(about.value, {
      yPercent: 40,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });
</script>
