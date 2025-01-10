<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.37 57.08">
    <g>
      <polygon :class="outline ? 'fill-transparent' : fill === 'primary' ? 'fill-primary-500' : fill === 'secondary' ? 'fill-secondary-500' : fill === 'tertiary' ? 'fill-tertiary-500' : fill === 'white' ? 'fill-white' : 'fill-gray-950 dark:fill-white'" points="0 0 0 57.08 45.37 29.03 0 0"/>
      <path class="fill-gray-950 dark:fill-white" d="M0,57.08V0l45.37,29.03L0,57.08ZM3.5,6.39v44.41l35.3-21.82L3.5,6.39Z"/>
    </g>
  </svg>
</template>

<script lang="ts" setup>

const props = withDefaults(
  defineProps<{
    fill?: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white'
    outline?: boolean
  }>(), {
    fill: 'gray'
  }
)



</script>