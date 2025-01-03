<template>
  <div class="grid gap-8 md:grid-cols-2">
    <IconCard 
      :icon="vacancies.icon" 
      color="primary" 
      size="lg"
      use-ring
      :ui="{
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="mb-0">{{ vacancies.title }}</h3>
      </template>

      <p>{{ vacancies.description }}</p>

      <template #footer>
        <UButton color="gray" variant="solid" size="lg" :to="vacancies.to" target="_blank">
            {{ vacancies.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </template>
    </IconCard>

    <IconCard 
      :icon="orgs.icon" 
      color="primary" 
      size="lg"
      use-ring
      :ui="{
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="mb-0 mt-3 md:mt-0">{{ orgs.title }}</h3>
      </template>

      <p>{{ orgs.description }}</p>

      <template #footer>
        <UButtonGroup size="lg">
          <UButton color="gray" variant="solid" size="lg" :to="orgs.to">
            {{ orgs.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
        <UButton color="gray" variant="solid" size="lg" to="https://scholenopdekaart.nl/zoeken/basisscholen?zoektermen=rotterdam&weergave=Kaart" target="_blank">
            scholenopdekaart.nl
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
          
        </UButtonGroup>
        
      </template>
    </IconCard>

    <UCard 
        class="bg-primary-50 dark:bg-primary-950/20"
        :ui="{
          header: {
            padding: 'py-5 px-4 sm:px-4 pb-0 pt-6 md:px-8 md:pt-8'
          },
          body: {
            padding: 'sm:p-6 px-4 py-6 md:px-8 md:py-8'
          },
          footer: {
            padding: 'p-4 pt-0 px-4 sm:px-4 pb-6 md:px-8 md:pb-8'
          },
          ring: 'dark:ring-primary-800'
        }"
    >
      <template #header>

          <h3 class="mb-0 text-primary-500 dark:text-primary-400">De voordelen van werken in het Rotterdams onderwijs</h3>

      </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis:</p>
        <ul class="list-none mb-0 font-bold mt-4">
          <li><UIcon name="i-heroicons-check-badge-20-solid" class="text-primary-500 dark:text-primary-400 mr-2.5 w-5 h-5 relative top-1" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><UIcon name="i-heroicons-check-badge-20-solid" class="text-primary-500 dark:text-primary-400 mr-2.5 w-5 h-5 relative top-1" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><UIcon name="i-heroicons-check-badge-20-solid" class="text-primary-500 dark:text-primary-400 mr-2.5 w-5 h-5 relative top-1" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      
      <template #footer>
          <UButton color="primary" variant="solid" size="lg" to="https://onderwijs010.nl/leraarworden/extras-voor-leraren-in-rotterdam/" target="_blank">
              Meer lezen
              <template #trailing>
                <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
              </template>
          </UButton>
      </template>
    </UCard>

    <IconCard 
      id="opleidingen"
      :icon="opleiding.icon" 
      color="primary" 
      size="lg"
      use-ring
      :ui="{
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="mb-0 mt-3 md:mt-0">{{ opleiding.title }}</h3>
      </template>

        <div class="mb-8">
          <span>Er zijn binnen </span>
          <USelectMenu
            class="inline-block mx-1"
            v-model="distance"
            :options="distanceOptions"
            size="2xs"
            :ui="{
              trigger: 'inline-flex'
            }"
          >
          <template #label>
            <span>{{  distance + ' km' }}</span>
          </template>
          </USelectMenu>
        <span> van Rotterdam <strong>{{ data?.hits.length }} opleidingen</strong> waarmee je je {{ type }} kunt behalen.</span>
        </div>

        <div class="flex flex-wrap gap-x-4 gap-y-2 mt-6 items-center">
          <p class="text-xs font-black">Kies je bevoegdheid</p>
          <div class="flex flex-wrap gap-x-1 gap-y-1">
            <UPopover 
              v-for="val in bevoegdheden"
              :key="type"
              mode="hover" 
              :open-delay="300" 
              :ui="{
                ring: 'dark:ring-gray-700'
              }"
            >
              <UButton 
                color="secondary"
                size="2xs"
                :ui="{size: { '2xs': 'text-2xs leading-4' }}"
                :variant="bevoegdheid === val ? 'solid' : 'soft'"
                :label="val"
                @click="setBevoegdheid(val)"
              />
              <template #panel>
                <p class="text-xs font-bol px-3 py-2 max-w-sm">{{ b.find(v => v.label.toLowerCase() === val)?.description }}</p>
              </template>
            </UPopover>
            
          </div>
        </div>

        <div class="flex flex-wrap mt-6 pl-2">
          <UPopover 
            v-for="instelling in instellingenForOpleidingen"
            mode="hover" 
            :open-delay="300" 
            :ui="{
              ring: 'dark:ring-gray-700'
            }"
            class="-ml-1 sm:-ml-2 hover:z-10"
            >
            <NuxtLink 
              :to="instelling.url" 
              tabindex="-1"
            >
              <UAvatar 
                :src="instelling.imageUrl"
                :alt="instelling.name"
                :ui="{
                  size: {
                    xl: 'text-sm'
                  },
                  text: 'font-bold',
                  placeholder: 'font-bold',
                }"
                :size="instellingenForOpleidingen.length > 24 ? 'sm' : instellingenForOpleidingen.length > 6 ? 'md' : 'lg'"
                style="font-size: 12px;"
                class="ring-2 ring-gray-100 dark:ring-gray-700 hover:ring-primary-500 dark:hover-ring-primary-500 text-sm "
              />
            </NuxtLink>

            <template #panel>
              <p class="text-xs font-bol px-3 py-2">Naar website van {{ instelling.name }}</p>
            </template>
          </UPopover>
          
        </div>

        
        <p class="mt-6"><strong>Ben je op zoek naar een MBO opleiding</strong> waarmee je op school kunt werken? Kijk dan eens op <NuxtLink to="https://www.kiesmbo.nl/zoekresultaten?tag=pedagogiek" target="_blank" class="font-bold">kiesmbo.nl</NuxtLink></p>

    </IconCard>
  </div>
