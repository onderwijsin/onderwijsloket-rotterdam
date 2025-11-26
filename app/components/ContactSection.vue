<template>
  
  <div class="w-full pb-12 md:pt-16">
    <InnerContainer from="xl">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="md:col-span-3">
          <Arrow variant="outline" type="chevron" animated in-view size="md" :amount="3" class="mb-6" />
          <h2 class="sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400 font-black">Contact en advies</h2>
          <h3 class="text-3xl md:text-5xl font-black">Aan de slag met <GradientText from="secondary" to="secondary">jouw onderwijsdroom</GradientText></h3>
          <p class="mb-4">Ben je geïnspireerd en wil je de volgende stap zetten? Hieronder lees je waar je met jouw vragen terecht kunt.</p>
         <ul class="list-disc pl-6 space-y-3">
  <li>
    Benieuwd naar jouw kansen in het Rotterdamse onderwijs? De schoolbesturen in Rotterdam vertellen je graag meer over werkgelegenheid, hun visie en hoe jij onderdeel kunt worden van hun team.
  </li>

  <li>
    Wil je meer weten over de opleiding tot leraar, toelatingseisen of begeleiding? Neem dan contact op met een lerarenopleiding in de regio. Zij helpen je graag verder.
  </li>

  <li>
    Wil je een onafhankelijk gesprek over jouw route naar het onderwijs? Plan hieronder eenvoudig een gratis adviesgesprek met een adviseur van
    <NuxtLink to="https://onderwijsloket.com" class="text-primary underline">het landelijke Onderwijsloket</NuxtLink>.
  </li>

  <li>
    Heb je een andere vraag? Mail ons via
    <NuxtLink to="mailto:info@onderwijsloketrotterdam.nl" class="text-primary underline">
      info@onderwijsloketrotterdam.nl
    </NuxtLink>.
  </li>
</ul>
        </div>
        <div class="flex col-span-1 flex-col items-start md:items-end md:justify-end">
         
        </div>
      </div>
    </InnerContainer>
  </div>

  <!-- <InnerContainer from="xl" class="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 md:pb-16">
    <UCard 
      :ui="{ 
        ring: 'ring-secondary-200 dark:ring-secondary-200', 
        background: 'bg-gray-100 dark:bg-gray-800',
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="font-black mb-0">
          <ClientOnly>
            <Arrow :animated="grid.md" fill="secondary" class="inline-flex mr-2" :size="18" />
          </ClientOnly>
          Neem contact op met <GradientText from="secondary" to="secondary">een schoolbestuur</GradientText>
        </h3>
      </template>
      <p>Benieuwd naar jouw kansen in het Rotterdamse onderwijs? De schoolbesturen in Rotterdam vertellen je graag meer over werkgelegenheid, hun visie en hoe jij onderdeel kunt worden van hun team.</p>
      <template #footer>
        <UButton color="secondary" variant="solid" size="lg" to="https://onderwijs010.nl/schoolbesturen" target="_blank">
            Naar schoolbesturen
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </template>
    </UCard>
    <UCard 
      :ui="{ 
        ring: 'ring-secondary-200 dark:ring-secondary-200', 
        background: 'bg-gray-100 dark:bg-gray-800',
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="font-black mb-0">
          <ClientOnly>
            <Arrow :animated="grid.md" fill="secondary" class="inline-flex mr-2" :size="18" />
          </ClientOnly>
          Neem contact op met <GradientText from="secondary" to="secondary">een lerarenopleiding</GradientText>
        </h3>
      </template>
      <p>Heb je vragen over de opleiding die bij jou past of wil je advies op maat? De lerarenopleidingen in Rotterdam staan voor je klaar om je verder te helpen met praktische informatie en persoonlijke begeleiding.</p>
      <template #footer>
        <UButton color="secondary" variant="solid" size="lg" to="https://www.onderwijsloket.com/navigator/?collection=10&sort=asc&orderby=title&limit=10" target="_blank">
            Naar lerarenopleidingen
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </template>
    </UCard>
    
  </InnerContainer> -->

  <div id="advies" class="mb-12 md:mb-20">
    <AdviesBanner />
  </div>
</template>

<script lang="ts" setup>


// const  { grid } = useResponsive()

// const { orgs } = useContent().partners

// const { scrollTo } = useSnapScroll()
</script>

<style>

</style>