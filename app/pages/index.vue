
<script lang="ts" setup>
definePageMeta({
  name: 'index',
})

useSeoMeta({
  title: 'Home',
  description: "Kom werken in het Rotrterdamse onderwijs",
})


const { slides } = useContent()
</script>


<template>
  <div>
    <HeroSlider
      :slides="slides"
      :autoplay="12000"
    />

  </div>
</template>

<style>

</style>