<template>
  <div ref="target" class="flex flex-row" :class="{ animated, inView: inView && animated && targetIsVisible }" :style="{ gap: `${gap}px` }">
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
    inView?: boolean 
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


const target = ref(null)
const targetIsVisible = ref(false)

const { resume, pause, stop } = useIntersectionObserver(
  target,
  ([entry], observerElement) => {
    targetIsVisible.value = entry?.isIntersecting || false
  },
  {
    rootMargin: '-160px 0px -200px 0px', // Adjust viewport edges
    threshold: 0, // Trigger as soon as it intersects
    immediate: false
  }
);

onNuxtReady(() => resume())

onDeactivated(() => pause())
onActivated(() => resume())
onBeforeUnmount(() => stop())

</script>

<style lang="postcss" scoped>
.animated {
  .item:last-child {
    transition: transform 0.2s cubic-bezier(.22,.68,0,1.71);
  }
  &:hover, &.inView {
    .item:last-child {
      transform: translateX(10px);
    }
  }
}
</style>