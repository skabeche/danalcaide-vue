<template>
  <div class="skills">
    <h2>{{ $t('skills.title') }}</h2>
    <ul class="flex flex-wrap gap-x-4">
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  const skills = [
    'HTML',
    'CSS',
    'PHP',
    'JavaScript',
    'Vue.js',
    'React',
    'Next.js',
    'jQuery',
    'Drupal',
    'WordPress/Bedrock',
    'Craft CMS',
    'Tailwind',
    'Bootstrap',
    'SCSS',
    'Vite',
    'Git',
    'VS Code',
    'Lando',
    'Photoshop',
    'Illustrator',
    'Cubase',
    'Toggl',
    'Flash',
    'ActionScript',
    'IE6',
    t('skills.list.coffee'),
    'Chocolate',
    'Paella',
    'Googling',
  ]
</script>