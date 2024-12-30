<template>
  <div class="relative w-full bg-gray-100 dark:bg-gray-800">
    <InnerContainer class="py-12 pb-6 sm:pb-12 md:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 sm:gap-16">
      <div>
        
        
        <ArrowHeading>
          Een <GradientText>onafhankelijk advies</GradientText> over jouw stap naar het onderwijs
        </ArrowHeading>
        <p class="mb-8">De adviseurs van het landelijke <LogoOnderwijsloket class="w-36 ml-2 -mr-4 relative top-[3px] inline-block" style="padding: 0; " to="https://onderwijsloket.com" /> denken graag mee over jouw mogelijkheden in het onderwijs en de route daar naartoe.</p>
        <div class="flex flex-wrap gap-y-2">
          <SavvyCalEmbed :label="advies.btnLabel" />
          <UButton color="white" label="Wat kan je van een advies verwachten?" icon="i-heroicons-question-mark-circle-20-solid" size="md" @click="showModal = true" />
        </div>
        
      </div>
      <div class="w-full max-h-[300px] lg:max-h-full lg:absolute lg:top-12 lg:right-12 lg:bottom-12 lg:h-[calc(100%-6rem)] lg:w-[calc(50%-6rem)] xl:w-[calc(50%-12rem)]">
        <Frame size="lg" animated class="h-full">
          <NuxtImg :src="advies.bannerImage" width="600" height="400" fit="fill" class="w-full h-full object-cover" :modifiers="{g:'faces'}" :alt="advies.bannerImageAlt" />
        </Frame>
      </div>
      
    </InnerContainer>

    <LazyUModal v-model="showModal" :fullscreen="!grid.sm">
      <IconCard
        color="primary"
        icon="i-heroicons-question-mark-circle-20-solid"
        size="lg"
        :ui="{
          rounded: 'rounded-none sm:rounded-lg',
          divide: 'divide-y divide-gray-100 dark:divide-gray-700',
          shadow: 'shadow-none',
          body: {
            base: 'overflow-scroll',
          }
        }"
      >
        <template #header>
          <div class="flex items-start gap-2 justify-between w-full">
            <h4 class="mb-0 mt-1 sm:mt-1.5 text-gray-600 dark:text-gray-400">Wat kun je van een adviesgesprek verwachten?</h4>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" size="lg" class="shrink-0" @click="showModal=false" />
          </div>
        </template>
        
        <div v-html="advies.info" class="content"></div>

        <template #footer>
        <div class="w-full flex flex-row justify-end gap-3">
          <UButton variant="soft" color="gray" @click="showModal=false">Sluit</UButton>
        </div>
      </template>
      </IconCard>
    </LazyUModal>
  </div>
</template>

<script lang="ts" setup>
const { advies } = useContent()

const showModal = ref(false)

const { grid } = useResponsive()



</script>

<style>

</style>