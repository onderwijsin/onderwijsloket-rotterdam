<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'

import { submissionSchema, type SubmissionSchema } from '~~/server/utils/submissions'

const props = defineProps<{
  event: string
  successMessage: string
}>()

const sectors = [
  'Primair onderwijs',
  'Voortgezet onderwijs',
  'Middelbaar beroepsonderwijs',
  'Hoger onderwijs',
  'Speciaal onderwijs',
  'Weet ik nog niet'
]

const state = reactive({
  name: '',
  email: '',
  phone: '',
  sectors: [],
  message: '',
  utm: {
    source: '',
    medium: '',
    campaign: '',
    term: '',
    content: ''
  }
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const toast = useToast()

const route = useRoute()
onMounted(() => {
  // Initialize UTM parameters if available
  const query = route.query
  state.utm.source = query.utm_source?.toString() || query['utm-source']?.toString() || ''
  state.utm.medium = query.utm_medium?.toString() || query['utm-medium']?.toString() || ''
  state.utm.campaign = query.utm_campaign?.toString() || query['utm-campaign']?.toString() || ''
  state.utm.term = query.utm_term?.toString() || query['utm-term']?.toString() || ''
  state.utm.content = query.utm_content?.toString() || query['utm-content']?.toString() || ''
})

async function onSubmit(event: FormSubmitEvent<SubmissionSchema>) {
  isSubmitting.value = true

  try {
    const res = await $fetch('/api/submissions', {
      method: 'POST',
      body: event.data
    })
    console.log(res)
    isSubmitting.value = false
    isSubmitted.value = true
    toast.add({
      title: 'Je bent aangemeld!',
      description: props.successMessage,
      color: 'success',
      timeout: 12000,
    })

  } catch (error: any) {
    console.error(JSON.stringify(error, null, 2))
    isSubmitting.value = false
    toast.add({
      title: 'Er ging iets mis',
      description: 'Het is niet gelukt om je gegevens te verwerken. Probeer het later opnieuw of neem contact met ons op om je aanmelding te bevestigen.',
      color: 'error',
      timeout: 8000,
    })
  }
}

</script>

<template>
  <UForm :schema="submissionSchema" :state="state" class="space-y-4" @submit="onSubmit">
    <div class="flex flex-col md:flex-row gap-4 w-full">
      <UFormGroup label="Jouw naam" name="name" class="basis-1/2">
        <UInput v-model.trim="state.name" size="xl" :disabled="isSubmitted"/>
      </UFormGroup>
      <UFormGroup label="Jouw e-mailadres" name="email" class="basis-1/2">
        <UInput v-model.trim="state.email" size="xl" :disabled="isSubmitted" />
      </UFormGroup>
    </div>
    <div class="flex flex-col md:flex-row gap-4 w-full">
      <UFormGroup label="Jouw telefoonnummer" name="phone" class="basis-1/2">
        <UInput v-model.trim="state.phone" size="xl" :disabled="isSubmitted" />
      </UFormGroup>
      <UFormGroup label="In welke sectoren heb je interesse?" name="sector" class="basis-1/2">
        <USelectMenu v-model="state.sectors" :options="sectors" multiple size="xl" :disabled="isSubmitted">
          <template #label>
            <span v-if="state.sectors.length" class="truncate text-xs">{{ state.sectors.join(', ') }}</span>
            <span v-else>Kies een sector</span>
          </template>
        </USelectMenu>
      </UFormGroup>
    </div>

    <UFormGroup label="Heb je nog opmerkingen voor ons?" name="message">
      <UTextarea v-model.trim="state.message" :rows="5" size="xl" autoresize :disabled="isSubmitted" />
    </UFormGroup>

    <UFormGroup name="utm" class="hidden">
      <input type="hidden" v-model="state.utm.source" />
      <input type="hidden" v-model="state.utm.medium" />
      <input type="hidden" v-model="state.utm.campaign" />
      <input type="hidden" v-model="state.utm.term" />
      <input type="hidden" v-model="state.utm.content" />
    </UFormGroup>

    <UButton type="submit" size="xl" :loading="isSubmitting"  color="primary" :disabled="isSubmitting || isSubmitted">
      Meld je aan!
    </UButton>
  </UForm>
</template>