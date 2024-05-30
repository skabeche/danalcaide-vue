<template>
  <div class="skills">
    <h2>Worked with</h2>
    <ul class="flex flex-wrap gap-x-4">
      <li v-for="skill in skills" :key="skill.name">
        {{ skill.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'PHP' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Vue.js' },
    { name: 'jQuery' },
    { name: 'Drupal' },
    { name: 'WordPress/Bedrock' },
    { name: 'Craft CMS' },
    { name: 'Tailwind' },
    { name: 'Bootstrap' },
    { name: 'SASS' },
    { name: 'Vite' },
    { name: 'Git' },
    { name: 'VS Code' },
    { name: 'Photoshop' },
    { name: 'Illustrator' },
    { name: 'Cubase' },
    { name: 'Toggl' },
    { name: 'Flash' },
    { name: 'ActionScript' },
    { name: 'IE6' },
    { name: 'Café' },
    { name: 'Chocolate' },
    { name: 'Paella' },
    { name: 'Googling' },
  ]
</script>