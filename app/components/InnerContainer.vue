<template>
  <div :class="paddingClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ from?: 'sm' | 'md' | 'lg' | 'xl' }>()

const breakpointPaddings = {
  sm: 'sm:px-12',
  md: 'md:px-16',
  lg: 'lg:px-20',
  xl: 'xl:px-32'
} as const

const breakpoints = ['sm', 'md', 'lg', 'xl'] as const

const paddingClasses = computed(() => {
  // Base classes array
  const baseClasses: string[] = []

  // If 'from' prop is defined, add classes from that breakpoint onwards
  if (props.from) {
    const startIndex = breakpoints.indexOf(props.from)
    
    // Add responsive padding classes for breakpoints from the specified 'from' point
    for (const breakpoint of breakpoints.slice(startIndex)) {
      const paddingClass = breakpointPaddings[breakpoint]
      if (paddingClass) {
        baseClasses.push(paddingClass)
      }
    }
  } else {
    // If no 'from' prop, apply base mobile padding and all responsive paddings
    baseClasses.push(
      'px-6', 
      'sm:px-12',
      'md:px-16',
      'lg:px-20',
      'xl:px-32'
    )
  }

  return baseClasses
})
</script>