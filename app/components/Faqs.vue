<template>
  <div class="flex flex-col lg:flex-row lg:gap-16">
    <div class="basis-1/3 shrink-0 lg:py-8">
      <Arrow variant="outline" type="chevron" animated size="md" :amount="3" class="mb-6" />
      <h2 class="sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400 font-black">Veelgestelde vragen over het onderwijs</h2>
      <p class="mb-8 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim.</p>
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