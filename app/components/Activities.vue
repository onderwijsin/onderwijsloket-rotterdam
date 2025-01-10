<template>
  <div v-if="data?.length && primary" class="flex flex-col gap-6 md:gap-8">
    <div 
      class="w-full bg-main-25 dark:bg-gray-800"
    >
      <InnerContainer class="py-12 sm:py-20 lg:py-32 flex flex-col lg:flex-row gap-12">
        <div class="flex flex-col gap-8 shrink-0 basis-1/2">
          <div class="flex gap-4 md:gap-8 items-center ">
            <div class="bg-primary-500 dark:bg-primary-900/50 w-14 h-14 md:w-20 md:h-20 grid place-items-center shrink-0">
              <UIcon name="i-heroicons-academic-cap-20-solid" class="h-6 w-6 md:w-8 md:h-8 text-white dark:text-gray-200" />
            </div>
            <h2 class="leading-snug mb-0">
              {{ primary.title }}
            </h2>
          </div>
          <BadgeGroup wrap>
            <UBadge 
              variant="solid"
              size="lg"
            >
              <UIcon name="i-heroicons-calendar-days-20-solid" class="w-4 h-4 mr-0.5"/>
              <time :datetime="primary.startDateTime">{{ getFullDateTimeRange(primary) }}</time>
            </UBadge>
            <UBadge 
              variant="soft"
              size="lg"
            >
              <UIcon name="i-heroicons-currency-euro-20-solid" class="w-4 h-4 mr-0.5"/>
              <span>{{ primary.kosten === 0 ? 'gratis' : primary.kosten }}</span>
            </UBadge>
            <UBadge 
              v-for="badge in primary.soort" 
              variant="soft"
              size="lg"
            >
              <span>{{ badge }}</span>
            </UBadge>
            <UBadge v-for="sector in primary.sectoren" size="lg" variant="soft" :label="sector" class="whitespace-nowrap" :color="getSectorColor(sector)" />
            <UBadge v-if="!!primary.organizer" size="lg" variant="soft" color="gray">
              <UIcon name="i-heroicons-users-20-solid" class="w-4 h-4 mr-0.5"/>
              <span>{{ primary.organizer }}</span>
            </UBadge>
            
          </BadgeGroup>
        </div>
        <div class="flex flex-col items-start gap-8">
            <p v-html="primary.description"></p>
            <div class="flex flex-row flex-wrap gap-y-2">
              <UButton size="lg" color="primary" variant="solid"  :to="primary.url || undefined" target="_blank">
              {{ primary.button_label || 'Meer informatie' }}
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
                </template>
              </UButton>
            </div>
          
        </div>
        
      </InnerContainer>
    </div>
    <UCarousel
      v-if="activities?.length" 
      :items="activities" 
      arrows
      :ui="{
        container: 'gap-3 sm:gap-6 py-5 -my-5',
        item: 'basis-[90%] sm:basis-[45%] lg:basis-[30%]',
        arrows: {
          wrapper: 'mt-4'
        }
      }"
    > 
      <template #default="{ item }">
        <NuxtLink 
          :to="item.url" 
          target="_blank" 
          class="grid w-full transition-all hover:scale-[101%]"
        >
          <UCard
            :ui="{
              background: 'bg-gray-100 dark:bg-gray-800',
              shadow: 'shadow-none',
              ring: 'ring-gray-200 dark:ring-gray-700',
              header: { padding: 'pt-6 md:px-8 md:pt-8'},
              body: { padding: 'py-6 md:px-8 md:py-8'},
              footer: { padding: 'pb-6 md:px-8 md:pb-8'},
            }"
          >
              <h5 class="text-lg">{{item.title}}</h5>
              <BadgeGroup wrap>
                <UBadge 
                  variant="solid"
                  size="xs"
                  color="secondary"
                >
                  <UIcon name="i-heroicons-calendar-days-20-solid" class="w-4 h-4 mr-0.5"/>
                  <time :datetime="item.startDateTime">{{ getFullDateTimeRange(item) }}</time>
                </UBadge>
                <UBadge 
                  variant="soft"
                  size="xs"
                  color="secondary"
                >
                  <UIcon name="i-heroicons-currency-euro-20-solid" class="w-4 h-4 mr-0.5"/>
                  <span>{{ item.kosten === 0 ? 'gratis' : item.kosten }}</span>
                </UBadge>
                <UBadge 
                  v-for="badge in item.soort" 
                  variant="soft"
                  size="xs"
                  color="secondary"
                >
                  <span>{{ badge }}</span>
                </UBadge>
                <UBadge v-for="sector in item.sectoren" size="xs" variant="soft" :label="sector" class="whitespace-nowrap" :color="getSectorColor(sector)" />
                <UBadge v-if="!!primary.organizer" size="xs" variant="soft" color="gray">
                  <UIcon name="i-heroicons-users-20-solid" class="w-4 h-4 mr-0.5"/>
                  <span>{{ primary.organizer }}</span>
                </UBadge>
                
              </BadgeGroup>
              <template #footer>
                <UButton size="lg" color="white" variant="solid">
                  {{ item.button_label || 'Meer informatie' }}
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
                  </template>
                </UButton>
              </template>
          </UCard>
        </NuxtLink>
      </template>
      

      <template #prev="{ onClick, disabled }">
        <UButton :class="disabled ? 'opacity-0 cursor-default' : 'opacity-100'" class="transition-opacity" size="lg" square @click="onClick">
          <Arrow size="sm" fill="white" class="rotate-180" />
        </UButton>
      </template>

      <template #next="{ onClick, disabled }">
        <UButton :class="disabled ? 'opacity-0 cursor-default' : 'opacity-100'" class="transition-opacity" size="lg" square @click="onClick">
          <Arrow size="sm" fill="white" />
        </UButton>
      </template>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
import type { Activity } from '~~/server/types'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale'
import { toZonedTime } from 'date-fns-tz'


const { data, error, status } = await useFetch('/api/activiteiten')
const loading = computed(() => status.value === 'pending' || status.value === 'idle')

const primary = computed(() => data.value?.[0])
const activities = computed(() => data.value?.slice(1))

const getDateTime = (value: string, { includeTime, timeOnly }: { includeTime?: boolean, timeOnly?: boolean }) => {
  // Convert to Amsterdam timezone
  const timeZone = 'Europe/Amsterdam'
  const date = toZonedTime(new Date(value), timeZone)
  
  if (timeOnly) {
    return format(date, 'HH:mm', { locale: nl })
  }
  const pattern = includeTime ? 'd-M-yyyy HH:mm' : 'd-M-yyyy'
  return format(date, pattern, { locale: nl })
}

const getFullDateTimeRange = (item: Activity) => {
  const start = getDateTime(item.startDateTime, { includeTime: item.includeTime })
  
  if (!item.endDateTime || !item.includeTime) {
    return start
  }

  const end = getDateTime(item.endDateTime, { timeOnly: true })
  return `${start} - ${end}`
}

const { getSectorColor } = useContent()
</script>

<style>

</style>