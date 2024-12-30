<template>
  <NuxtLayout name="page" title="Huisstijl elementen" :image="page.image">
    <div class="flex flex-col gap-12">
      <Frame size="sm" animated fit-content>
        <div class="h-16 w-16 bg-gray-100 dark:bg-gray-800"></div>
      </Frame>
      <Frame animated fit-content>
        <div class="h-20 w-40 bg-gray-100 dark:bg-gray-800"></div>
      </Frame>
      <Frame size="xl" animated>
        <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800"></div>
      </Frame>

      <Arrow fill="primary" :amount="4" :gap="4" animated   />
      <Arrow fill="secondary" :amount="2" :gap="4" animated   />
      <Arrow fill="tertiary"   />
      <Arrow :amount="8" :gap="8" animated />
      <Arrow :amount="8" :gap="8" animated variant="outline" />


      <Arrow fill="primary" :amount="4" type="chevron" animated   />
      <Arrow fill="primary" :amount="4" type="triangle" animated   />

      <Arrow fill="secondary" :amount="2" type="chevron" animated   />
      <Arrow fill="secondary" :amount="2" type="triangle" animated   />
      
      <Arrow fill="tertiary" :amount="6" type="chevron" animated   />
      <Arrow fill="tertiary" :amount="6" type="triangle" animated   />
      
      <Arrow  :amount="4" type="chevron" animated   />
      <Arrow  :amount="4" type="triangle" animated   />
      
      <Arrow fill="gray" :amount="4" type="chevron" animated variant="outline" />
      <Arrow fill="primary" :amount="4" type="triangle" animated  variant="outline"  />


      <Skyline size="half" class="max-w-[400px]" />
      <Skyline />

      <Skyline size="dynamic" />

      <div class="grid grid-cols-3 gap-12">
        <FrameHoverGroup>
          <UCard>
            <template #header>
              <Frame size="md">
                <div class="bg-gray-200 dark:bg-gray-700 rounded-md w-full h-40" />
              </Frame>
              
            </template>
              <h5 class="text-lg">Lorem ipsum dolor sit amet</h5>
            <template #footer>
              <div class="flex justify-end">
                <UButton square icon="i-heroicons-arrow-top-right-on-square-16-solid" color="gray" variant="ghost" size="lg" />
              </div>
            </template>
          </UCard>
        </FrameHoverGroup>
        
      </div>
    </div>
    
    
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'dev',
});




const page = { meta: 'Huisstijl elementen van Onderwijsloket Rotterdam', image: 'regios/rotterdam/school_staircase_me9cmk' };

useSeoMeta({
  title: "Huisstijl elementen",
  description: page.meta,
});

if (useRuntimeConfig().public.mode.isProd) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true
  })
}

</script>

<style>

</style>