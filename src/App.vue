<template>
  <VueLenis root ref="lenisRef" :options="{ autoRaf: false }" />
  <RouterView />
</template>

<script setup>
  import { watchEffect, ref, computed } from 'vue'
  import { useI18n } from "vue-i18n"
  import { useHead } from '@unhead/vue'
  import { VueLenis, useLenis } from 'lenis/vue'
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const { t } = useI18n()
  const lenisRef = ref()

  useHead({
    htmlAttrs: {
      lang: computed(() => t('languages.code')),
    },
    title: computed(() => `Dan Alcaide · ${t('meta.title')}`),
    meta: [
      {
        name: 'description',
        content: computed(() => t('meta.description')),
      },
      {
        property: 'og:title',
        content: computed(() => `Dan Alcaide · ${t('meta.title')}`),
      },
      {
        property: 'og:description',
        content: computed(() => t('meta.description')),
      },
    ],
  })

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
