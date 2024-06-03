<template>
  <div class="clients-projects">
    <h2>{{ $t('projects.title') }}</h2>
    <ul class="flex sm:flex-row flex-wrap gap-x-4 mt-4 [&_a]:font-light ">
      <li v-for="client in clients" :key="client.name" class="relative [&:not(:last-child)]:after:content-['·'] after:absolute after:ml-1.5 last:not">
        {{ client.name }}
      </li>
    </ul>
    <ul class="projects flex flex-col sm:flex-row flex-wrap gap-x-4 mt-4 [&_a]:font-light ">
      <li v-for="project in projects" :key="project.web" class="relative sm:[&:not(:last-child)]:after:content-['·'] after:absolute after:ml-1.5 last:not">
        <a :href="`https://${project.web}`" target="_blank" :data-text="project.web">{{ project.web }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const clients = [
    { name: 'Highwire Press' },
    { name: 'Science' },
    { name: 'AAP Publications' },
    { name: 'BMJ' },
    { name: 'PNAS' },
    { name: 'The Geological Society' },
    { name: 'Pale Blue Dot' },
    { name: 'Boojum' },
    { name: 'Beannchor' },
    { name: 'The Robot Exchange' },
    { name: 'Yü Energy' },
    { name: 'Turkington Construction' },
    { name: 'HolisticPet NI' },
    { name: 'Pere Cervantes' },
    { name: 'Tadoo' },
    { name: 'Zayjia' },
    { name: 'BP' },
    { name: 'Novio Caballo' },
    { name: 'Casa Azahar' },
    { name: 'Gran Hotel Peñíscola' },
    { name: '[...]' },
  ]

  const projects = [
    { web: 'science.sciencemag.org' },
    { web: 'www.bmj.com' },
    { web: 'www.pnas.org' },
    { web: 'www.aappublications.org' },
    { web: 'www.cmaj.ca' },
    { web: 'www.lyellcollection.org' },
    { web: 'www.boojummex.com' },
    { web: 'www.bullitthotel.com' },
    { web: 'www.sustainiq.com ' },
    { web: 'www.gilbert-ash.com ' },
    { web: 'www.perspectiveeconomics.com ' },
    { web: 'www.theseneschal.com ' },
    { web: 'www.bassettsonline.com' },
    { web: 'www.thenationalbelfast.com ' },
    { web: 'www.turkington-construction.com' },
    { web: 'www.holisticpetni.com' },
    { web: 'www.reservarefugios.com' },
    { web: 'www.yuenergy.co.uk' },
    { web: 'portal.yuenergy.co.uk' },
  ]
</script>
