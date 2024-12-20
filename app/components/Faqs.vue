<template>
  <div class="flex flex-col lg:flex-row lg:gap-16">
    <div class="basis-1/3 shrink-0 lg:py-8">
      <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400 font-black">Veelgestelde vragen over het onderwijs</h2>
      <p class="mb-8 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim.</p>
      <UInput v-model.debounce="query" size="lg" icon="i-heroicons-magnifying-glass" placeholder="Zoek naar FAQ's" :loading="loading" />
      <p v-if="!!data" class="text-gray-500 text-xs mt-4 px-1">{{ data.nbHits || 0 }} resultaten gevonden</p>
    </div>
    <div class="basis-2/3 pt-14 lg:pt-[5.5rem]">
      <Empty v-if="!data?.hits.length">
        Geen veelgestelde vragen gevonden
      </Empty>
      <UAccordion
        v-else
        color="gray"
        variant="solid"
        size="xl"
        :items="items"
        :ui="{
          wrapper: 'gap-3',
          item: {
            padding: 'px-2'
          },
          default: { truncate: false, class: 'text-left', }
        }"
      />
      <UButtonGroup size="lg">
        <UButton v-if="hasMore" color="primary" class="mt-8" variant="soft" :to="archiveUrl" target="_blank">
          Alle veelgestelde vragen
          <template #trailing>
            <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
          </template>
        </UButton>
        <UButton color="gray" class="mt-8" variant="soft" @click="scrollTo('advies')">
          Neem contact op
          <template #trailing>
            <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-4 h-4 ml-2" />
          </template>
        </UButton>
      </UButtonGroup>
      
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const query = ref('')

const { searchSingle } = useAlgoliaSearch()
type OwlFaq = {
  answer: string;
  createdAt: string; // ISO 8601 date string
  externalId: string;
  faqCategories: {
    name: string;
  }[];
  id: number;
  name: string;
  status: "published" | "draft" | "archived"; // Assuming other statuses could exist
  updatedAt: string; // ISO 8601 date string
}
const { data, error, refresh, status } = await useAsyncData(async () => {
  const res = await searchSingle<OwlFaq>({
    indexName: 'faqs',
    query: query.value,
    hitsPerPage: 4
  })

  return res
})

const loading = computed(() => status.value === 'idle' || status.value === 'pending')

watchDebounced(query, () => refresh(), { debounce: 200 })

const hasMore = computed(() => !!data.value?.nbHits && data.value?.nbHits > 4)
const archiveUrl = computed(() => `https://www.onderwijsloket.com/search/results/?limit=30&keywords=${encodeURIComponent(query.value)}&collection=4`)

const items = computed(() => {
  if (!data.value) return []
  return data.value.hits.map(rec => {
    return {
      label: rec.name,
      content: rec.answer
    }
  })
})


const scrollTo = (val: string) => {
  let id = val
  if (val.startsWith('#')) {
    id = val.split('#')[1] as string
  }
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
}

</script>

<style>

</style>