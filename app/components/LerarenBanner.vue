<template>
  <ImageBanner v-if="!!leraren?.length && currentItem" :image-id="routes.bannerImage" :image-alt="routes.bannerImageAlt" reverse class="bg-secondary-50 dark:bg-secondary-950/50">
    <div class="md:-my-4">
      <ArrowHeading color="secondary">
        Deze <GradientText from="secondary" to="secondary">Rotterdamse leraren</GradientText> gingen je voor
      </ArrowHeading>

      <figure>
        <blockquote class="mb-0 italic leading-loose lg:text-lg" :cite="currentItem.url || undefined">
          "{{ currentItem.quote }}"
        </blockquote>
        <figcaption class="flex items-center flex-wrap gap-y-2 gap-x-3 mt-3 mb-8">
          <span class=" font-black">{{ currentItem.naam }}</span>
          <UBadge v-for="sector in currentItem.sectoren" :color="getSectorColor(sector)" size="xs" :label="sector" />
        </figcaption>
        <UButtonGroup>
          <UButton :color="currentItem?.sectoren[0] ? getSectorColor(currentItem.sectoren[0]) : 'secondary'" variant="solid"  size="lg" :to="currentItem.url || undefined" target="_blank">
            {{ 'Lees het verhaal van ' + currentItem.voornaam }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
          <UButton color="white" variant="soft"  size="lg" to="https://onderwijs010.nl/leraarworden" target="_blank">
            Alle inspiratieverhalen
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
        </UButtonGroup>
      </figure>
    </div>
    
    

    <template #media>
      <UCarousel 
        ref="carousel"
        :items="leraren" 
        :ui="{ item: 'basis-full relative', indicators: { wrapper: 'bottom-6' }, arrows: { wrapper: 'absolute top-1/2 -translate-y-1/2 start-3 end-3 flex flex-row justify-between'} }" 
        class="overflow-hidden h-full grid md:min-h-[387px]" 
        indicators
        arrows
      >
        <template #default="{ item, index }">
          <NuxtImg :src="item.imagePublicId" width="360" height="240" fit="fill" :modifiers="{g: 'faces'}"  loading="lazy" class="w-full h-full object-cover dark:opacity-80" draggable="false" />
          <div 
            v-if="page === index" 
            class="absolute bottom-0 bg-gradient-to-r from-primary-200 to-primary-400 h-1 progress z-20" 
          />
        </template>
        

        <template #prev="{ onClick, disabled }">
          <UButton :disabled="disabled" class="" size="sm" square @click="onClick">
            <Arrow size="sm" fill="white" class="rotate-180" />
          </UButton>
        </template>

        <template #next="{ onClick, disabled }">
          <UButton :disabled="disabled" class="" size="sm" square @click="onClick">
            <Arrow size="sm" fill="white" />
          </UButton>
        </template>
      </UCarousel>
    </template>
  </ImageBanner>
</template>

<script lang="ts" setup>
const { routes } = useContent()

const { data: leraren, error, status } = await useFetch('/api/leraren')
const loading = computed(() => status.value === 'pending' || status.value === 'idle')


const carousel = ref()

const currentSlide = computed(() => carousel.value?.page)
const currentSlideDebounced = refDebounced(currentSlide, 200)
const currentItem = computed(() => leraren.value?.[currentSlideDebounced.value - 1] || leraren.value?.[0])

const { getSectorColor } = useContent()

const page = computed(() => carousel.value?.page - 1 || 0)

const { init, exit } = useSlider(carousel)
const slideInterval = 10000


onMounted(() => {
  init(slideInterval)
});
onBeforeUnmount(() => {
  exit()
})

// This is needed to keep progress slider in sync with the carousel
watch(page, () => {
  exit()
  init(slideInterval)
})


const animationDuration = slideInterval / 1000 + 's'

</script>

<style lang="postcss" scoped>
.progress {
  width:100%;
  animation-duration: v-bind(animationDuration);
  animation-timing-function: linear;
  animation-name: animate-width;
}

@keyframes animate-width {
      from { width: 0% }
      to {
        width: 100%;
      }
    }
</style>