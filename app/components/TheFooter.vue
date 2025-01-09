<template>
  <footer class="fluid">
    <UContainer class="relative top-1 opacity-50 -mt-32 md:-mt-28">
      <Skyline type="dynamic" />
    </UContainer>
    
    <div class="bg-gray-100 dark:bg-gray-800/50 py-8 relative">
      <UContainer class="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div class="text-center sm:text-left">
          <p class="text-sm mb-2"><strong class="text-primary-500 dark:text-primary-400 font-black">Onderwijsloket Rotterdam {{ year }}</strong> © Alle rechten voorbehouden </p>
          <p class="text-2xs text-gray-700 dark:text-gray-300">
            In samenwerking met
            <LogoOnderwijsIn class="w-20 inline-block relative top-1 ml-1" />
          </p>
        </div>
        <div class="flex items-center gap-3">
          <UButton to="/disclaimer" variant="ghost" color="gray" size="xs">Disclaimer</UButton>
          <UButton variant="ghost" color="gray" size="xs" @click="showCookieList">Cookies</UButton>
          <UButton to="/colofon" variant="ghost" color="gray" size="xs">Colofon</UButton>
        </div>
      </UContainer>
    </div>
    
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

const { showCookieList } = useTracking()

</script>

<style>
footer { z-index: -1;}
</style>