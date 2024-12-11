<template>
  <div class="relative w-full bg-gray-100 dark:bg-gray-800">
    <InnerContainer class="py-12 pb-6 md:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 sm:gap-16">
      <div>
        <h2 class="text-3xl lg:text-5xl font-black">Een <GradientText>onafhankelijk advies</GradientText> over jouw stap naar het onderwijs</h2>
        <p class="mb-8">De adviseurs van het landelijke <LogoOnderwijsloket class="w-36 ml-2 -mr-4 relative top-[3px] inline-block py-0" /> denken graag mee over jouw mogelijkheden in het onderwijs en de route daar naartoe.</p>
        <SavvyCalEmbed :label="advies.btnLabel" />
      </div>
      <NuxtImg :src="advies.bannerImage" width="600" height="400" fit="fill" class="w-full max-h-[300px] lg:max-h-full lg:absolute lg:top-12 lg:right-12 lg:bottom-12 lg:h-[calc(100%-6rem)] lg:w-[calc(50%-6rem)] xl:w-[calc(50%-12rem)] object-cover" :modifiers="{g:'faces'}" :alt="advies.bannerImageAlt" />
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
const { advies } = useContent()
</script>

<style>

</style>