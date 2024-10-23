<template>
  <div class="garden relative -z-10 -bottom-0.5">
    <div ref="refColibri" v-show="showHummingbird" class="cursor-colibri fixed z-30 top-0 left-0 scale-50 origin-top-left pointer-events-none">
      <Hummingbird />
    </div>
    <div @mousemove="gardenMove($event)" @mouseenter="gardenEnter()" @mouseout="gardenOut()" @touchmove="gardenMove($event)" id="plants" class="plants cursor-none absolute z-30 -left-[140px] lg:-left-[220px] bottom-0 w-[550px] sm:w-[calc(100%+550px)] h-[240px] bg-plants bg-[length:auto_200px] bg-[100px_bottom] bg-no-repeat">
      <div class="grass-plants absolute bottom-0 bg-grass-plants w-full h-[120px] bg-[-10px_bottom] bg-no-repeat pointer-events-none"></div>
      <div class="grass-plants absolute bottom-0 bg-grass-plants w-full h-[100px] bg-left-bottom bg-no-repeat pointer-events-none"></div>
    </div>
    <div class="tree hidden lg:block absolute z-20 right-0 bottom-0 w-[45vw] h-screen 4xl:h-[65vh] bg-tree bg-bottom bg-no-repeat">
      <div class="grass-tree absolute right-0 bottom-0 bg-grass-tree w-full h-[130px] bg-bottom bg-no-repeat"></div>
      <div class="grass-tree absolute right-0 bottom-0 bg-grass-tree w-full h-[105px] bg-bottom bg-no-repeat"></div>
    </div>
    <div class="grass absolute bottom-0 w-full sm:h-[30px] sm:bg-black">
      <div class="grass1 absolute bottom-0 h-[85px] w-full bg-grass bg-[-2rem_bottom] bg-repeat-x"></div>
      <div class="grass2 absolute bottom-0 h-[85px] w-full bg-grass bg-[2rem_bottom] bg-repeat-x"></div>
      <div class="grass3 absolute bottom-0 h-[85px] w-full bg-grass bg-[4rem_105%] bg-repeat-x"></div>
    </div>
    <Flies />
  </div>
</template>

<script setup>
  import { onMounted, ref, useTemplateRef } from "vue";
  import Flies from "@components/Flies.vue";
  import Hummingbird from "@components/Hummingbird.vue";
  import { gsap } from "gsap";

  const showHummingbird = ref(true);
  const colibri = useTemplateRef('refColibri');
  const lastCoordinatesAxis = { x: null, y: null };
  const currentCoordinatesAxis = { x: null, y: null };
  let hoveredElement;

  onMounted(() => {
    // Hummingbird hides when the user touches out of the interacting element.
    document.addEventListener('touchstart', (e) => {
      hoveredElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      hoveredElement.id !== 'plants' ? gardenOut() : gardenEnter();
    },
      { passive: true }
    );
  })

  const gardenMove = (e) => {
    // Get mouse or touch coordinates.
    if (e.type === 'mousemove') {
      currentCoordinatesAxis.x = e.clientX;
      currentCoordinatesAxis.y = e.clientY;
    } else if (e.type === 'touchmove') {
      currentCoordinatesAxis.x = e.touches[0].clientX;
      currentCoordinatesAxis.y = e.touches[0].clientY;
    }

    // Get direction.
    const directionAxisX = currentCoordinatesAxis.x > lastCoordinatesAxis.x ? 'right' : currentCoordinatesAxis.x < lastCoordinatesAxis.x ? 'left' : 'none';
    // const directionAxisY = currentCoordinatesAxis.y > lastCoordinatesAxis.y ? 'down' : currentCoordinatesAxis.y < lastCoordinatesAxis.y ? 'up' : 'none';

    lastCoordinatesAxis.x = currentCoordinatesAxis.x;
    // lastCoordinatesAxis.y = currentCoordinatesAxis.y;

    gsap.fromTo(colibri.value,
      {
        opacity: 1,
        scaleY: .42,
        rotate: directionAxisX === 'left' ? '+=-2' : '+=3',
        duration: .8,
        ease: "power3"
      },
      {
        opacity: 1,
        scaleY: .5,
        rotate: 0,
        x: currentCoordinatesAxis.x,
        y: currentCoordinatesAxis.y,
        duration: .8,
        ease: "power3"
      }
    );
  }

  function gardenEnter() {
    gsap.to(colibri.value, {
      "--blurColibri": "0",
      opacity: 1,
      duration: .4,
      ease: "power3",
      onStart: () => showHummingbird.value = true
    });
  }

  const gardenOut = () => {
    gsap.to(colibri.value, {
      "--blurColibri": "8px",
      opacity: 0,
      duration: .3,
      ease: "power3",
      onComplete: () => showHummingbird.value = false
    });
  }
</script>

<style scoped>
  :root {
    --blurColibri: 0;
  }

  .cursor-colibri {
    filter: blur(var(--blurColibri));
  }

  .grass-tree,
  .grass-plants {
    animation: anim-grassx 7s infinite ease-in-out;
    transform-style: preserve-3d;
  }

  @keyframes anim-grassx {

    0% {
      transform: skewX(0);
    }

    20% {
      transform: skewX(-2deg);
    }

    40% {
      transform: skewX(2deg);
    }

    70% {
      transform: skewX(0);
    }

    90% {
      transform: skewX(3deg);
    }
  }

  .grass1 {
    animation: anim-grass1 5s infinite ease;
  }

  @keyframes anim-grass1 {

    0% {
      transform: skewX(0);
    }

    20% {
      transform: skewX(-2deg);
    }

    40% {
      transform: skewX(2deg);
    }

    70% {
      transform: skewX(0);
    }

    90% {
      transform: skewX(5deg);
    }
  }

  .grass2 {
    animation: anim-grass2 8s 1.5s infinite ease-in-out;
  }

  @keyframes anim-grass2 {

    0% {
      transform: skewX(0);
    }

    20% {
      transform: skewX(-2deg);
    }

    40% {
      transform: skewX(5deg);
    }

    70% {
      transform: skewX(0);
    }

    90% {
      transform: skewX(7deg);
    }
  }

  .grass3 {
    animation: anim-grass3 10s 2s infinite ease-in-out;
  }

  @keyframes anim-grass3 {

    0% {
      transform: skewX(0);
    }

    20% {
      transform: skewX(-2deg);
    }

    40% {
      transform: skewX(5deg);
    }

    70% {
      transform: skewX(0);
    }

    90% {
      transform: skewX(10deg);
    }
  }
</style>
