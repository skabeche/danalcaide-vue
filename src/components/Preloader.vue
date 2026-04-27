<template>
  <div class="overlay relative z-100 text-white">
    <div ref="overlayContentRef" class="overlay-content container absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-dvh mt-15 lg:mt-13 4xl:mt-10 flex flex-col justify-end">
      <slot />
      <span ref="loaderRef" class="loader -mt-1 text-sm" role="status">
        {{ $t('preloader.loading') }}...
      </span>
    </div>
    <svg ref="overlaySvgRef" class="overlay-svg absolute z-10 top-0 left-0 w-full h-[105dvh]" viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden="true" role="img">
      <path ref="overlaySvgPathRef" class="overlay-svg-path" vector-effect="non-scaling-stroke" :d="paths.filled" />
    </svg>
  </div>
</template>

<script setup>
  import { ref, onMounted, useTemplateRef } from "vue";
  import { useI18n } from "vue-i18n";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

  const isLoaded = ref(false);
  const overlayContentRef = useTemplateRef("overlayContentRef");
  const overlaySvgRef = useTemplateRef("overlaySvgRef");
  const overlaySvgPathRef = useTemplateRef("overlaySvgPathRef");
  const loaderRef = useTemplateRef("loaderRef");
  const { t } = useI18n();
  const paths = {
    filled: "M0 0H200V200C130 200 75 200 0 200V0",
    curves: "M0 0H200V60C90 20 75 200 0 100V0",
    unfilled: "M0 0H200V0C90 0 75 0 0 0V0"
  };

  ScrollTrigger.clearScrollMemory("manual");

  onMounted(() => {
    const html = document.documentElement;
    const body = document.body;
    const logo = overlayContentRef.value.querySelector('.logo');
    const logoSvgPaths = overlayContentRef.value.querySelectorAll('.logo svg path');

    logoSvgPaths.forEach(path => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: -length
      })
    })

    html.dataset.pageLoaded = isLoaded.value;
    // Lock scroll during page loading.
    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    const tl = gsap.timeline({
      delay: .3,
      onComplete: () => {
        loaderAnimation();
      }
    })

    tl
      .from(loaderRef.value, {
        autoAlpha: 0,
        duration: 0.3,
        filter: "blur(3px)",
      }, '<')
      .to(logoSvgPaths, {
        strokeDashoffset: 0,
        duration: 1.1,
        stagger: {
          each: 0.06,
          from: "random"
        },
      })
      .to(logoSvgPaths, {
        strokeDashoffset: (i, el) => -el.getTotalLength(),
        duration: 1,
        stagger: {
          each: 0.05,
          from: "random"
        },
      })
      .to(logoSvgPaths, {
        fill: '#fff',
        duration: .5,
        stagger: {
          each: 0.05,
          from: "start"
        },
      }, '<')

    function loaderAnimation() {
      if (document.readyState === "complete") {
        startLoaderAnimation();
      } else {
        window.addEventListener("load", startLoaderAnimation);
      }
    }

    function startLoaderAnimation() {
      isLoaded.value = true;
      document.documentElement.dataset.pageLoaded = isLoaded.value;

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          // Unlock scroll after the loading animation ends.
          html.classList.remove("scroll-lock")
          body.classList.remove("scroll-lock")
        }
      });

      tl
        .to(loaderRef.value, {
          ease: "none",
          scrambleText: {
            // chars: "ΩΨΣΞΘΔ",
            // chars: "█▓▒░▉",
            chars: "▌■▪▐▬",
            text: t('preloader.loaded'),
          },
          duration: 0.4
        })
        .to(loaderRef.value, {
          y: 8,
          autoAlpha: 0,
          filter: "blur(3px)",
          duration: 0.3,
        }, '+=0.3')
        .to(logo, {
          y: 30,
          duration: 0.7,
          ease: "power4.inOut",
        })
        .to(logoSvgPaths, {
          y: 12,
          stagger: {
            each: 0.02,
            from: "center"
          },
          duration: 0.3,
          ease: "power4.in",
        }, '<')
        .to(overlaySvgPathRef.value, {
          duration: 0.6,
          ease: 'power3.in',
          attr: { d: paths.curves }
        })
        .to(overlayContentRef.value, {
          yPercent: -93,
          duration: 0.6,
          ease: "power3.in",
        }, '<')
        .to(logoSvgPaths, {
          y: 0,
          stagger: {
            each: 0.025,
            from: "edges"
          },
          duration: 0.3,
          ease: "power4.in",
        }, '<')
        .to(overlaySvgPathRef.value, {
          duration: 0.3,
          ease: 'power1',
          attr: { d: paths.unfilled }
        })
        .to(overlayContentRef.value, {
          color: '#000000',
          duration: 0.3,
          ease: "power4.in",
        }, '<-=0.1')
        .to(logoSvgPaths, {
          fill: '#000000',
          duration: 0.3,
          ease: "power4.in",
        }, '<')
        .to(logo, {
          y: 0,
          duration: 0.1,
          ease: "power4.out",
        }, '<')
        .set(overlaySvgRef.value, {
          height: 0,
          pointerEvents: 'none'
        })
        .play();
    }
  })
</script>

<style scoped>

  .loader {
    font-family: sans-serif;
  }

  /* Page loading */
  html[data-page-loaded="false"] {
    .loader {
      animation: anim-loader 500ms infinite;
    }
  }

  @keyframes anim-loader {
    0% {
      font-family: Arial, Helvetica, sans-serif;
    }

    20% {
      font-family: "Times New Roman", Times, serif;
    }

    40% {
      font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", "Open Sans", sans-serif;
    }

    60% {
      font-family: "Courier New", Courier, monospace;
    }

    80% {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }

  /* Page loaded */
  html[data-page-loaded="true"] {
    .loader {
      animation: none;
    }
  }
</style>
