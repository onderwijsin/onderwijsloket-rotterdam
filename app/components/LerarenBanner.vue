<template>
  <ImageBanner :image-id="routes.bannerImage" :image-alt="routes.bannerImageAlt" reverse>
    <ArrowHeading color="secondary">
      Deze <GradientText from="secondary" to="secondary">Rotterdamse leraren</GradientText> gingen je voor
    </ArrowHeading>
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim.</p>

    <template #media>
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="overflow-hidden h-full grid" indicators>
        <img :src="item" class="w-full h-full" draggable="false">
      </UCarousel>
    </template>
  </ImageBanner>
</template>

<script lang="ts" setup>
const { routes } = useContent()

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]
</script>

<style>

</style>