</template>

<script lang="ts" setup>
import type { SearchResponse, Hit } from 'algoliasearch/lite';
import type { AlgoliaOpleiding, AlgoliaOnderwijsInstelling, AlgoliaRelatedOnderwijsinstelling } from '~/types/algolia';

const { vacancies, orgs, opleiding } = useContent().partners

const { bevoegdheden: b } = useContent()

const bevoegdheden = b.map(val => val.label.toLowerCase()) 

const bevoegdheid: Ref<null | typeof bevoegdheden[number]> = ref(null)

const setBevoegdheid = (val: typeof bevoegdheden[number]) => {
  if (bevoegdheid.value === val) {
    bevoegdheid.value = null
    return
  }
  bevoegdheid.value = val
}

const getBevoegdheidAsFacet = (val: typeof bevoegdheden[number]) => {
  return capitalizeFirstChar(val)
}

const type = computed(() => {
  if (bevoegdheid.value === 'primair onderwijs') return 'lesbevoegdheid voor het basisonderwijs'
  if (bevoegdheid.value === 'eerstegraads') return 'eerstegraads bevoegdheid'
  if (bevoegdheid.value === 'tweedegraads') return 'tweedegraads bevoegdheid'
  if (bevoegdheid.value === 'beperkt tweedegraads') return 'beperkt tweedegraads bevoegdheid'
  return 'lesbevoegdheid'
})

const distance = ref('30')
const distanceOptions = [
  '10',
  '20',
  '30',
  '50',
  '100'
]

const coords = {
  lat: 51.9244201,
  lng: 4.4777325
}


const { searchSingle } = useAlgoliaSearch()

const { data, error } = await useAsyncData(async () => {

  const result = await searchSingle<AlgoliaOpleiding>({ 
      indexName: 'opleidingen',
      query: '',
      hitsPerPage: 9999,
      facets: ['*'],
      facetFilters: !bevoegdheid.value ? undefined : [`bevoegdheden:${getBevoegdheidAsFacet(bevoegdheid.value)}`],
      attributesToHighlight: [],
      aroundLatLng: `${coords.lat},${coords.lng}`,
      getRankingInfo: true,
      aroundRadius: parseInt(distance.value) * 1000
    })

  return result

}, {
  watch: [
    distance,
    bevoegdheid
  ]
})


const instellingenForOpleidingen = computed(() => {
  if (!data.value) return []

  const onderwijsinstellingMap = new Map<number, AlgoliaRelatedOnderwijsinstelling>();

  for (const item of data.value.hits) {
    (item as Hit<AlgoliaOpleiding>).onderwijsinstellingen.forEach((onderwijsinstelling) => {
      if (!onderwijsinstellingMap.has(onderwijsinstelling.id)) {
        onderwijsinstellingMap.set(onderwijsinstelling.id, onderwijsinstelling);
      }
    });
  }

  return Array.from(onderwijsinstellingMap.values());
})


</script>

<style>

</style>