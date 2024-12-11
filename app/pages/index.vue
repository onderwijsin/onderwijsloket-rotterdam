<script lang="ts" setup>

definePageMeta({
  name: 'index',
  layout: 'rotterdam',
});

useSeoMeta({
  title: 'Home',
  description: 'Ontdek jouw mogelijkheden in het Rotterdamse onderwijs. Met een actueel overzicht van vacatures, oriëntatie-activiteiten en informatie over het vinden van een werkplek of opleiding.',
});

const { slides, activity, cards } = useContent();


</script>

<template>
  <div class="fluid relative z-10">
    <UContainer>
      <section>
        <div class="h-[calc(100dvh-5.5rem)] max-h-[900px]">
          <HeroSlider
            :slides="slides"
            :autoplay="12000"
          />
        </div>
        
      </section>
      <section id="activiteiten">
        <ActivityBanner :data="activity" />
      </section>
      <section id="ontdek">
        <div class="w-full pb-12 md:py-20">
          <InnerContainer from="xl">
            <div class="mb-8 md:mb-16 lg:mb-24 grid md:grid-cols-4">
              <div class="md:col-span-3">
                <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ontdek het onderwijs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quare attende, quaeso.</p>
              </div>
              <div class="hidden md:flex col-span-1 flex-col items-end justify-end">
                <UButton color="gray" variant="solid" size="lg" to="https://onderwijsloket.com/kennisbank/" target="_blank">
                  Naar kennisbank
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
                  </template>
                </UButton>
              </div>
            </div>
            <div class="mb-8 md:mb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <NuxtLink 
                v-for="card in cards"
                :to="card.to" 
                target="_blank" 
                class="grid transition-all hover:scale-[101%]"
              >
                <UCard>
                  <template #header>
                    <div class="bg-gray-200 dark:bg-gray-700 rounded-md w-full h-40" />
                  </template>
                    <h5 class="text-lg">{{card.title}}</h5>
                  <template #footer>
                    <div class="flex justify-end">
                      <UButton square icon="i-heroicons-arrow-top-right-on-square-16-solid" color="gray" variant="ghost" size="lg" />
                    </div>
                  </template>
                </UCard>
              </NuxtLink>
            </div>
            <UButton class="mb-24 md:hidden" block color="gray" variant="solid" size="lg" to="https://onderwijsloket.com/kennisbank/" target="_blank">
                Naar kennisbank
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
                </template>
            </UButton>
            <Faqs />
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
          <InnerContainer from="xl">
            <div class="mb-24">
              <h2 class="text-sm sm:text-lg uppercase text-primary-500 dark:text-primary-400">Contact met Onderwijsloket Rotterdam</h2>
            </div>
          </InnerContainer>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style lang="postcss">
#errorContainer {
  @apply pt-28;

  & > div {
    border-radius: 0;
  }
}
</style>


<style lang="postcss" scoped>
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
