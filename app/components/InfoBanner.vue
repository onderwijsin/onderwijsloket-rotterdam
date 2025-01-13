<template>
  <TopBanner
    id="infobanner"
    ref="infobanner"
    :title="title"
    label="meer info"
    color="secondary"
    :callback="handle"
  />

  <LazyUModal v-model="showModal" :fullscreen="!grid.sm">
      <IconCard
        color="secondary"
        icon="i-heroicons-question-mark-circle-20-solid"
        size="base"
        :ui="{
          rounded: 'rounded-none sm:rounded-lg',
          divide: 'divide-y divide-gray-100 dark:divide-gray-700',
          shadow: 'shadow-none',
          body: {
            base: 'overflow-scroll',
          }
        }"
      >
        <template #header>
          <div class="flex items-start gap-2 justify-between w-full">
            <h4 class="mb-0 mt-1 sm:mt-1.5 text-gray-600 dark:text-gray-400">Over Onderwijsloket Rotterdam</h4>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" size="lg" class="shrink-0" @click="showModal=false" />
          </div>
        </template>
        
        <div class="content">
          <p>Het Onderwijsloket Rotterdam is jouw startpunt voor een carrière in het onderwijs in Rotterdam. Of je nu aan het begin van je loopbaan staat of een overstap naar het onderwijs overweegt, wij helpen je de weg te vinden. Deze website is in ontwikkeling.</p>
          <p>Het Onderwijsloket Rotterdam is een initiatief van de Onderwijsregio Rotterdam PO en de Onderwijsregio Rotterdam vo-mbo. In samenwerking met de Gemeente Rotterdam ondersteunen we jou bij jouw stap naar een carrière in het onderwijs.</p>
        </div>

        <template #footer>
        <div class="w-full flex flex-row justify-end">
          <UButton variant="soft" color="gray" size="lg" @click="showModal=false">Sluit</UButton>
          <UButton variant="soft" color="primary" size="lg" @click="handleDismiss">Oké</UButton>
        </div>
      </template>
      </IconCard>
    </LazyUModal>


        
</template>

<script lang="ts" setup>

const showModal = ref(false)
const handle = () => {
  showModal.value = true
}


const infobanner = ref()
const handleDismiss = () => {
  showModal.value = false
  infobanner.value.dismiss()
}

const { grid } = useResponsive()


const title = computed(() => {
  if (grid.sm) return 'Welkom bij het Onderwijsloket Rotterdam! Ontdek de mogelijkheden om te werken in het onderwijs in Rotterdam. Deze website is in ontwikkeling en groeit mee met ons aanbod.'
  return 'Deze website is in ontwikkeling en groeit mee met ons aanbod.'
})
</script>

<style>

</style>