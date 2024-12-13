<template>
  <div class="grid gap-6 md:grid-cols-12 lg:gap-8">
      <NuxtLink 
        v-for="story in stories" 
        class="bg-gray-50 dark:bg-gray-800 py-6 px-4 flex flex-col gap-6 transition-all hover:scale-[101%] hover:bg-gray-100 hover:dark:bg-gray-700/50"
        :class="story.type === 'article' ? 'md:col-span-6 lg:col-span-4' : 'md:col-span-6'"
        :to="story.url"
        :title="story.title"
        target="_blank"
      >
        <div class="flex justify-between flex-wrap gap-x-4 gap-y-2">
          <BadgeGroup>
            <UBadge v-for="sector in story.sectors" size="xs" variant="soft" :label="sector" class="whitespace-nowrap" :color="getSectorColor(sector)" />
          </BadgeGroup>
          <BadgeGroup>
            <UBadge v-if="story.type !== 'article'" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon :name="story.type === 'podcast' ? 'i-heroicons-microphone-20-solid' : 'i-heroicons-film-20-solid'" class="w-3 h-3 mr-1" />
              <span>{{ story.type }}</span>
            </UBadge>
            <UBadge v-if="story.source" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 mr-1" />
              <span>{{ story.source }}</span>
            </UBadge>
            <UBadge v-if="story.duration" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon name="i-heroicons-clock-16-solid" class="w-3 h-3 mr-1" />
              <span>{{ story.duration }} min</span>
            </UBadge>
          </BadgeGroup>
        </div>

        <div class="text-lg sm:text-xl flex items-center gap-6" :class="story.type !== 'article' ? 'mt-auto' : ''">
          <div v-if="story.type === 'podcast' || story.type === 'video'" class="relative shrink-0">
            <NuxtImg :src="story.media.thumb_id" width="80" height="80" fit="fill" :modifiers="{g:'face'}" class="object-cover rounded-full shrink-0 w-24 h-24" :alt="story.title" />
            <UIcon name="i-heroicons-play-20-solid" class="w-7 h-7 text-white shadow-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
          </div>
          <h4 :class="story.type !== 'article' ? 'mb-0' : ''">{{ story.title }}</h4>
        </div>

        <div v-if="story.type === 'article'" class="flex gap-4 mt-auto">
          <NuxtImg :src="story.author.image_id" width="60" height="60" fit="fill" :modifiers="{g:'face'}" class="object-cover rounded-full shrink-0 w-16 h-16" :alt="story.author.name" />
          <div class="flex flex-col justify-center gap-0">
            <h6 class="font-bold mb-0">{{ story.author.name }}</h6>
            <p class="text-2xs">{{ story.author.subtitle }}</p>
          </div>
        </div>
      </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const { stories, getSectorColor } = useContent()
</script>

<style>

</style>