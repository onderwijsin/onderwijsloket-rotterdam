<template>
  <div class="w-full bg-gray-100 dark:bg-gray-800">
    <InnerContainer class="py-12 sm:py-20 lg:py-32 flex flex-col lg:flex-row gap-12">
      <div class="flex flex-col gap-8 shrink-0 basis-1/2">
        <div class="flex gap-4 md:gap-8 items-center ">
          <div class="bg-gray-400 dark:bg-gray-700 w-14 h-14 md:w-20 md:h-20 grid place-items-center shrink-0">
            <UIcon :name="data.icon" class="h-6 w-6 md:w-8 md:h-8 text-white dark:text-gray-200" />
          </div>
          <h2 class="leading-snug mb-0">
            {{ data.title }}
          </h2>
        </div>
        <BadgeGroup v-if="!!data.badges?.length" wrap>
          <UBadge 
            v-for="badge in data.badges" 
            :color="badge.color" 
            :variant="badge.variant" 
            size="lg"
          >
            <UIcon v-if="badge.icon" :name="badge.icon" class="w-4 h-4 mr-0.5" :class="!badge.variant || badge.variant === 'solid' ? 'text-white dark:text-gray-950' : `text-${badge.color || 'primary'}-500`" />
            <span>{{ badge.label }}</span>
          </UBadge>
        </BadgeGroup>
      </div>
      <div class="flex flex-col items-start gap-8">
        <p>{{ data.description }}</p>
          <div class="flex flex-row flex-wrap gap-y-2">
            <UButton size="lg" color="primary" variant="solid"  :to="data.url" target="_blank">
              {{ data.btnLabel || 'Meer informatie' }}
              <template #trailing>
                <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
              </template>
            </UButton>
            <UButton v-if="data.viewMoreUrl" size="lg" color="white" variant="solid"  :to="data.viewMoreUrl" target="_blank">
                Alle activiteiten
            </UButton>
          </div>
        
      </div>
      
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
import type { Activity } from '~/types';

defineProps<{data: Activity}>()
</script>

<style>

</style>