<template>
  <div v-if="!error" class="w-full pb-4 md:py-20">
    <InnerContainer from="xl">
      <div class="mb-8 md:mb-16 lg:mb-24 grid md:grid-cols-4">
        <div class="md:col-span-3">
          <Arrow variant="outline" type="chevron" animated  in-view size="md" :amount="3" class="mb-6" />
          <h2 class="font-black sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400">Ontdek het onderwijs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quare attende, quaeso.</p>
        </div>
        <div class="hidden md:flex col-span-1 flex-col items-end justify-end">
          <UButton color="gray" variant="solid" size="lg" to="https://onderwijsloket.com/kennisbank/" target="_blank">
            Naar kennisbank
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
        </div>
      </div>
      <UCarousel 
        v-slot="{ item }" 
        :items="articles" 
        class="mb-8 md:mb-24" 
        :ui="{
          container: 'gap-3 sm:gap-6 py-5 -my-5 px-1 -mx-1',
          item: 'basis-[90%] sm:basis-[45%] lg:basis-[30%]' 
        }"
      > 
        <NuxtLink 
          :to="item.to" 
          target="_blank" 
          class="grid w-full transition-all hover:scale-[101%]"
        >
        <FrameHoverGroup class="grid">
          <UCard>
            <template #header>
              <Frame size="md">
                <NuxtImg :src="item.imagePublicId" width="300" height="200" fit="fill" :modifiers="{ g: 'faces'}" class="bg-gray-200 dark:bg-gray-700 w-full h-32 object-cover" />
              </Frame>
            </template>
              <h5 class="text-lg">{{item.title}}</h5>
            <template #footer>
                <BadgeGroup wrap>
                  <UBadge v-for="sector in item.sectoren" size="xs" variant="soft" :label="sector" class="whitespace-nowrap" :color="getSectorColor(sector)" />
                  <UBadge v-if="item.bron" size="xs" color="gray" :ui="{color: { white: { solid: 'ring-0'}}}" class="whitespace-nowrap">
                    <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 mr-1" />
                    <span>{{ item.bron }}</span>
                  </UBadge>
                </BadgeGroup>
            </template>
          </UCard>
          </FrameHoverGroup>
        </NuxtLink>
      </UCarousel>
      <UButton class="mb-24 md:hidden" block color="gray" variant="solid" size="lg" to="https://onderwijsloket.com/kennisbank/" target="_blank">
          Naar kennisbank
          <template #trailing>
            <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
          </template>
      </UButton>
      <Faqs />
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>

const { data: articles, error, status } = await useFetch('/api/artikelen')
const loading = computed(() => status.value === 'pending' || status.value === 'idle')

const { getSectorColor } = useContent()
</script>

<style>

</style>