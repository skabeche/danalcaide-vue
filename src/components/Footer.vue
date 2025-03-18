<template>
  <footer class="relative h-dvh prose-lg leading-normal bg-gray-50">

    <div ref="refRoots" class="hidden lg:block absolute top-[30px] right-0 w-[50%]">
      <Roots />
    </div>

    <div class="absolute top-0 z-10 w-full rotate-180">
      <Grass />
    </div>

    <div class="container">
      <div class="relative z-10 lg:w-1/2 py-20 lg:py-40">
        <p>{{ $t('footer.social') }} <a href="mailto:info@danalcaide.com" aria-label="Say hi via email">info@danalcaide.com</a> · <a href="https://github.com/skabeche" aria-label="Check my Github profile">Github</a> · <a href="https://www.linkedin.com/in/danalc" aria-label="Check my Linkedin profile">Linkedin</a></p>
        <p>{{ $t('footer.text') }} <a :href="$t('footer.linkText')" target="_blank" aria-label="Read more about hummingbirds on Wikipedia">Wikipedia</a>.</p>
        <p>
          &copy;{{ currentYear }} Dan Alcaide ·
          <a href="https://github.com/skabeche/danalcaide-vue">{{ $t('footer.code') }}</a> · {{ $t('footer.ingredients') }}
          <span class="inline-flex gap-x-2 [&_svg]:inline-block">
            <a href="https://youtu.be/pDIDo4kJIsU" target="_blank" aria-label="I like music">
              <Music :size="20" :stroke-width="1.75" />
            </a>
            <a href="https://www.amazon.co.uk/Morning-Vietnam-Fresh-Promptly-Delivered/dp/B00TO0PCNM" target="_blank" aria-label="I like coffee">
              <Coffee :size="20" :stroke-width="1.75" />
            </a>
            <a href="https://www.imdb.com/title/tt0082198" target="_blank" aria-label="I like movies">
              <Popcorn :size="20" :stroke-width="1.75" />
            </a>
          </span>
        </p>
      </div>
    </div>

    <!-- <div class="lines container flex flex-wrap justify-around gap-x-4 h-[60px] lg:h-[200px]">
      <div v-for="n in 75" class="w-[1px] inline-flex h-full bg-black opacity-30 hover:opacity-100 transition-all"></div>
    </div> -->

  </footer>
</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import { Music, Coffee, Popcorn } from 'lucide-vue-next';
  import Roots from "@/components/Roots.vue";
  import Grass from "@/components/Grass.vue";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const currentYear = new Date().getFullYear();
  const roots = useTemplateRef('refRoots');

  onMounted(() => {
    gsap.from(roots.value, {
      y: -50,
      scaleY: 1.1,
      scrollTrigger: {
        trigger: roots.value,
        // start: () => `top+=${window.visualViewport.height} center`,
        start: "top center",
        scrub: 2,
        // markers: true,
      }
    });
  });
</script>
