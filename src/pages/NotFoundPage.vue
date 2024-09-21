<template>
  <div class="min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] content-center">
    <h1 class="text-5xl capitalize">{{ $t('404.title') }}</h1>
    <p>
      {{ $t('404.text') }}
      <Ghost :size="20" :stroke-width="1.75" class="inline-block" />
    </p>
    <p><a href="/">{{ $t('404.linkText') }}</a></p>
  </div>
</template>

<script setup>
  import { Ghost } from 'lucide-vue-next';
</script>