<template>
  <NuxtLayout name="base">
      
      <div class="fluid relative z-10">
        <UContainer>
          <div class="relative h-[280px] md:h-[400px]">
            <NuxtImg
              :src="image"
              width="1400"
              height="600"
              sizes="480px md:600px lg:1080px"
              quality="60"
              class="h-full w-full object-cover"
              preload
              fit="fill"
              :modifiers="{ g: 'faces' }"
              :alt="title"
            />
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-primary-500/0 dark:from-primary-900/40 dark:to-primary-900/20 transition-colors" />
          </div>
          <InnerContainer class="py-8 md:py-12" from="md">
            <h1 class="font-black text-primary-500 dark:text-primary-400 text-2xl md:text-4xl lg:text-5xl">{{ title }}</h1>
            <slot />
          </InnerContainer>
        </UContainer>
      </div>

      
      
    
  </NuxtLayout>
</template>

<script lang="ts" setup>

const props = defineProps<{
  image: string
  title: string
}>()
</script>

<style>

</style>