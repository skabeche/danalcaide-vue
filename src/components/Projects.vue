<template>
  <div ref="infoRef" class="projects-info relative flex items-center min-h-dvh py-4 [text-shadow:0_1px_0_rgb(0_0_0/40%)]">
    <video ref="videoRef" class="video hidden sm:block absolute top-0 left-0 w-full lg:w-3/4 4xl:w-[85%] h-auto opacity-20 mix-blend-hard-light" preload="auto" disableRemotePlayback playsinline muted>
      <source src="/videos/flowers_large.mp4" type="video/mp4" media="(min-width: 1536px)">
      <source src="/videos/flowers_medium.mp4" type="video/mp4" media="(min-width: 1024px)">
      <source src="/videos/flowers_small.mp4" type="video/mp4" media="(min-width: 640px)">
      <source src="" type="video/mp4">
    </video>
    <div class="container">
      <div class="xl:w-[80vw] h-full ml-auto">
        <div class="clients-projects lg:grid grid-cols-2 lg:justify-items-end gap-x-20">
          <h2 :key="locale" ref="headingRef" class="lg:text-right">
            {{ t('projects.title') }}
          </h2>
          <div>
            <ul class="clients flex sm:flex-row flex-wrap gap-x-4">
              <li v-for="client in clients" :key="client" class="relative not-last:after:content-['·'] after:absolute after:ml-1.5 last:not">
                {{ client }}
              </li>
            </ul>
            <ul class="projects flex sm:flex-row flex-wrap gap-x-4 [&_a]:font-light">
              <li v-for="project in projects" :key="project.name" class="relative not-last:after:content-['·'] after:absolute after:ml-1.5 last:not">
                <a :href="`https://${project.web}`" target="_blank" :data-text="project.name" :aria-label="`Go to the website ${project.name}`">{{ project.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, useTemplateRef, watch, nextTick } from "vue";

  import clients from "@/data/clients"
  import projects from "@/data/projects"

  import { useI18n } from "vue-i18n";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  import { SplitText } from "gsap/SplitText";

  gsap.registerPlugin(ScrollTrigger, SplitText);

  const { t, locale } = useI18n();
  const videoRef = useTemplateRef('videoRef')
  const infoRef = useTemplateRef('infoRef')
  const headingRef = useTemplateRef('headingRef')

  const animateSplitHeading = () => {
    const splitHeading = SplitText.create(headingRef.value, { type: "words" })

    return gsap.from(splitHeading.words, {
      x: 60,
      opacity: 0,
      filter: "blur(6px)",
      stagger: 0.5,
      duration: 4,
    })
  }

  onMounted(async () => {
    await document.fonts.ready

    gsap.to(videoRef.value, {
      yPercent: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    let tlVideo = gsap.timeline();
    tlVideo.to(videoRef.value, {
      opacity: .6,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    let tlInfo = gsap.timeline({
      defaults: {
        duration: 4,
      },
      scrollTrigger: {
        trigger: infoRef.value,
        start: "top top",
        end: window.matchMedia('(min-width: 768px)').matches ? "+=300%" : "+=100%",
        scrub: true,
        // pin: window.matchMedia('(min-width: 768px)').matches ? true : false,
        pin: true,
        pinSpacing: false,
        // markers: true,
        onEnter: () => {
          gsap.set(infoRef.value, { zIndex: 20 });
          tlVideo.pause(0)
        },
        onLeaveBack: () => tlVideo.play(),
      },
    });

    // The video encoding is the most important step to enable frame-by-frame scrubbing.
    // Must use one of the following conversion commands.
    // ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
    tlInfo
      .fromTo(videoRef.value,
        {
          currentTime: 0
        },
        {
          currentTime: videoRef.value.duration || 4.2,
          duration: 8,
          ease: 'none',
        },
      )
      .add(animateSplitHeading(), '<')
      .from(infoRef.value.querySelectorAll('ul'), {
        x: 60,
        opacity: 0,
        filter: "blur(6px)",
        stagger: 0.5,
      }, '<')
    // Add an empty tween to extend the timeline duration to overlap with next animation.
    tlInfo.to(infoRef.value, {
      duration: window.matchMedia('(min-width: 768px)').matches ? 10 : 0,
    });

    watch(locale, () => {
      // Reassign the timeline to ensure the split text animation is reactive when the locale changes.
      nextTick(() => {
        tlInfo.add(animateSplitHeading(), 0);
      })
    })
  })
</script>
