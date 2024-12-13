<template>
  <NuxtLayout name="page" :title="page.name" :image="page.image">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Nos commodius agimus. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Quae quidem sapientes sequuntur duce natura tamquam videntes; Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Quorum sine causa fieri nihil putandum est. Duo Reges: constructio interrete. Egone non intellego, quid sit don.</p>
  </NuxtLayout>
</template>

<script lang="ts" setup>

definePageMeta({
  name: 'privacy',
});

const { privacy: page } = useContent().pages

useSeoMeta({
  title: page.name,
  description: page.meta,
});
</script>

<style>

</style>