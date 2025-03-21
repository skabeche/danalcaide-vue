<template>
  <section ref="refAbout" class="about container">
    <div class="prose-lg md:prose-xl prose-h1:mb-0 prose-li:m-0 prose-li:p-0 prose-ul:pl-0 leading-relaxed mt-12 mb-[26rem] sm:mb-[22rem] lg:mb-[23rem] xl:mb-[21rem] 3xl:mb-[21rem] text-balance">
      <h1 ref="refTitle" class="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-alternateGothic2 uppercase text-pretty" v-html="$t('yo.title')"></h1>
      <div class="lg:w-[60%]">
        <p>{{ $t('yo.text1') }}</p>
        <p>{{ $t('yo.text2') }}</p>
        <p>{{ $t('yo.text3') }}</p>
        <ul>
          <li>{{ $t('yo.timeline.13.text') }} <a href="https://youtu.be/VrUvnLQ5-h4" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.13.linkText') }}</a>.</li>
          <li>{{ $t('yo.timeline.16.text') }} <a href="https://youtu.be/qFfnlYbFEiE" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.16.linkText') }}</a>.</li>
          <li>{{ $t('yo.timeline.18.text') }} <a href="https://en.wikipedia.org/wiki/File:Attempted_restoration_of_Ecce_Homo.jpg#/media/File:Attempted_restoration_of_Ecce_Homo.jpg" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.18.linkText') }}</a>.</li>
          <li>{{ $t('yo.timeline.21.text') }} <a href="https://youtu.be/gkLqopaEHpU" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.21.linkText') }}</a>.</li>
          <li>{{ $t('yo.timeline.23.text') }}</li>
          <li>{{ $t('yo.timeline.27.text') }} <a href="https://web.archive.org/web/20081005040052/http://www.danalcaide.es/" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.27.linkText') }}</a>.</li>
          <li>{{ $t('yo.timeline.33.text') }} <a href="https://youtu.be/2jf7FmNt4Tg" target="_blank" aria-label="See more about this timeline point">{{ $t('yo.timeline.33.linkText') }}</a> {{ $t('yo.timeline.33.text2') }}.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="prose-lg md:prose-xl prose-a:text-gray-400 prose-a:after:bg-gray-400 prose-li:m-0 prose-li:p-0 prose-h2:text-5xl md:prose-h2:text-7xl prose-h2:my-8 prose-h2:font-alternateGothic2 prose-h2:uppercase prose-h2:font-normal prose-h2:tracking-wider prose-ul:pl-0">
    <Garden>
      <div ref="refInfo" class="info relative min-h-dvh py-8 md:py-40 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        <video ref="refVideo" class="video hidden sm:block absolute top-0 left-0 w-full lg:w-3/4 4xl:w-[85%] h-auto opacity-20 mix-blend-hard-light" preload="auto" disableRemotePlayback playsinline muted>
          <source src="/videos/flowers_large.mp4" type="video/mp4" media="(min-width: 1536px)">
          <source src="/videos/flowers_medium.mp4" type="video/mp4" media="(min-width: 1024px)">
          <source src="/videos/flowers_small.mp4" type="video/mp4" media="(min-width: 640px)">
          <source src="" type="video/mp4">
        </video>
        <div class="container">
          <div class="flex flex-col justify-start md:justify-evenly xl:w-[75vw] h-full ml-auto">
            <Projects />
          </div>
        </div>
      </div>
      <div ref="refInfo2" class="info2 container relative py-8 md:pb-52">
        <div class="md:w-[70%] xl:w-[55%] 2xl:w-[40%] 4xl:w-1/2">
          <Skills />
        </div>
      </div>
    </Garden>
  </section>
</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import Garden from "@/components/Garden.vue";
  import Projects from '@/components/Projects.vue'
  import Skills from '@/components/Skills.vue'

  import SplitType from "split-type";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const title = useTemplateRef('refTitle')
  const about = useTemplateRef('refAbout')
  const video = useTemplateRef('refVideo')
  const info = useTemplateRef('refInfo')
  const info2 = useTemplateRef('refInfo2')

  onMounted(() => {

    const mm = gsap.matchMedia();

    // Only desktop.
    mm.add("(min-width: 768px)", () => {
      const mainTitle = new SplitType(title.value, { types: 'words' })
      gsap.from(mainTitle.words, {
        x: 60,
        opacity: 0,
        filter: "blur(6px)",
        stagger: 0.05,
        duration: .5,
        ease: 'power4.out',
        delay: 2.6
      });
    });

    gsap.to(about.value, {
      yPercent: 40,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(video.value, {
      yPercent: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    let tlVideo = gsap.timeline();
    tlVideo.to(video.value, {
      opacity: .6,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    let tlInfo = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: info.value,
        start: "top top",
        end: "+=100%",
        scrub: true,
        // pin: window.matchMedia('(min-width: 768px)').matches ? true : false,
        pin: true,
        // markers: true
        onEnter: () => tlVideo.pause(0),
        onLeaveBack: () => tlVideo.play(),
      },
    });

    // The video encoding is the most important step to enable frame-by-frame scrubbing.
    // Must use one of the following conversion commands.
    // ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
    tlInfo.fromTo(video.value,
      {
        currentTime: 0
      },
      {
        currentTime: video.value.duration || 4.2
      }
    );

    const infoh2 = new SplitType('.info h2', { types: 'words' })
    tlInfo.from(infoh2.words, {
      x: 60,
      opacity: 0,
      filter: "blur(6px)",
      stagger: 0.2,
    },
      '<'
    ).from('.info ul', {
      x: 60,
      opacity: 0,
      filter: "blur(6px)",
      stagger: 0.2,
    },
      '<'
    );


    const info2h2 = new SplitType('.info2 h2', { types: 'words' })
    gsap.from(info2h2.words, {
      y: -60,
      opacity: 0,
      filter: "blur(6px)",
      skewY: 4,
      stagger: 0.1,
      duration: 0.4,
      scrollTrigger: {
        trigger: info2.value,
        start: "-=25% center",
        end: "+=100%",
        toggleActions: "play none none reverse",
        // markers: true
      },
    });

    gsap.from('.info2 ul', {
      y: 60,
      opacity: 0,
      filter: "blur(6px)",
      skewY: 4,
      stagger: 0.1,
      duration: 0.4,
      scrollTrigger: {
        trigger: info2.value,
        start: "top center",
        end: "+=100%",
        toggleActions: "play none none reverse",
        // markers: true
      },
    });

  });
</script>
