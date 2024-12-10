<template>
  <UContainer ref="header" class="sticky top-0 transition-all duration-200 ease-in z-50">
    <nav class="relative flex justify-between items-center h-[2.75rem]">
      <div 
        class="relative bg-white dark:bg-gray-950 transition-padding"
        :class="y > 50 ? 'py-2 top-0' : 'py-4 pr-4 sm:py-6 sm:pr-6 md:py-8 md:pr-8 top-4 sm:top-6 md:top-8'"
      >
        <div 
          class="transition-width" 
          :class="y > 50 ? 'w-24' : 'w-40 md:w-48'"
        >
          <Logo 
            class="w-full"
          />
        </div>
       
      </div>
      
      <div class="flex items-center gap-3">
        <ul class="flex gap-3">
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
              @click="scrollTo('ervaar')"
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
</template>

<script lang="ts" setup>

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const { useDarkMode, useDyslexicFont } = useAppConfig().settings.ui;

const { y } = useSnapScroll()

</script>

<style lang="postcss">
.transition-padding {
  transition: padding 0.2s ease-in, top 0.2s ease-in;
}
.transition-width {
  transition: width 0.2s ease-in;
}
</style>
