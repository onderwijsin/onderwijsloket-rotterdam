<template>
  <component :is="component" class="w-full" />
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
const { isMounted } = useUiState()
const component = computed(() => {
  if (props.size === 'half') return resolveComponent("SvgSkylineHalf")
  if (props.size === 'full') return resolveComponent("SvgSkylineFull")
  
  if (isMounted && !grid.md) return resolveComponent("SvgSkylineHalf")
  return resolveComponent("SvgSkylineFull")
})
</script>

<style>

</style>