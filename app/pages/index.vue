<template>
  <div class="fluid relative z-10">
    <span ref="snapTop"></span>
    <UContainer>
      <section>
        <div class="h-[calc(100dvh-5.5rem)]">
          <HeroSlider
            :slides="slides"
            :autoplay="12000"
          />
        </div>
        
      </section>
      <section>
        <div class="w-full bg-gray-100 dark:bg-gray-800">
          <InnerContainer class="py-24 md:py-32 flex gap-12">
            <div class="flex flex-col gap-8">
              <div class="flex gap-8 items-center">
                <div class="bg-gray-400 dark:bg-gray-700 w-20 h-20 grid place-items-center shrink-0">
                  <UIcon name="i-heroicons-academic-cap-20-solid" class="w-8 h-8 text-white dark:text-gray-200" />
                </div>
                <h2 class="leading-snug mb-0">Ontdek werken in het Rotterdamse onderwijs!</h2>
              </div>
              <BadgeGroup>
                <UBadge color="primary" variant="solid" size="lg">
                  <UIcon name="i-heroicons-calendar-days-20-solid" class="w-4 h-4 text-white dark:text-gray-950 mr-2" />
                  <span>29-01 -2025</span>
                </UBadge>
                <UBadge color="primary" variant="soft" size="lg">
                  <span>informatiebijeenkomst</span>
                </UBadge>
                <UBadge color="primary" variant="soft" size="lg">
                  <UIcon name="i-heroicons-currency-euro-20-solid" class="w-4 h-4 text-primary-500 mr-2" />
                  <span>gratis</span>
                </UBadge>
              </BadgeGroup>
            </div>
            <div class="flex flex-col items-start gap-8">
              <p>Benieuwd naar een carrière in het onderwijs of de kinderopvang? Kom naar de informatiebijeenkomst op 29 januari en ontdek de mogelijkheden!</p>
              <UButton color="primary" variant="solid" size="lg" to="https://google.com" target="_blank">
                Meer informatie en aanmelden
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-4" />
                </template>
              </UButton>
            </div>
            
          </InnerContainer>
        </div>
      </section>
      <section id="ontdek">
        <div class="w-full py-24 md:py-32">
          <InnerContainer>
            <div class="mb-24 grid grid-cols-4">
              <div class="col-span-3">
                <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ontdek het onderwijs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quare attende, quaeso.</p>
              </div>
              <div class="col-span-1 flex flex-col items-end justify-end">
                <UButton color="gray" variant="soft" size="lg" to="https://onderwijsloket.com/kennisbank/" target="_blank">
                  Naar kennisbank
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-4" />
                  </template>
                </UButton>
              </div>
            </div>
            <div class="mb-24 grid grid-cols-3 gap-8">
              <UCard>
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-700 rounded-md w-full h-40" />
                </template>
                  <h5 class="text-lg">Leer de verschillende onderwijssectoren kennen</h5>
                <template #footer></template>
              </UCard>
              <UCard>
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-700 rounded-md w-full h-40" />
                </template>
                  <h5 class="text-lg">Docent worden? Er zijn zó veel meer toffe functies in het onderwijs!</h5>
                <template #footer></template>
              </UCard>
              <UCard>
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-700 rounded-md w-full h-40" />
                </template>
                  <h5 class="text-lg">Over salaris, werkdruk, opleidingskosten en andere praktische vragen</h5>
                <template #footer></template>
              </UCard>
            </div>
            <div class="mb-24">
              <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Veelgestelde vragen over het onderwijs</h2>
            </div>
          </InnerContainer>
        </div>
      </section>
      <section>
        <div class="w-full bg-gray-100 dark:bg-gray-800">
          <InnerContainer class="py-24 md:py-32">
            <h2>Vind de route die bij je past</h2>
          </InnerContainer>
        </div>
      </section>
      <section  id="ervaar" class="snap-section w-full py-24 md:py-32">
        <InnerContainer>
          <div class="mb-24 text-center">
            <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ervaar het onderwijs</h2>
            <h3 class="text-3xl md:text-5xl ">Lees, luister en bekijk de verhalen van docenten die je voor gingen</h3>
          </div>
        </InnerContainer>
      </section>
      <section id="advies">
        <div class="w-full bg-gray-100 dark:bg-gray-800">
          <InnerContainer class="py-24 md:py-32">
            <h2>Een onafhankelijk advies over jouw stap naar het onderwijs</h2>
          </InnerContainer>
        </div>
      </section>
      <section>
        <div class="w-full py-24 md:py-32">
          <InnerContainer>
            <div class="mb-24">
              <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Contact met Onderwijsloket Rotterdam</h2>
            </div>
          </InnerContainer>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'index',
  layout: 'site',
});

useSeoMeta({
  title: 'Home',
  description: 'Kom werken in het Rotrterdamse onderwijs',
});

const { slides } = useContent();

const { atTop } = useSnapScroll()


const snapTop = ref(null)
const targetIsVisible = useElementVisibility(snapTop)

watch(targetIsVisible, newVal => {
  atTop.value = newVal
}) 
</script>

<style lang="postcss">
/* Container to enable snapping */
html {
  @apply h-screen overflow-y-scroll scroll-smooth;
}

body {
  scroll-snap-type: y mandatory;
  @apply h-screen overflow-y-scroll scroll-smooth;
  section {
    /* Each section should act as a snap point */
    scroll-snap-align: start;
    @apply py-[2.75rem];
  }
}

h1, h2, h3 {
  @apply font-black;
}
</style>
