<script lang="ts" setup>

definePageMeta({
  name: 'index',
  layout: 'base',
});


const { home: page } = useContent().pages

useSeoMeta({
  title: page.name,
  description: page.meta,
});

const { slides } = useContent();

const { scrollTo } = useSnapScroll()


</script>

<template>
  <div class="fluid relative z-10">
    <UContainer>
      <section style="padding-top: 0px">
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
        <Activities />
      </section>
      <section id="leraren"  >
        <LerarenBanner />
      </section>
      <section id="ontdek">
        <Articles />
      </section>
      
      
      <section id="routes">
        <RouteBanner />
      </section>
      <section>
        <Faqs />
      </section>
      <section id="ervaar">
        <InnerContainer class="mb-20 md:mb-32 md:pt-20">
          <div class="relative text-center py-6 md:py-0">
            <span class="absolute -top-8 md:-top-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
            
            <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Ervaar het onderwijs</h2>
            <h3 class="text-3xl md:text-5xl ">Inspiratie uit de klas</h3>
            <p>Laat je inspireren door de verhalen van mensen die al eerder voor het onderwijs kozen. Ontdek hun ervaringen, uitdagingen en hoogtepunten en krijg een uniek kijkje in het leven van een leraar. Misschien wordt dit ook wel jouw volgende stap!</p>

            <span class="absolute -bottom-8 md:-bottom-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
          </div>
        </InnerContainer>
        
        <div class="mb-20 lg:mb-32">
          <Stories />
        </div>
        <InnerContainer id="rotterdam" class="mb-20 md:mb-32 pt-12">
          <div class="relative text-center py-6 md:py-0">
            <span class="absolute -top-8 md:-top-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
            
            <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Werken in Rotterdam</h2>
            <h3 class="text-3xl md:text-5xl ">Onderwijs met karakter</h3>
            <p>Rotterdam biedt een dynamische omgeving vol diversiteit, innovatie en ambitie. Vind jouw plek bij een van de schoolbesturen, ontdek het brede opleidingsaanbod en ervaar waarom werken in Rotterdam zoveel meer is dan alleen lesgeven!</p>

            <span class="absolute -bottom-8 md:-bottom-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
          </div>
          
        </InnerContainer>
        <Partners />
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
