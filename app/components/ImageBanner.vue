<template>
  <div class="relative w-full bg-gray-100 dark:bg-gray-800">
    <InnerContainer class="py-6 sm:py-12 grid lg:grid-cols-2 gap-8 sm:gap-16">
      <div class="md:py-8 lg:py-16" :class="reverse ? 'md:order-2' : 'order-1'">
        <slot />
      </div>
      <div class="relative md:w-[calc(100%+2rem)] lg:w-full h-full"  :class="reverse ? 'order-1 md:-left-4 md:-right-4 lg:right-auto lg:-left-8 xl:-left-20' : 'order-2 md:-left-4 md:-right-4 lg:left-auto lg:-right-8 xl:-right-20'">
        <slot name="media" />
        <Frame v-if="!$slots.media" size="lg" animated class="h-full">
          <NuxtImg :src="imageId" width="600" height="400" fit="fill" class="w-full h-full object-cover dark:opacity-80" :modifiers="{g:'faces'}" :alt="imageAlt" />
        </Frame>
      </div>
      
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  reverse?: boolean
  imageId: string
  imageAlt: string
}>()
</script>

<style>

</style>