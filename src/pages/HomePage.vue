<template>
  <h1 class="text-3xl md:text-4xl lg:text-5xl sm:text-balance">{{ $t('yo.title') }}</h1>
  <div class="lg:w-[55%]">
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
</template>

<script setup>
  import Projects from '@components/Projects.vue'
  import Skills from '@components/Skills.vue'
</script>