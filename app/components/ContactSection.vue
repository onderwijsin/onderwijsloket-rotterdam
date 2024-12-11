<template>
  <div class="w-full pb-12 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
    <InnerContainer from="xl">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="md:col-span-3">
          <h2 class="sm:text-lg uppercase text-primary-500 dark:text-primary-400 font-black">{{ contact.title }}</h2>
          <p>{{ contact.description }}</p>
        </div>
        <div class="flex col-span-1 flex-col items-start md:items-end md:justify-end">
          <UButton color="gray" variant="solid" size="lg" :to="contact.link" target="_blank">
            {{contact.btnLabel}}
            <template #trailing>
              <UIcon v-if="contact.icon" :name="contact.icon" class="w-4 h-4 ml-2" />
            </template>
          </UButton>
        </div>
      </div>
    </InnerContainer>
  </div>
</template>

<script lang="ts" setup>
const { contact } = useContent()
</script>

<style>

</style>