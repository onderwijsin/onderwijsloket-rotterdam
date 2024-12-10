<template>
  <NuxtLayout name="site">
    <span ref="top"></span>
    <slot />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { atTop } = useSnapScroll()

const top = ref(null)
const targetIsVisible = useElementVisibility(top)

watch(targetIsVisible, newVal => {
  atTop.value = newVal
}) 
</script>

<style>

</style>