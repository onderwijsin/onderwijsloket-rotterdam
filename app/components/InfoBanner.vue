<template>
  <TopBanner
    id="infobanner"
    ref="infobanner"
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid enim me prohiberet Epicureum esse."
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Immo videri fortasse. Recte, inquit, intellegis. Inquit, dasne adolescenti veniam? Quare conare, quaeso. Duo Reges: constructio interrete. Utilitatis causa amicitia est quaesita. Et quod est munus, quod opus sapientiae?</p>
          <p>Quae diligentissime contra Aristonem dicuntur a Chryippo. Non potes, nisi retexueris illa. Gloriosa ostentatio in constituendo summo bono. Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex.</p>
          <p>Maximus dolor, inquit, brevis est. Summum ením bonum exposuit vacuitatem doloris; Bork Primum divisit ineleganter; Cum praesertim illa perdiscere ludus esset. Nunc haec primum fortasse audientis servire debemus.</p>
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
</script>

<style>

</style>