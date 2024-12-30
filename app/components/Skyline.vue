<template>
  <ClientOnly>
    <component :is="component" class="w-full" />
    <template #fallback>
      <SvgSkylineFull class="w-full" />
    </template>
  </ClientOnly>
  
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: 'full' | 'half' | 'dynamic'
  }>(), {
    size: 'full'
  }
)

const { grid } = useResponsive()

const component = computed(() => {
  if (props.size === 'half' || !grid.md) return resolveComponent("SvgSkylineHalf")
  return resolveComponent("SvgSkylineFull")
})
</script>

<style>

</style>