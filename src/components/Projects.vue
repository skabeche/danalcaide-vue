<template>
  <div class="clients-projects">
    <h2>{{ $t('projects.title') }}</h2>
    <ul class="flex sm:flex-row flex-wrap gap-x-4 mt-4">
      <li v-for="client in clients" :key="client.name" class="relative [&:not(:last-child)]:after:content-['·'] after:absolute after:ml-1.5 last:not">
        {{ client.name }}
      </li>
    </ul>
    <ul class="projects flex flex-col sm:flex-row flex-wrap gap-x-4 mt-4 [&_a]:font-light ">
      <li v-for="project in projects" :key="project.name" class="relative sm:[&:not(:last-child)]:after:content-['·'] after:absolute after:ml-1.5 last:not">
        <a :href="`https://${project.web}`" target="_blank" :data-text="project.name">{{ project.name }}</a>
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
    { name: 'UJI' },
    { name: 'Novio Caballo' },
    { name: 'Casa Azahar' },
    { name: 'Gran Hotel Peñíscola' },
    { name: '[...]' },
  ]

  const projects = [
    { name: 'science.sciencemag.org', web: 'https://science.sciencemag.org' },
    { name: 'bmj.com', web: 'www.bmj.com' },
    { name: 'pnas.org', web: 'www.pnas.org' },
    { name: 'aappublications.org', web: 'www.aappublications.org' },
    { name: 'cmaj.ca', web: 'www.cmaj.ca' },
    { name: 'lyellcollection.org', web: 'www.lyellcollection.org' },
    { name: 'boojummex.com', web: 'www.boojummex.com' },
    { name: 'bullitthotel.com', web: 'www.bullitthotel.com' },
    { name: 'beannchor.com', web: 'www.beannchor.com' },
    { name: 'canyoneurope.com', web: 'www.canyoneurope.com' },
    { name: 'perspectiveeconomics.com', web: 'www.perspectiveeconomics.com' },
    { name: 'theseneschal.com', web: 'www.theseneschal.com' },
    { name: 'bassettsonline.com', web: 'www.bassettsonline.com' },
    { name: 'thenationalbelfast.com', web: 'www.thenationalbelfast.com' },
    { name: 'turkington-construction.com', web: 'www.turkington-construction.com' },
    { name: 'holisticpetni.com', web: 'www.holisticpetni.com' },
    { name: 'reservarefugios.com', web: 'www.reservarefugios.com' },
    { name: 'quickpix.online', web: 'www.danalcaide.com/quickpix' },
    { name: 'yuenergy.co.uk', web: 'www.yuenergy.co.uk' },
    { name: 'portal.yuenergy.co.uk', web: 'portal.yuenergy.co.uk' },
    // { name: 'gilbert-ash.com', web: 'www.gilbert-ash.com' },
    // { name: 'sustainiq.com', web: 'www.sustainiq.com' },
  ]
</script>
