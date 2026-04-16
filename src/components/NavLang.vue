<template>
  <nav aria-label="Language switcher">
    <ul class="absolute flex gap-2 -mt-1 text-sm uppercase">
      <li v-for="(locale, index) in $i18n.availableLocales" :key="`locale-${locale}`">
        <RouterLink :to="locale" :title="$t('languages.' + locale)" :lang="locale" :aria-label="$t('languages.' + locale)">
          {{ locale }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

  /* Page loading */
  nav {
    opacity: 0;
  }

  /* Page loaded */
  html[data-page-loaded="true"] {
    nav {
      animation: anim-init-nav 500ms 1700ms forwards;
    }
  }

  @keyframes anim-init-nav {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
