import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from "@tsparticles/vue3";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { createI18n } from 'vue-i18n';
import es from "./locales/es.json"
import en from "./locales/en.json"

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { es, en },
  legacy: false
})

createApp(App)
  .use(Particles, {
    init: async engine => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  })
  .use(i18n)
  .mount('#app')
