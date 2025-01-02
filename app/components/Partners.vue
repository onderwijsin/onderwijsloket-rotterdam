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
        <UButton color="gray" variant="solid" size="lg" :to="orgs.to">
            {{ orgs.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </template>
    </IconCard>

    <UCard 
        class="bg-primary-50 dark:bg-primary-900"
        :ui="{
          header: {
            padding: 'py-5 px-4 sm:px-4 pb-0 pt-6 md:px-8 md:pt-8'
          },
          body: {
            padding: 'sm:p-6 px-4 py-6 md:px-8 md:py-8'
          },
          footer: {
            padding: 'p-4 pt-0 px-4 sm:px-4 pb-6 md:px-8 md:pb-8'
          }
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
          <UButton color="gray" variant="solid" size="lg" to="https://onderwijs010.nl/leraarworden/extras-voor-leraren-in-rotterdam/" target="_blank">
              Meer lezen
              <template #trailing>
                <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
              </template>
          </UButton>
      </template>
    </UCard>

    <IconCard 
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

        <p class="mb-8">{{ opleiding.description }}</p>

        <p>TODO opleidingen toevoegen</p>
    </IconCard>
  </div>
</template>

<script lang="ts" setup>


const { vacancies, orgs, opleiding } = useContent().partners

</script>

<style>

</style>