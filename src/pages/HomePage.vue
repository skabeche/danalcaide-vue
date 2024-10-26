<template>
  <section ref="refAbout" class="about container">
    <div class="lg:w-[60%] prose-lg md:prose-xl prose-h1:mb-0 prose-li:m-0 prose-li:p-0 prose-ul:pl-0 leading-relaxed mt-12 mb-[26rem] sm:mb-[22rem] lg:mb-[23rem] xl:mb-[21rem] 3xl:mb-[21rem] text-balance">
      <h1 class="main-title text-5xl md:text-6xl lg:text-[4rem] 2xl:text-[5rem] font-alternateGothic2 uppercase" v-html="$t('yo.title')"></h1>
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

    <div class="info min-h-dvh py-8 md:py-40 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] bg-black prose-lg md:prose-xl prose-a:text-gray-400 prose-a:after:bg-gray-400 prose-li:m-0 prose-li:p-0 prose-h2:text-4xl lg:prose-h2:text-4xl prose-h2:my-8 prose-h2:font-alternateGothic2 prose-h2:uppercase prose-h2:tracking-wider prose-ul:pl-0">
      <video ref="refVideo" class="video hidden md:block absolute top-0 left-0 -z-1 w-3/4 h-auto opacity-20 mix-blend-hard-light" preload="auto" disableRemotePlayback playsinline muted>
        <source src="/videos/flowers_large.mp4" type="video/mp4" media="(min-width: 1536px)">
        <source src="/videos/flowers_medium.mp4" type="video/mp4" media="(min-width: 1024px)">
        <source src="/videos/flowers_small.mp4" type="video/mp4" media="(min-width: 768px)">
        <!-- <source src="/videos/flowers_small.mp4" type="video/mp4"> -->
      </video>
      <div class="container anim-info h-full">
        <div class="flex flex-col justify-start md:justify-evenly md:w-[75%] lg:w-[60%] 4xl:w-1/2 h-full ml-auto">
          <Projects />
          <Skills class="lg:w-2/3" />
        </div>
      </div>
    </div>

    <div class="relative z-10 rotate-180">
      <Grass />
    </div>

  </section>

</template>

<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import Garden from "@components/Garden.vue";
  import Projects from '@components/Projects.vue'
  import Skills from '@components/Skills.vue'
  import Grass from "@components/Grass.vue";

  import SplitType from "split-type";
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);

  const about = useTemplateRef('refAbout')
  const video = useTemplateRef('refVideo')

  onMounted(() => {
    const mainTitle = new SplitType('.main-title', { types: 'words' })
    gsap.fromTo(
      mainTitle.words,
      {
        x: 60,
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: .5,
        ease: 'power4.out',
        delay: 2.2
      },
    )

    const infoh2 = new SplitType('.info h2', { types: 'chars' })
    gsap.fromTo(
      infoh2.chars,
      {
        x: 60,
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ".info",
          start: "top top",
          // end: "+=100vh",
          scrub: true,
          // markers: true
        }
      },
    )


    // const info2h2 = new SplitType('.info2 h2', { types: 'chars' })
    // gsap.fromTo(info2h2.chars,
    //   {
    //     opacity: 0,
    //     yPercent: -150,
    //     filter: "blur(6px)",
    //   },
    //   {
    //     opacity: 1,
    //     yPercent: 0,
    //     filter: "blur(0px)",
    //     duration: 1,
    //     ease: "power2",
    //     stagger: {
    //       each: 0.05,
    //       from: "random"
    //     },
    //     scrollTrigger: {
    //       trigger: ".info2",
    //       start: "bottom+=110% bottom",
    //       scrub: true,
    //       // markers: true
    //     }
    //   }, 0.2);

    // const info2ul = new SplitType('.info2 ul', { types: 'words' })
    // gsap.fromTo(info2ul.words,
    //   {
    //     opacity: 0,
    //     // yPercent: 150,
    //     filter: "blur(6px)",
    //   },
    //   {
    //     opacity: 1,
    //     // yPercent: 0,
    //     filter: "blur(0px)",
    //     duration: 1,
    //     ease: "power2",
    //     stagger: {
    //       each: 0.05,
    //       // from: "random"
    //     },
    //     scrollTrigger: {
    //       trigger: ".info2",
    //       start: "bottom+=110% bottom",
    //       scrub: true,
    //       // markers: true
    //     }
    //   }, 0.2);

    // gsap.fromTo('.roots-container',
    //   {
    //     y: -20,
    //     scaleY: 1.1,
    //     // filter: "blur(6px)",
    //   },
    //   {
    //     y: 0,
    //     scaleY: 1,
    //     // filter: "blur(0px)",
    //     duration: 1,
    //     ease: "power2",
    //     scrollTrigger: {
    //       trigger: ".info2",
    //       start: "bottom+=110% bottom",
    //       scrub: true,
    //       // markers: true
    //     }
    //   }, 0.2);


    const ul = new SplitType('.info ul', { types: 'words' })
    gsap.fromTo(
      ul.words,
      {
        opacity: 0,
        x: 60,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ".info",
          start: "top top",
          // end: "+=100%",
          scrub: true,
          // markers: true
        }
      },
    )

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

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".info",
        start: "top top",
        // end: "+=100%",
        // end: () => `top+=${window.innerHeight} top`,
        // end: () => `top+=${window.visualViewport.height} top`,
        scrub: true,
        // pin: window.matchMedia('(min-width: 1024px)').matches ? true : false,
        pin: true,
        // markers: true
      }
    });

    // The video encoding is the most important step to enable frame-by-frame scrubbing.
    // Must use one of the following conversion commands.
    // ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
    tl.fromTo(video.value,
      {
        currentTime: 0
      },
      {
        currentTime: video.value.duration || 4.2
      }
    );
  });
</script>
