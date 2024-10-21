<template>
  <footer ref="refFooter" class="leading-normal lg:text-balance prose-xl prose-li:m-0 prose-li:p-0 prose-h2:text-5xl prose-ul:pl-0 bg-circles bg-repeat-x bg-[length:auto_20%]">
    <div ref="refWrapper" class="wrapper pt-48 pb-16 bg-circles bg-repeat-x bg-[length:auto_20%] sm:bg-[length:auto_30%]">
      <AnimationTimeline>
        <div class="container">
          <p>{{ $t('footer.social') }} <a href="mailto:info@danalcaide.com">info@danalcaide.com</a> · <a href="https://github.com/skabeche">Github</a> · <a href="https://www.linkedin.com/in/danalc">Linkedin</a></p>
          <p>{{ $t('footer.text') }} <a :href="$t('footer.linkText')" target="_blank">Wikipedia</a>.</p>
          <p>
            &copy;{{ currentYear }} Dan Alcaide ·
            <a href="https://github.com/skabeche/danalcaide-vue">{{ $t('footer.code') }}</a> · {{ $t('footer.ingredients') }}
            <span class="inline-flex gap-x-2 [&_svg]:inline-block">
              <a href="https://youtu.be/pDIDo4kJIsU" target="_blank">
                <Music :size="20" :stroke-width="1.75" />
              </a>
              <a href="https://www.amazon.co.uk/Morning-Vietnam-Fresh-Promptly-Delivered/dp/B00TO0PCNM" target="_blank">
                <Coffee :size="20" :stroke-width="1.75" />
              </a>
              <a href="https://www.imdb.com/title/tt0082198" target="_blank">
                <Popcorn :size="20" :stroke-width="1.75" />
              </a>
            </span>
          </p>
        </div>
      </AnimationTimeline>
    </div>
  </footer>
</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import { Music, Coffee, Popcorn } from 'lucide-vue-next';
  import AnimationTimeline from "@components/AnimationTimeline.vue";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const currentYear = new Date().getFullYear();
  const footer = useTemplateRef('refFooter');
  const wrapper = useTemplateRef('refWrapper');

  onMounted(() => {
    gsap.to(footer.value, {
      "--bgPositionFooter1": "30% 60px",
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom top",
        scrub: 2
      }
    });
    gsap.to(wrapper.value, {
      "--bgPositionFooter2": "50% 40px",
      scrollTrigger: {
        trigger: "main",
        start: "center top",
        end: "bottom top",
        scrub: 1
      }
    });
  });
</script>

<style scoped>
  footer {
    background-position: var(--bgPositionFooter1);
  }

  footer .wrapper {
    background-position: var(--bgPositionFooter2);
  }
</style>