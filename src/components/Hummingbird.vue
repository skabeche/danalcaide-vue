<template>
  <span class="colibri inline-block w-[70px] h-[60px] bg-colibri-frames" aria-hidden="true" tabindex="-1"></span>
</template>

<style scoped>
  .colibri {
    animation: anim-colibri-wings 160ms steps(4) infinite;
    background-size: 300px 60px;
  }

  @keyframes anim-colibri-wings {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 300px 0;
    }
  }
</style>
