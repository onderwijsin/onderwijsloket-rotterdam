<template>
  <div class="snap-container fluid">
    <UContainer>
      <section class="snap-section pb-h-[calc(100dvh-3.75rem)] sm:h-[calc(100dvh-2.25rem)] lg:h-[calc(100dvh-4.75rem)]">
        <HeroSlider
          :slides="slides"
          :autoplay="12000"
        />
      </section>
      <section class="snap-section w-full h-[130dvh] bg-error-400"></section>
      <section class="snap-section w-full h-[80dvh] bg-info-400"></section>
      <section class="snap-section w-full h-[180dvh] bg-warn-400"></section>
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
</script>

<style lang="postcss">
/* Container to enable snapping */
.snap-container {
  @apply h-screen overflow-y-scroll scroll-smooth;
  scroll-snap-type: y mandatory;
}

/* Each section should act as a snap point */
.snap-section {
  scroll-snap-align: start;
  @apply mb-4 sm:mb-6 lg:mb-8;
}
</style>
