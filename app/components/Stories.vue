<template>
  <div class="grid gap-6 md:grid-cols-12 lg:gap-8">
      <div 
        v-for="story in stories" 
        class="bg-gray-300 dark:bg-gray-700 "
        :class="story.type === 'article' ? 'md:col-span-6 lg:col-span-4 h-[300px]' : 'md:col-span-6 h-[200px]'"
      />
  </div>
</template>

<script lang="ts" setup>

const { stories } = useContent()
</script>

<style>

</style>