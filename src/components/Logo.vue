<template>
  <div class="relative pt-11">
    <a href="/" class="after:hidden">
      <span class="sr-only">Dan Alcaide</span>
      <span class="logo inline-block w-32 mt-11x ml-px" aria-hidden="true">
        <svg viewBox="0 0 284.5 64.02" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false">
          <!-- Dan -->
          <path d="M0,51.93V1.09h11.14c4.31,0,7.51,1.14,9.58,3.41,2.07,2.27,3.11,5.79,3.11,10.55v22.71c0,4.95-.98,8.54-2.95,10.79s-5.1,3.38-9.39,3.38H0ZM7.77,44.44h3.97c1.38,0,2.41-.43,3.08-1.3.67-.87,1-2.21,1-4.04V14.62c0-2.09-.5-3.62-1.51-4.59-1.01-.97-2.59-1.46-4.75-1.46h-1.79v35.86Z" />
          <path d="M27.35,51.93L35.72,1.09h10.23l8.33,50.84h-8.05l-1.58-11h-7.91l-1.69,11h-7.7ZM37.72,33.71h5.98l-2.67-21.23h-.49l-2.81,21.23Z" />
          <path d="M58.78,51.93V1.09h7.03l9.95,30.38c.19.59.42,1.36.69,2.32.27.96.54,1.99.83,3.09-.26-1.48-.47-2.84-.63-4.1-.16-1.25-.25-2.17-.25-2.76V1.09h7.35v50.84h-7.35l-9.56-28.09c-.05-.12-.11-.29-.18-.53-.66-1.92-1.15-3.59-1.48-4.99.28,1.78.5,3.26.65,4.45.15,1.18.23,2.04.23,2.58v26.58h-7.28Z" />
          <!-- Alcaide -->
          <path d="M102.76,51.93L111.13,1.09h10.23l8.33,50.84h-8.05l-1.58-11h-7.91l-1.69,11h-7.7ZM113.13,33.71h5.98l-2.67-21.23h-.49l-2.81,21.23Z" />
          <path d="M134.19,51.93V1.09h7.77v43.49h12.16v7.35h-19.93Z" />
          <path d="M157.57,38.88V12.83c0-4.01,1.09-7.15,3.27-9.42,2.18-2.27,5.19-3.41,9.04-3.41,3.63,0,6.51,1.17,8.63,3.5,2.12,2.33,3.18,5.51,3.18,9.54v4.89h-8.05v-5.59c0-1.76-.34-3.08-1.02-3.96-.68-.88-1.69-1.32-3.02-1.32s-2.34.44-3.02,1.32c-.68.88-1.02,2.2-1.02,3.96v28.37c0,1.76.34,3.08,1.02,3.97.68.89,1.69,1.34,3.02,1.34s2.34-.44,3.02-1.34c.68-.89,1.02-2.21,1.02-3.97v-6.93h8.05v5.31c0,4.45-1.05,7.89-3.15,10.3-2.1,2.41-5.08,3.62-8.95,3.62s-6.96-1.2-8.98-3.59c-2.03-2.39-3.04-5.91-3.04-10.55Z" />
          <path d="M184.78,51.93L193.15,1.09h10.23l8.33,50.84h-8.05l-1.58-11h-7.91l-1.69,11h-7.7ZM195.15,33.71h5.98l-2.67-21.23h-.49l-2.81,21.23Z" />
          <path d="M216.21,51.93V1.09h7.98v50.84h-7.98Z" />
          <path d="M232.07,51.93V1.09h11.14c4.31,0,7.51,1.14,9.58,3.41,2.07,2.27,3.11,5.79,3.11,10.55v22.71c0,4.95-.98,8.54-2.95,10.79s-5.1,3.38-9.39,3.38h-11.5ZM239.84,44.44h3.97c1.38,0,2.41-.43,3.08-1.3.67-.87,1-2.21,1-4.04V14.62c0-2.09-.5-3.62-1.51-4.59-1.01-.97-2.59-1.46-4.75-1.46h-1.79v35.86Z" />
          <path d="M263.04,51.93V1.09h20.46v7.35h-12.62v13.32h9.1v7.35h-9.1v15.19h12.62v7.63h-20.46Z" />
        </svg>
      </span>
      <span class="colibri-logo absolute top-0" aria-hidden="true">
        <Hummingbird />
      </span>
    </a>
  </div>
</template>

<script setup>
  import Hummingbird from "@/components/Hummingbird.vue";
</script>

<style scoped>

  /* Page loaded */
  html[data-page-loaded="true"] {
    .colibri-logo {
      animation:
        anim-init-colibri-logo 500ms 2700ms forwards,
        anim-colibri-fly 5000ms 3200ms infinite;
      opacity: 0;
    }
  }

  @keyframes anim-init-colibri-logo {
    0% {
      transform: translateY(-20px) translateX(30px);
      rotate: 20deg;
      opacity: 0;
      filter: blur(0);
    }

    20% {
      filter: blur(3px);
    }

    30% {
      filter: blur(0);
    }

    60% {
      transform: translateY(0) translateX(0);
      rotate: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes anim-colibri-fly {
    0% {
      transform: translateY(0) translateX(0);
      rotate: -10deg;
      filter: blur(3px);
    }

    7% {
      transform: translateY(20px) translateX(10px);
      filter: blur(0);
    }

    22% {
      transform: translateY(10px) translateX(0);
      rotate: 5deg;
    }

    30% {
      transform: translateY(0) translateX(10px);
      rotate: 10deg;
    }

    44% {
      transform: translateY(10px) translateX(15px);
      filter: blur(0);
    }

    46% {
      rotate: 20deg;
      filter: blur(3px);
    }

    50% {
      transform: translateY(20px) translateX(5px);
      filter: blur(0);
    }

    58% {
      rotate: 5deg;
      transform: translateY(0) translateX(20px);
    }

    72% {
      transform: translateY(10px) translateX(0);
      rotate: -5deg;
    }

    80% {
      transform: translateY(-10px) translateX(5px);
    }

    89% {
      rotate: 5deg;
      filter: blur(0);
    }

    92% {
      transform: translateY(10px) translateX(-5px);
      rotate: -10deg;
      filter: blur(3px);
    }

    94% {
      rotate: 0deg;
      filter: blur(0);
    }

    100% {
      transform: translateY(0) translateX(0);
    }
  }
</style>
