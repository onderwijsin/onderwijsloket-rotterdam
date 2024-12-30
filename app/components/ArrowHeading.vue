<template>
  <component :is="type" class="text-3xl lg:text-5xl font-black relative">
    <ClientOnly>
      <Arrow :animated="grid.md" fill="primary" class="inline-flex md:absolute md:-left-10 lg:-left-12 md:top-3 lg:top-3" :size="arrowSize" />
    </ClientOnly>
    
    <slot />

    <span v-if="!$slots">{{ title }}</span>
  </component>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>(), {
    type: 'h2'
  }
)

const { grid } = useResponsive()

const arrowSize = computed(() => {
  if (grid.lg) return 32
  if (grid.md) return 24
  return 20
})
</script>

<style>

</style>