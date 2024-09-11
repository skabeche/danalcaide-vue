<template>
  <div class="garden relative -bottom-0.5">
    <div class="plants absolute -left-[140px] lg:-left-[220px] bottom-0 w-[550px] h-[200px] bg-plants bg-[100px_bottom] bg-no-repeat">
      <div class="grass-plants absolute bottom-0 bg-grass-plants w-full h-[120px] bg-[-10px_bottom] bg-no-repeat"></div>
      <div class="grass-plants absolute bottom-0 bg-grass-plants w-full h-[100px] bg-left-bottom bg-no-repeat"></div>
    </div>
    <div class="tree hidden lg:block absolute right-0 bottom-0 w-[45vw] h-screen 4xl:h-[75vh] bg-tree bg-bottom bg-no-repeat">
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
  import Flies from "@components/Flies.vue";
</script>

<style scoped>

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
