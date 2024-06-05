import { createApp } from 'vue'
import './style.css'
import router from './router'
import i18n from './i18n'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import { createHead } from 'unhead'
import App from './App.vue'

const head = createHead()

createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .use(Particles, {
    init: async engine => {
      await loadSlim(engine);
    },
  })
  .mount('#app')
