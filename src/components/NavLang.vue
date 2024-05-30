<template>
  <nav>
    <ul class="anim-init-nav-lang flex gap-2 text-sm">
      <li><a href="/" accesskey="1" lang="es" title="Español">ES</a></li>
      <li><a href="/en" accesskey="2" lang="en" title="English">EN</a></li>
    </ul>
  </nav>
</template>

<style scoped>

  /* Page loading */
  .anim-init-nav-lang {
    opacity: 0;
    position: absolute;
  }

  /* Page loaded */
  .overlay[data-loaded="true"] .anim-init-nav-lang {
    animation: anim-init-nav-lang 500ms 1800ms forwards;
  }

  @keyframes anim-init-nav-lang {
    0% {
      opacity: 0;
      position: absolute;
    }

    100% {
      opacity: 1;
      position: static;
    }
  }
</style>
