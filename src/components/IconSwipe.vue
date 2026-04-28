<template>
  <div ref="iconSwipeRef" class="block sm:hidden fixed z-40 bottom-0 right-0 p-4 text-white mix-blend-difference">
    <svg class="swipe hidden touch:block hybrid-device:block" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
      <path d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zM1 9l3 3l3-3H5V3H3v6z" />
    </svg>
    <svg class="arrow block touch:hidden hybrid-device:hidden" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
      <path d="M9 4h6v8h4.84L12 19.84L4.16 12H9z" />
    </svg>
  </div>
</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const iconSwipeRef = useTemplateRef('iconSwipeRef')

  onMounted(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(iconSwipeRef.value, { autoAlpha: 0 });

    gsap.to(iconSwipeRef.value, {
      yPercent: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      paused: isReducedMotion,
    });

    gsap.to(iconSwipeRef.value, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".projects-info",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        // markers: true,
      }
    });
  })
</script>
