<template>
  <header class="pt-28">
    <div class="container">
      <Preloader>
        <Logo />
        <NavLang />
      </Preloader>
    </div>
  </header>
</template>

<script setup>
  import Preloader from './Preloader.vue'
  import Logo from './Logo.vue'
  import NavLang from './NavLang.vue'
</script>