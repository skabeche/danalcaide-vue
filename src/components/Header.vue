<template>
  <header>
    <Preloader>
      <Logo />
      <NavLang />
    </Preloader>
  </header>
</template>

<script setup>
  import Preloader from '@/components/Preloader.vue'
  import Logo from '@/components/Logo.vue'
  import NavLang from '@/components/NavLang.vue'
</script>
