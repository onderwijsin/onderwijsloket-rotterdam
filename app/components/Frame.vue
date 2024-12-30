<template>
  <div class="frame" :class="{animated, fitContent}">
    <div class="z-10 inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'base' | 'lg' | 'xl'
    animated?: boolean
    fitContent?: boolean
  }>(), {
    size: 'base'
  }
)

const sizePx = computed(() => {
  if (props.size === 'sm') return '16px'
  if (props.size === 'md') return '24px'
  if (props.size === 'lg') return '40px'
  if (props.size === 'xl') return '52px'
  return '32px'
})

const borderPx = computed(() => {
  if (props.size === 'sm') return '3px'
  if (props.size === 'md') return '4px'
  if (props.size === 'lg') return '5px'
  if (props.size === 'xl') return '6px'
  return '4px'
})

const hoverDistancePx = computed(() => {
  if (props.size === 'sm') return '-6px'
  if (props.size === 'md') return '-8px'
  if (props.size === 'lg') return '-12px'
  if (props.size === 'xl') return '-14px'
  return '-10px'
})
</script>

<style lang="postcss" scoped>
.frame {
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: v-bind(sizePx);
    height: v-bind(sizePx);
    z-index: 20;
    @apply border-gray-950 dark:border-gray-50;
  }

  &::before {
    transition: top 0.2s cubic-bezier(.22,.68,0,1.71), left 0.2s cubic-bezier(.22,.68,0,1.71);
    top: 0px;
    left: 0px;
    border-top: v-bind(borderPx) solid;
    border-left: v-bind(borderPx) solid;
  }

  &::after {
    transition: bottom 0.2s cubic-bezier(.22,.68,0,1.71), right 0.2s cubic-bezier(.22,.68,0,1.71);
    bottom: 0px;
    right: 0px;
    border-bottom: v-bind(borderPx) solid;
    border-right: v-bind(borderPx) solid;
  }

  

  &.fitContent {
    width: fit-content;
  }
}

.animated:hover, 
.frame-hover-group:hover .frame {
    &::before {
      top: v-bind(hoverDistancePx);
      left: v-bind(hoverDistancePx);
    }

    &::after {
      bottom: v-bind(hoverDistancePx);
      right: v-bind(hoverDistancePx);
    }
  }
</style>