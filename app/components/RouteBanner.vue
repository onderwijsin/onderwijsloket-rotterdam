<template>
  <ImageBanner :image-id="routes.bannerImage" :image-alt="routes.bannerImageAlt">
    <ArrowHeading>
      Vind <GradientText>de route</GradientText> die bij je past
    </ArrowHeading>
    <p class="mb-8">Er zijn 1001 (of misschien wel meer) mogelijke manieren om je weg naar het onderwijs te vinden, maar er is er maar één die perfect bij je past.</p>
    <div class="flex flex-wrap gap-y-2">
      <UButton color="primary" variant="solid"  size="lg" to="https://onderwijsloket.com/routes/start" target="_blank">
        {{ routes.btnLabel }}
        <template #trailing>
          <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
        </template>
      </UButton>
      <UButton color="secondary" variant="soft"  size="lg" :to="routes.article.url" target="_blank">
        {{ routes.article.title }}
        <template #trailing>
          <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
        </template>
      </UButton>
    </div>
  </ImageBanner>
</template>

<script lang="ts" setup>
const { routes } = useContent()
</script>

<style>

</style>