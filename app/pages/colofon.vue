<template>
  <NuxtLayout name="page" title="Colofon" :image="page.image">
   
    
    
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