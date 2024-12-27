<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.41 90.55">
    <g>
      <path :class="outline ? 'fill-transparent' : fill === 'primary' ? 'fill-primary-500' : fill === 'secondary' ? 'fill-secondary-500' : fill === 'tertiary' ? 'fill-tertiary-500' : 'fill-gray-950 dark:fill-white'" d="M88.26,41.56L66.65,4.14l-.19-.34-2.13-3.8H21.39l6.43,11.14,8.99,15.58H0v37.13h36.81l-8.98,15.56-6.43,11.14h42.87l2.14-3.71,21.85-37.84,2.15-3.72-2.15-3.72ZM7.42,34.17h0s0-.01,0-.01h0s0,.01,0,.01Z"/>
      <path class="fill-gray-950 dark:fill-white" d="M7.42,34.16h42.25l-15.42-26.72h25.72l.22.39,21.64,37.47-21.85,37.84h-25.72l15.42-26.7H7.43v-22.27h-.01,0ZM21.39,0l6.43,11.14,8.99,15.58H0v37.13h36.81l-8.98,15.56-6.43,11.14h42.87l2.14-3.71,21.85-37.84,2.15-3.72-2.15-3.72L66.65,4.14l-.19-.34-2.13-3.8H21.39Z"/>
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
