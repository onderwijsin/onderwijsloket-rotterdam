<template>
  <div class="flex flex-row" :class="{animated}" :style="{ gap: `${gap}px` }">
    <component 
      v-for="i in amount" 
      :is="component"
      :key="i" 
      :fill="fill" 
      :style="{ width: sizePx }" 
      class="item" 
      :outline="variant === 'outline'"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ 
    amount?: number, 
    animated?: boolean 
    fill?: 'primary' | 'secondary' | 'tertiary' | 'gray'
    size?: 'sm' | 'md' | 'base' | 'lg' | 'xl' | number
    gap?: number
    type?: 'arrow' | 'chevron' | 'triangle'
    variant?: 'solid' | 'outline'
  }>(), { 
    amount: 1,
    size: 'base',
    gap: -4,
    type: 'arrow',
    variant: 'solid'
  }
)

const component = computed(() => {
  if (props.type === 'chevron') return resolveComponent('SvgChevron')
  if (props.type === 'triangle') return resolveComponent('SvgTriangle')
  return resolveComponent('SvgArrow')
})

const sizePx = computed(() => {
  if (props.size === 'sm') return '16px'
  if (props.size === 'md') return '24px'
  if (props.size === 'lg') return '40px'
  if (props.size === 'xl') return '52px'
  if (typeof props.size === 'number') return `${props.size}px`
  return '32px'
})
</script>

<style lang="postcss" scoped>
.animated {
  .item:last-child {
    transition: transform 0.2s cubic-bezier(.22,.68,0,1.71);
  }
  &:hover {
    .item:last-child {
      transform: translateX(10px);
    }
  }
}
</style>