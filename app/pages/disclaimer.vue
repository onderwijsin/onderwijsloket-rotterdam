<template>
  <NuxtLayout name="page" title="Disclaimer" :image="page.image">
   
    <p class="mb-3">Deze website wordt beheerd door het Onderwijsloket Rotterdam en is bedoeld om algemene informatie te bieden over een carrière in het onderwijs in Rotterdam.</p>

    <ol class="list-decimal list-inside mb-6">
      <li><strong>Juistheid van informatie</strong>: Ondanks onze inspanningen kan het voorkomen dat informatie onvolledig of onjuist is. Aan de inhoud van deze website kunnen geen rechten worden ontleend.</li>
      <li><strong>Externe links</strong>: Deze website bevat links naar externe bronnen. Het Onderwijsloket Rotterdam is niet verantwoordelijk voor de inhoud van deze externe websites.</li>
      <li><strong>Gebruik van informatie</strong>: Het kopiëren, verspreiden of openbaar maken van teksten, afbeeldingen of andere inhoud van deze website is niet toegestaan zonder voorafgaande toestemming, tenzij anders aangegeven.</li>
    </ol>

    <p class="mb-12 md:mb-6">Voor vragen over deze disclaimer kun je contact opnemen via <NuxtLink to="mailto:info@onderwijsloketrotterdam.nl" target="_blank">info@onderwijsloketrotterdam.nl</NuxtLink>.</p>
    
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'disclaimer',
});




const page = { meta: 'Deze website wordt beheerd door het Onderwijsloket Rotterdam en is bedoeld om algemene informatie te bieden over een carrière in het onderwijs in Rotterdam.', image: 'regios/rotterdam/school_corridor_2_mjqmta' };

useSeoMeta({
  title: "Disclaimer",
  description: page.meta,
});


</script>

<style>

</style>