<template>
  <footer class="fluid bg-gray-100 dark:bg-gray-800 py-8">
    <UContainer class="flex flex-col sm:flex-row justify-between items-center gap-8">
      <div class="text-center sm:text-left">
        <p class="text-sm mb-2"><strong class="text-primary-500 dark:text-primary-300 font-black">Onderwijsloket Rotterdam {{ year }}</strong> © Alle rechten voorbehouden </p>
        <p class="text-2xs text-gray-700 dark:text-gray-300">
          In samenwerking met
          <LogoOnderwijsIn class="w-20 inline-block relative top-[0.175rem] ml-1" />
        </p>
      </div>
      <div class="flex items-center gap-3">
        <UButton to="/privacy" variant="ghost" color="gray" size="xs">Over jouw privacy</UButton>
        <UButton to="/algemene-voorwaarden" variant="ghost" color="gray" size="xs">Algemene voorwaarden</UButton>
      </div>
    </UContainer>
  </footer>
</template>

<script lang="ts" setup>


// Create server-side function to set current year
const getCurrentYear = () => {
  return new Date().getFullYear().toString()
}

// Initialize year ref with current year
const year = ref(getCurrentYear())

// Optional: Ensure the year is set on the client side after mounting
onMounted(() => {
  year.value = getCurrentYear()
})

</script>

<style>

</style>