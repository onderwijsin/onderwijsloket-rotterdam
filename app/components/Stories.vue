<template>
  <div v-if="!error" class="grid-container">
      <NuxtLink 
        v-for="story in verhalen" 
        class="relative group bg-gray-50 dark:bg-gray-800 py-6 px-4 flex flex-col gap-6 transition-all hover:scale-[101%] hover:bg-gray-100 hover:dark:bg-gray-700/50"

        :to="story.url || undefined"
        :title="story.title"
        target="_blank"
      >
        <div class="skew-background" :class="getSectorBackgroundColor(story.sectoren[0])" />
        <div class="relative flex justify-between flex-wrap gap-x-4 gap-y-2">
          <BadgeGroup>
            <UBadge v-for="sector in story.sectoren" size="xs" variant="soft" :label="sector" class="whitespace-nowrap last:mr-auto" :color="getSectorColor(sector)" />
          </BadgeGroup>
          <BadgeGroup>
            <UBadge v-if="story.type !== 'artikel'" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon :name="story.type === 'podcast' ? 'i-heroicons-microphone-20-solid' : 'i-heroicons-film-20-solid'" class="w-3 h-3 mr-1" />
              <span>{{ story.type }}</span>
            </UBadge>
            <UBadge v-if="story.bron" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 mr-1" />
              <span>{{ story.bron }}</span>
            </UBadge>
            <UBadge v-if="story.duration" size="xs" color="white" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
              <UIcon name="i-heroicons-clock-16-solid" class="w-3 h-3 mr-1" />
              <span>{{ story.duration }} min</span>
            </UBadge>
          </BadgeGroup>
        </div>

        <div class="relative text-lg sm:text-xl flex items-center gap-6" :class="story.type !== 'artikel' ? 'my-auto' : ''">
          <div v-if="story.type === 'podcast' || story.type === 'video'" class="relative shrink-0">
            <NuxtImg v-if="story.imagePublicId" :src="story.imagePublicId" width="80" height="80" fit="fill" :modifiers="{g:'face'}" class="object-cover rounded-full shrink-0 w-24 h-24" :alt="story.title" />
            <div v-else class="rounded-full shrink-0 w-24 h-24 bg-gray-200 dark:bg-gray-700" />
            <UIcon name="i-heroicons-play-20-solid" class="w-7 h-7 text-white shadow-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
          </div>
          <h4 :class="story.type !== 'artikel' ? 'mb-0 line-clamp-3' : ''">{{ story.title }}</h4>
        </div>

        <div v-if="story.type === 'artikel' && story.author" class="relative flex gap-4 mt-auto">
          <NuxtImg v-if="!!story.imagePublicId" :src="story.imagePublicId" width="60" height="60" fit="fill" :modifiers="{g:'face'}" class="object-cover rounded-full shrink-0 w-16 h-16" :alt="story.author.name || undefined" />
          <div v-else class="rounded-full shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700" />
          <div class="flex flex-col justify-center gap-0">
            <h6 v-if="story.author.name" class="font-bold mb-0">{{ story.author.name }}</h6>
            <p v-if="story.author.description" class="text-2xs">{{ story.author.description }}</p>
          </div>
        </div>
      </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const { getSectorColor, getSectorBackgroundColor } = useContent()


const { data: verhalen, error, status } = await useFetch('/api/verhalen')
const loading = computed(() => status.value === 'pending' || status.value === 'idle')

</script>

<style lang="postcss">
.skew-background {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  @apply absolute top-0 right-0 bottom-0 w-24 sm:w-44;
}
</style>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  gap: 20px;
}



/* Mobile layout (single column) */
@media (max-width: 767px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

/* Tablet layout (two columns) */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}


/* Desktop layout (alternating 3 and 2 columns) */
@media (min-width: 1024px) {
  .grid-container {
    display: grid;
    grid-auto-flow: dense;
  }

  /* First set all items to span 4 columns in a 12-column grid */
  .grid-container > * {
    grid-column: span 4;
  }

  /* For odd rows (first 3 items) */
  .grid-container > *:nth-child(6n+1),
  .grid-container > *:nth-child(6n+2),
  .grid-container > *:nth-child(6n+3) {
    grid-column: span 4;
  }

  /* For even rows (next 2 items) */
  .grid-container > *:nth-child(6n+4),
  .grid-container > *:nth-child(6n+5) {
    grid-column: span 6;
    .story-background {
      clip-path: polygon(38% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }

  /* Set the grid to 12 columns to make the math easier */
  .grid-container {
    grid-template-columns: repeat(12, 1fr);
  }
}



</style>