<template>
  <Faqs
    heading="Veelgestelde vragen over het onderwijs"
    description="Heb je een specifieke vraag over werken in het onderwijs? Gebruik de zoekfunctie of kies een onderwerp uit onderstaande lijst om direct de informatie te vinden die je zoekt."
    :data="items"
  >
    <template #search>
      <UInput v-model="query" size="lg" icon="i-heroicons-magnifying-glass" placeholder="Zoek naar FAQ's" :loading="loading" />
      <p v-if="!!data" class="text-gray-500 text-xs mt-4 px-1">{{ data.nbHits || 0 }} resultaten gevonden</p>
      <div v-if="!!facets.length" class="flex flex-wrap gap-x-1 gap-y-1 mt-6">
        <UButton 
          v-for="facet in facets"
          :key="facet.label"
          color="secondary"
          size="2xs"
          :ui="{size: { '2xs': 'text-2xs leading-4' }}"
          :variant="facetFilters.includes(facet.label) ? 'solid' : 'soft'"
          :label="facet.label + ` (${facet.count})`"
          @click="setFacetFilter(facet.label)"
        />
      </div>
    </template>
    <template #actions>
      <UButton v-if="hasMore" color="primary" size="lg"  variant="soft" :to="archiveUrl" target="_blank">
        Alle veelgestelde vragen
        <template #trailing>
          <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
        </template>
      </UButton>
    </template>
  </Faqs>
</template>

<script lang="ts" setup>
const query = ref('')
const facetFilters = ref<string[]>([])

const { searchSingle } = useAlgoliaSearch()

const { defaultItems, topCats } = useContent().faqs

import type { OwlFaq } from '~/types'


const { data, error, refresh, status } = await useAsyncData(async () => {

  const res = await searchSingle<OwlFaq>({
    indexName: 'faqs',
    query: query.value,
    hitsPerPage: 4,
    facets: ['faqCategories.name'],
    facetFilters: facetFilters.value.map((rec) => `faqCategories.name:${rec}`)
  })

  if (!res) return null
  if (!!query.value || !!facetFilters.value.length) return res
  return {
    ...res,
    hits: defaultItems
  }
}, {
  watch: [
    facetFilters
  ]
})

const loading = computed(() => status.value === 'idle' || status.value === 'pending')

watchDebounced(query, () => refresh(), { debounce: 200 })

const hasMore = computed(() => !!data.value?.nbHits && data.value?.nbHits > 4)
const archiveUrl = computed(() => `https://www.onderwijsloket.com/search/results/?limit=30&keywords=${encodeURIComponent(query.value)}&collection=4`)

const items = computed(() => {
  if (!data.value) return []
  return data.value.hits.map((rec: OwlFaq) => {
    return {
      label: rec.name,
      content: rec.answer
    }
  })
})

const facets = computed(() => {
  if (!data.value || !data.value.facets) return []

  let values = Object.entries(data.value.facets['faqCategories.name'] as Record<string, number>).map(([key, value]) => {
    return {
      label: key,
      count: value
    }
  })
  if (!query.value && !facetFilters.value.length) return values.filter((rec) => topCats.includes(rec.label))
  return values.slice(0, 5)
})


const setFacetFilter = (val: string) => {
  if(facetFilters.value.includes(val)) {
    facetFilters.value = facetFilters.value.filter((rec) => rec !== val)
  } else {
    facetFilters.value = [...facetFilters.value, val]
  }
}


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