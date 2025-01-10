<template>
  <ImageBanner :image-id="advies.bannerImage" :image-alt="advies.bannerImageAlt">
    <ArrowHeading>
        Een <GradientText>onafhankelijk advies</GradientText> over jouw stap naar het onderwijs
      </ArrowHeading>
      <p class="mb-8">De adviseurs van het landelijke <LogoOnderwijsloket class="w-36 ml-2 mr-1 relative top-[3px] inline-block" to="https://onderwijsloket.com" /> denken graag mee over jouw mogelijkheden in het onderwijs en de route daar naartoe.</p>
      <div class="flex flex-wrap gap-y-2">
        <SavvyCalEmbed :label="advies.btnLabel" />
        <UButton color="white" :label="isDyslexic ? 'Wat is een advies?' : 'Wat kan je van een advies verwachten?'" icon="i-heroicons-question-mark-circle-20-solid" size="md" @click="showModal = true" />
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
  </ImageBanner>
  
</template>

<script lang="ts" setup>
const { advies } = useContent()

const showModal = ref(false)

const { grid } = useResponsive()

const { font } = useTheme()

const isDyslexic = computed(() => font.value === 'dyslexic')

</script>

<style>

</style>