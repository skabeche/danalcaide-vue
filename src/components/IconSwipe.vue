<template>
  <div class="icon-swipe block sm:hidden fixed z-40 bottom-0 right-0 p-4 text-white mix-blend-difference">
    <!-- Swipe -->
    <svg class="hidden touch:block hybrid-device:block" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
      <path d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zM1 9l3 3l3-3H5V3H3v6z" />
    </svg>
    <!-- Arrow -->
    <svg class="block touch:hidden hybrid-device:hidden" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
      <path d="M9 4h6v8h4.84L12 19.84L4.16 12H9z" />
    </svg>
  </div>
</template>

<style scoped>
  .icon-swipe {
    animation: anim-swipe-bounce 2s ease-in-out infinite;
  }

  @keyframes anim-swipe-bounce {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(5px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .icon-swipe {
      animation: none;
    }
  }
</style>
