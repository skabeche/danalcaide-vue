<template>
  <footer class="relative pt-12 pb-32 bg-black border-t border-t-black text-gray-400 prose-lg prose-a:text-white leading-relaxed lg:text-balance">
    <Flies />
    <div class="container">
      <p>Dime hola <a href="mailto:info@danalcaide.com">info@danalcaide.com</a> · <a href="https://github.com/skabeche">Github</a> · <a href="https://www.linkedin.com/in/danalc">Linkedin</a></p>
      <p>Colibrí es un género de aves apodiformes originarias de América y pertenecientes a la subfamilia de los troquilinos (Trochilinae) las cuáles tienen un tamaño que oscila entre 9,5 y 15 cm, y un peso de 4,8 a 8,5 g. Tienen cola amplia, bifurcada o redondeada. El pico es negro y delgado, relativamente largo y curvado, y tienen una larga lengua en forma tubular. <a href="https://es.wikipedia.org/wiki/Colibri" target="_blank">Wikipedia</a>.</p>
      <p>
        &copy;{{ currentYear }} Dan Alcaide ·
        <a href="https://github.com/skabeche/danalcaide-vue">Código en Github</a> · Hecho con
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
