<template>
  <ImageBanner :image-id="routes.bannerImage" :image-alt="routes.bannerImageAlt" class="bg-main-25 dark:bg-primary-950/20">
    <ArrowHeading>
      Vind <GradientText>de route</GradientText> die bij je past
    </ArrowHeading>
    <p class="mb-8">Er zijn talloze manieren om een carrière in het onderwijs te starten, maar welke past het beste bij jou? De routetool helpt je stap voor stap de perfecte route te vinden die aansluit bij jouw ambities en achtergrond.</p>
    <div class="flex flex-wrap gap-y-2">
      <UButton color="primary" variant="solid"  size="lg" to="https://onderwijsloket.com/routes/start" target="_blank">
        {{ routes.btnLabel }}
        <template #trailing>
          <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
        </template>
      </UButton>
      <UButton color="primary" variant="soft"  size="lg" :to="routes.article.url" target="_blank">
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