<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.71 62.61">
    <g>
      <polygon :class="outline ? 'fill-transparent' : fill === 'primary' ? 'fill-primary-500' : fill === 'secondary' ? 'fill-secondary-500' : fill === 'tertiary' ? 'fill-tertiary-500' : 'fill-gray-950 dark:fill-white'" points="39.59 29.19 12.53 2.12 10.4 0 8.28 2.12 2.12 8.28 0 10.4 2.12 12.52 20.91 31.31 2.12 50.1 0 52.22 2.12 54.35 8.28 60.5 10.41 62.61 12.53 60.49 39.59 33.43 41.71 31.31 39.59 29.19"/>
      <path class="fill-gray-950 dark:fill-white" d="M10.4,4.24l27.06,27.07-27.06,27.06-6.16-6.15,20.91-20.91L4.24,10.4l6.16-6.16M10.4,0l-2.12,2.12-6.16,6.16L0,10.4l2.12,2.12,18.79,18.79L2.12,50.1l-2.12,2.12,2.12,2.12,6.16,6.15,2.12,2.12,2.12-2.12,27.06-27.06,2.12-2.12-2.12-2.12L12.53,2.12l-2.12-2.12h0Z"/>
    </g>
  </svg>
</template>

<script lang="ts" setup>

const props = withDefaults(
  defineProps<{
    fill?: 'primary' | 'secondary' | 'tertiary' | 'gray'
    outline?: boolean
  }>(), {
    fill: 'gray'
  }
)



</script>