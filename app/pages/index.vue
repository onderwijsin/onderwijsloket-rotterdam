<script lang="ts" setup>

definePageMeta({
  name: 'index',
  layout: 'site',
});

useSeoMeta({
  title: 'Home',
  description: 'Ontdek jouw mogelijkheden in het Rotterdamse onderwijs. Met een actueel overzicht van vacatures, oriëntatie-activiteiten en informatie over het vinden van een werkplek of opleiding.',
});

const { slides, activity, cards } = useContent();

const { scrollTo } = useSnapScroll()

</script>

<template>
  <div class="fluid relative z-10">
    <UContainer>
      <section>
        <div class="relative h-[calc(100dvh-2.75rem-16px)] sm:h-[calc(100dvh-5.5rem)] max-h-[900px]">
          <HeroSlider
            :slides="slides"
            :autoplay="12000"
          />
          <div class="bg-white dark:bg-gray-950 transition-colors absolute -right-1 -bottom-1 pr-1 pb-1 square grid place-items-end w-12 z-20">
            <UButton 
              square 
              icon="i-heroicons-chevron-double-down-20-solid" 
              size="xl" 
              variant="ghost" 
              class="animate-bounce focus:animate-none" 
              :ui="{icon: { size: { xl: 'w-5 h-5' }}}" 
              @click="scrollTo('activiteiten')" 
            />
          </div>
        </div>
        
      </section>
      <section id="activiteiten">
        <ActivityBanner :data="activity" />
      </section>
      <section id="ontdek">
        <div class="w-full pb-4 md:py-20">
          <InnerContainer from="xl">
            <div class="mb-8 md:mb-16 lg:mb-24 grid md:grid-cols-4">
              <div class="md:col-span-3">
                <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ontdek het onderwijs</h2>
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
      <section id="routes">
        <RouteBanner />
      </section>
      <section id="ervaar">
        <InnerContainer class="mb-12 md:mb-24 md:pt-20">
          <div class="text-center">
            <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ervaar het onderwijs</h2>
            <h3 class="text-3xl md:text-5xl ">Lees, luister en bekijk de verhalen van docenten die je voor gingen</h3>
          </div>
        </InnerContainer>
        
        <div class="space-y-20">
          <Stories />
          <Partners />
        </div>
      </section>
      <section id="advies">
        <AdviesBanner />
      </section>
      <section id="contact">
        <ContactSection />
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

@media screen and (min-width: 640px) {
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
    }
  }
}

section {
    @apply py-[2.75rem];
}


h1, h2, h3 {
  @apply font-black;
}
</style>
