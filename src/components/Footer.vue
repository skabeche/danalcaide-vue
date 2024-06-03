<template>
  <footer class="relative pt-12 pb-32 bg-black border-t border-t-black text-gray-400 prose-lg prose-a:text-white leading-relaxed lg:text-balance">
    <Flies />
    <div class="container">
      <p>{{ $t('footer.social') }} <a href="mailto:info@danalcaide.com">info@danalcaide.com</a> · <a href="https://github.com/skabeche">Github</a> · <a href="https://www.linkedin.com/in/danalc">Linkedin</a></p>
      <p>{{ $t('footer.text') }} <a :href="$t('footer.linkText')" target="_blank">Wikipedia</a>.</p>
      <p>
        &copy;{{ currentYear }} Dan Alcaide ·
        <a href="https://github.com/skabeche/danalcaide-vue">{{ $t('footer.code') }}</a> · {{ $t('footer.ingredients') }}
        <span class="inline-flex gap-x-2 [&_svg]:inline-block">
          <a href="https://youtu.be/pDIDo4kJIsU" target="_blank">
            <Music :size="20" :stroke-width="1.75" />
          </a>
          <a href="https://www.amazon.co.uk/Morning-Vietnam-Fresh-Promptly-Delivered/dp/B00TO0PCNM" target="_blank">
            <Coffee :size="20" :stroke-width="1.75" />
          </a>
          <a href="https://www.imdb.com/title/tt0082198" target="_blank">
            <Popcorn :size="20" :stroke-width="1.75" />
          </a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup>
  import Flies from "./Flies.vue";
  import { Music, Coffee, Popcorn } from 'lucide-vue-next';

  const currentYear = new Date().getFullYear();
</script>
