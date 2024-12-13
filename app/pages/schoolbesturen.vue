<template>
  <NuxtLayout name="page" :title="page.name" :image="page.image">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Nos commodius agimus. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Quae quidem sapientes sequuntur duce natura tamquam videntes; Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Quorum sine causa fieri nihil putandum est. Duo Reges: constructio interrete. Egone non intellego, quid sit don.</p>

    <div class="mt-8 md:mt-16 grid md:grid-cols-2 gap-6">
      <UCard v-for="bestuur in besturen" :ui="{}">

          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
            <div class="w-32 h-16 bg-gray-200 dark:bg-gray-700" />
            <div class="w-full sm:w-auto grow">
              <div class="w-3/4 h-4 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div class="inline-block mt-2 mr-2 w-12 h-4 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div class="inline-block mt-2 mr-2 w-12 h-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
            
          </div>

      </UCard>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'besturen',
});



const { besturen: page } = useContent().pages

useSeoMeta({
  title: page.name,
  description: page.meta,
});


const { besturen } = useContent()
</script>

<style>

</style>