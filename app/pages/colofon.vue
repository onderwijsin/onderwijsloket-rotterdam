<template>
  <NuxtLayout name="page" title="Colofon" :image="page.image">
   
    <p class="mb-3">De website van het Onderwijsloket Rotterdam is ontwikkeld in opdracht van de Onderwijsregio Rotterdam PO en Onderwijsregio Rotterdam vo-mbo. Dit initiatief is mogelijk gemaakt door de samenwerking van onderstaande partners, die gezamenlijk bijdragen aan een toekomstbestendig en inspirerend onderwijslandschap in Rotterdam.</p>

    <h2 class="mb-2">Samenwerkende partners</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Onderwijsregio Rotterdam PO</li>
      <li><NuxtLink to="https://www.onderwijsregiorotterdamvombo.nl/" class="text-primary-500 font-bold underline" target="_blank">Onderwijsregio Rotterdam vo-mbo</NuxtLink></li>
      <li><NuxtLink to="https://onderwijs010.nl/" class="text-primary-500 font-bold underline" target="_blank">Onderwijs010, Gemeente Rotterdam</NuxtLink></li>
    </ul>

    <h2 class="mb-2">Ontwikkeling en ondersteuning</h2>
    <p class="mb-3">
      <span class="mr-2">De inhoud van deze website is samengesteld in samenwerking met de partners van het Onderwijsloket Rotterdam en het</span>
      <LogoOnderwijsloket class="w-28 inline-block relative top-0.5" />
      <span>. Wij baseren ons op actuele informatie en inzichten vanuit de onderwijssector in Rotterdam.</span>
    </p>
    
    <h2 class="mb-2">Ontwikkeling en ondersteuning</h2>
    <p class="mb-6">Deze website is ontwikkeld met technische ondersteuning en ontwerp door <LogoOnderwijsIn class="w-28 inline-block relative top-1.5 ml-2" /></p>

    <h2 class="mb-2">Contact</h2>
    <p class="mb-12 md:mb-6">Voor vragen of opmerkingen kun je contact opnemen via <NuxtLink to="mailto:info@onderwijsloketrotterdam.nl" target="_blank">info@onderwijsloketrotterdam.nl</NuxtLink>.</p>
    
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'colofon',
});




const page = { meta: 'Onderwijsloket Rotterdam is een initiatief van verschillende regionale partners.', image: 'regios/rotterdam/school_staircase_me9cmk' };

useSeoMeta({
  title: "Colofon",
  description: page.meta,
});


</script>

<style>

</style>