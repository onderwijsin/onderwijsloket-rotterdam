<template>
  <header>
    <UContainer ref="header" class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 transition-colors z-50">
      <nav class="relative flex justify-between items-center h-[2.75rem]">
        <div 
          class="relative bg-white dark:bg-gray-950 transition-logo pl-1 -left-1"
          :class="!atTop ? 'py-2 top-0' : 'py-4 pr-4 sm:py-6 sm:pr-6 md:py-8 md:pr-8 top-4 sm:top-6 md:top-8'"
        >
          <div 
            class="transition-width" 
            :class="!atTop ? 'w-24' : 'w-40 md:w-48'"
          >
            <LogoRotterdam  class="w-full"/>
          </div>
        
        </div>
        
        <div class="flex items-center gap-3">
          <ul class="hidden md:flex gap-3">
            <li>
              <UButton
                variant="ghost"
                color="gray"
                size="xs"
                icon="i-heroicons-light-bulb-16-solid"
                @click="scrollTo('ontdek')"
              >
                Ontdek het onderwijs
              </UButton>
            </li>
            <li>
              <UButton
                variant="ghost"
                color="gray"
                size="xs"
                icon="i-heroicons-bolt-16-solid"
                @click="scrollTo('ervaar')"
              >
                Ervaar het onderwijs
              </UButton>
            </li>
            <li>
              <UButton
                variant="soft"
                size="xs"
                icon="i-heroicons-chat-bubble-left-right-16-solid"
                @click="scrollTo('advies')"
              >
                Hulp en advies
              </UButton>
            </li>
          </ul>
          <ThemeToggle v-if="useDarkMode" />
          <FontToggle v-if="useDyslexicFont" />
        </div>
      </nav>
    </UContainer>
  </header>
  
</template>

<script lang="ts" setup>

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const { useDarkMode, useDyslexicFont } = useAppConfig().settings.ui;

const { atTop } = useSnapScroll()
const { y } = useWindowScroll()

watchDebounced(y, (val) => {
  atTop.value = val < 50
}, { debounce: 50, maxWait: 500, immediate: true })

</script>

<style lang="postcss">
.transition-logo {
  transition: padding 0.2s ease-in, top 0.2s ease-in, background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.transition-width {
  transition: width 0.2s ease-in;
}


.cls-1, .cls-4 {
  @apply fill-primary-500;
}
.cls-2, .cls-3 {
  @apply fill-gray-950 dark:fill-white
}
</style>
