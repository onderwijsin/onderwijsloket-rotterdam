<script lang="ts" setup>

const props = defineProps<{
  heading: string
  description?: string
  data: Array<{ label: string, content: string }>
}>()
</script>

<template>
  <InnerContainer from="xl">
    <div class="flex flex-col lg:flex-row lg:gap-16">
      <div class="basis-1/3 shrink-0 lg:py-8">
        <Arrow variant="outline" type="chevron" animated in-view size="md" :amount="3" class="mb-6" />
        <h2 class="sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400 font-black">{{ heading }}</h2>
        <p v-if="description" class="mb-8 lg:mb-12">{{ description}}</p>
        <slot name="search" />
      </div>
      <div class="basis-2/3 pt-14 lg:pt-[5.5rem]">
        <Empty v-if="!data.length">
          Geen veelgestelde vragen gevonden
        </Empty>
        <UAccordion
          v-else
          color="gray"
          variant="solid"
          size="xl"
          :items="data"
          :ui="{
            wrapper: 'gap-3',
            item: {
              padding: 'px-2'
            },
            default: { truncate: false, class: 'text-left', }
          }"
        />
        <div class="flex flex-wrap gap-y-2 mt-8">
          <slot name="actions" />
        </div>    
      </div>
    </div>
  </InnerContainer>
</template>