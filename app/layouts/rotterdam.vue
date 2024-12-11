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


// TODO this layout is not always used. So maybe just useWindowScroll() in logo component? That would work if .snap-container is the body (i think)
</script>

<style>

</style>