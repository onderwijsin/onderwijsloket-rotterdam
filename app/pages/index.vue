<script lang="ts" setup>

definePageMeta({
  name: 'index',
  layout: 'site',
});


const { home: page } = useContent().pages

useSeoMeta({
  title: page.name,
  description: page.meta,
});

const { slides, activity, cards } = useContent();

const { scrollTo } = useSnapScroll()





</script>

<template>
  <div class="fluid relative z-10">
    <UContainer>
      <section>
        <div class="relative h-[calc(100vh-2.75rem-16px)] sm:h-[calc(100dvh-5.5rem)] max-h-[900px] min-h-[500px]">
          <HeroSlider
            :slides="slides"
            :autoplay="12000"
          />
          <div class="bg-white dark:bg-gray-950 transition-colors absolute -right-1 -bottom-1 pr-1 pb-1 square grid place-items-end w-12 z-20">
            <UButton 
              square 
              size="xl" 
              variant="ghost" 
              class="animate-bounce focus:animate-none" 
              :ui="{icon: { size: { xl: 'w-5 h-5' }}}" 
              @click="scrollTo('activiteiten')" 
            >
              <Arrow variant="solid" type="triangle" class="rotate-90" :size="8" :amount="2" />
            </UButton>
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
                <Arrow variant="outline" type="chevron" animated size="md" :amount="3" class="mb-6" />
                <h2 class="sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400">Ontdek het onderwijs</h2>
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
            <UCarousel 
              v-slot="{ item }" 
              :items="cards" 
              class="mb-8 md:mb-24" 
              :ui="{
                container: 'gap-3 sm:gap-6 py-5 -my-5 px-1 -mx-1',
                item: 'basis-[90%] sm:basis-[45%] lg:basis-[30%]' 
              }"
            > 
              <NuxtLink 
                :to="item.to" 
                target="_blank" 
                class="grid w-full transition-all hover:scale-[101%]"
              >
              <FrameHoverGroup class="grid">
                <UCard>
                  <template #header>
                    <Frame size="md">
                      <div class="bg-gray-200 dark:bg-gray-700 w-full h-40" />
                    </Frame>
                  </template>
                    <h5 class="text-lg">{{item.title}}</h5>
                  <template #footer>
                    <div class="flex justify-end">
                      <UButton square icon="i-heroicons-arrow-top-right-on-square-16-solid" color="gray" variant="ghost" size="lg" />
                    </div>
                  </template>
                </UCard>
                </FrameHoverGroup>
              </NuxtLink>
            </UCarousel>
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
        <InnerContainer class="mb-20 md:mb-32 md:pt-20">
          <div class="relative text-center">
            <span class="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated :size="8" :amount="2" />
            </span>
            
            <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ervaar het onderwijs</h2>
            <h3 class="text-3xl md:text-5xl ">Lees, luister en bekijk de verhalen van docenten die je voor gingen</h3>

            <span class="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated :size="8" :amount="2" />
            </span>
          </div>
        </InnerContainer>
        
        <div class="space-y-20 lg:space-y-32">
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
