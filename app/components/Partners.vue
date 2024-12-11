<template>
  <div class="grid gap-8 md:grid-cols-2 md:grid-rows-2">
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
      class="md:row-span-2"
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

      <div class="mb-12">
        <p class="mb-8">{{ orgs.description }}</p>
        <UButton color="gray" variant="solid" size="lg" :to="orgs.to">
            {{ orgs.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </div>
      

      <div>
        <h4>Lerarenopleidingen</h4>
        <p>TODO: add opleidingen lijst (met search?)</p>
      </div>
    </IconCard>

    <div 
        class="bg-gray-300 dark:bg-gray-700 "
      />
  </div>
</template>

<script lang="ts" setup>


const { vacancies, orgs } = useContent().partners
</script>

<style>

</style>