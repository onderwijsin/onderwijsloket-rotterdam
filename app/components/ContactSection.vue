<template>
  
  <div class="w-full pb-12 md:pt-16">
    <InnerContainer from="xl">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="md:col-span-3">
          <Arrow variant="outline" type="chevron" animated in-view size="md" :amount="3" class="mb-6" />
          <h2 class="sm:text-lg md:text-xl uppercase text-primary-500 dark:text-primary-400 font-black">{{ contact.title }}</h2>
          <p>{{ contact.description }}</p>
        </div>
        <div class="flex col-span-1 flex-col items-start md:items-end md:justify-end">
         
        </div>
      </div>
    </InnerContainer>
  </div>

  <InnerContainer from="xl" class="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 md:pb-16">
    <UCard 
      :ui="{ 
        ring: 'ring-secondary-200 dark:ring-secondary-200', 
        background: 'bg-gray-100 dark:bg-gray-800',
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="font-black mb-0">
          <ClientOnly>
            <Arrow :animated="grid.md" fill="secondary" class="inline-flex mr-2" :size="18" />
          </ClientOnly>
          Zoek contact met <GradientText from="secondary" to="secondary">een lerarenopleiding</GradientText>
        </h3>
      </template>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas.</p>
      <template #footer>
        <UButton color="secondary" variant="solid" size="lg" @click="scrollTo('opleidingen', 80)">
            Bekijk de lerarenopleidingen
        </UButton>
      </template>
    </UCard>
    <UCard 
      :ui="{ 
        ring: 'ring-secondary-200 dark:ring-secondary-200', 
        background: 'bg-gray-100 dark:bg-gray-800',
        header: { padding: 'pt-6 md:px-8 md:pt-8'},
        body: { padding: 'py-6 md:px-8 md:py-8'},
        footer: { padding: 'pb-6 md:px-8 md:pb-8'},
      }"
    >
      <template #header>
        <h3 class="font-black mb-0">
          <ClientOnly>
            <Arrow :animated="grid.md" fill="secondary" class="inline-flex mr-2" :size="18" />
          </ClientOnly>
          Zoek contact met <GradientText from="secondary" to="secondary">een schoolbestuur</GradientText>
        </h3>
      </template>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas.</p>
      <template #footer>
        <UButton color="secondary" variant="solid" size="lg" :to="orgs.to">
            {{ orgs.btnLabel }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" class="w-4 h-4 ml-2" />
            </template>
        </UButton>
      </template>
    </UCard>
  </InnerContainer>

  <div id="advies" class="mb-12 md:mb-20">
    <AdviesBanner />
  </div>
</template>

<script lang="ts" setup>
const { contact } = useContent()

const  { grid } = useResponsive()

const { orgs } = useContent().partners

const { scrollTo } = useSnapScroll()
</script>

<style>

</style>