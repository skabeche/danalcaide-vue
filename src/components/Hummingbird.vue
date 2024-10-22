<template>
  <span class="colibri inline-block w-[70px] h-[48px] bg-colibri-anim"></span>
</template>

<style scoped>
  .colibri {
    animation: anim-colibri-wings 150ms steps(4) infinite;
    transform-style: preserve-3d;
  }

  @keyframes anim-colibri-wings {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 280px 0;
    }
  }
</style>
