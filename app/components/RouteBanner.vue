<template>
  <div class="relative w-full bg-gray-100 dark:bg-gray-800">
    <InnerContainer class="py-12 pb-6 md:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 sm:gap-16">
      <div>
        <ArrowHeading>
          Vind <GradientText>de route</GradientText> die bij je past
        </ArrowHeading>
        <p class="mb-8">Er zijn 1001 (of misschien wel meer) mogelijke manieren om je weg naar het onderwijs te vinden, maar er is er maar één die perfect bij je past.</p>
        <div class="flex flex-wrap">
          <UButton color="primary" variant="solid"  size="lg" to="https://onderwijsloket.com/routes/start" target="_blank">
            {{ routes.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
          <UButton color="secondary" variant="soft"  size="lg" to="https://www.onderwijsloket.com/kennisbank/routes-naar-het-leraarschap/" target="_blank">
            routes naar het leraarschap
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
        </div>
        
      </div>
      <div :src="routes.bannerImage" width="600" height="400" fit="fill" class="hidden lg:block bg-gray-300 dark:bg-gray-700 w-full max-h-[300px] lg:max-h-full lg:absolute lg:top-12 lg:right-12 lg:bottom-12 lg:h-[calc(100%-6rem)] lg:w-[calc(50%-6rem)] xl:w-[calc(50%-12rem)] object-cover" :modifiers="{g:'faces'}" :alt="routes.bannerImageAlt" />
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
const { routes } = useContent()
</script>

<style>

</style>