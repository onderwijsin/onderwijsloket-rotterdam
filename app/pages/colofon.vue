<template>
  <NuxtLayout name="page" title="Colofon" :image="page.image">
   
    <p class="mb-3">Onderwijsloket Rotterdam is ontwikkeld in opdracht van Onderwijsregio Rotterdam PO en Onderwijsregio Rotterdam VO-MBO. Onderwijsloket Rotterdam is een initiatief van de volgende partners:</p>
    <div class="flex gap-3 gap-y-2 flex-wrap">
      <div v-for="i in 6" class="h-12 w-40 bg-gray-200 dark:bg-gray-800 grid place-content-center"><strong>logo</strong></div>
    </div>

    <p class="mb-3 mt-8">De inhoud van deze website is tot stand gekomen in samenwerking met:</p>
    <div class="flex gap-2 gap-y-2 flex-wrap items-center">
      
      <NuxtLink to="https://onderwijsloket.com" target="_blank">
        <LogoOnderwijsloket class="w-36" />
        <!-- <NuxtImg src="brand/logo_onderwijsloket_by0ejs" width="160" height="auto" fit="fit" class="w-28" alt="Het Onderwijsloket" /> -->
      </NuxtLink>
      <NuxtLink to="https://onderwijs010.nl" target="_blank">
        <NuxtImg src="regios/rotterdam/Onderwijs010_Logo_sxeg6x" width="160" height="auto" class="w-28" fit="fit" alt="onderwijs010" />
      </NuxtLink>
      
    </div>

    <p class="mb-12 md:mb-3 mt-8">Deze website is ontwikkeld in samenwerking met: <LogoOnderwijsIn class="w-28 md:inline-block relative top-1.5 md:ml-2" /></p>
    
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