<script lang="ts" setup>

const data = {
  title: 'Informatiebijeenkomst carrièreswitch Rotterdamse onderwijs',
  headerImage: 'regios/rotterdam/905_OCW_WmdT_Beeldbank_5_sd3ptl',
  headerImageAlt: 'Routes naar het onderwijs',
  
  startDate: '2025-09-24',
  endDate: null,
  startTime: '18:45',
  endTime: '21.15',
  location: 'Wolfert College',
  address: 'Walenburgerweg 128-130',
  zip: '3033 AK',
  city: 'Rotterdam',
  locationDescription: 'Wolfert College is een school voor voortgezet onderwijs in Rotterdam, op loopafstand van Rotterdam Centraal Station.',
  mapsLink: 'https://maps.app.goo.gl/vwTYnmUAkkr4T1fF8'
}


definePageMeta({
  name: 'event-details',
  layout: 'base',
});


const { slides } = useContent();

const { scrollTo } = useSnapScroll()

const hasEnded = computed(() => {
  const today = new Date();
  const end = data.endDate || data.startDate;
  const eventDate = new Date(end);
  return eventDate < today;
});
</script>

<template>
  <div class="fluid relative z-10">
    <UContainer>
      <section style="padding-top: 0px">
        <div class="relative grid max-h-[900px] min-h-[500px] bg-gradient-to-br from-secondary-800 to-secondary-600 dark:from-gray-700/40 dark:to-secondary-800/50">
          <InnerContainer class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12 h-full">
            <div class="w-full flex flex-col items-start justify-end h-full pb-6">
              <h1 class="text-white"> {{ data.title }}</h1>
              <ClientOnly><UBadge v-if="!hasEnded" color="warn" variant="subtle">Deze activiteit is geweest</UBadge></ClientOnly>
            </div>
            <div>
              <Frame size="lg" animated class="h-full">
                <NuxtImg :src="data.headerImage" width="600" height="400" fit="fill" class="w-full h-full object-cover dark:opacity-80" :modifiers="{g:'faces'}" :alt="data.headerImageAlt" />
              </Frame>
            </div>
          </InnerContainer>
          
        </div>
        
      </section>
    </UContainer>
  </div>
  <div>
    <div class="prose dark:prose-invert mx-auto w-full max-w-3xl">
     
    <section>
      <h3>Wat kun je verwachten?</h3>
      <p>Op de informatieavond woon je een presentatie bij over werken in het onderwijs en bijbehorend leer-werktrajecten, die jou aanspreken en passen bij jouw vooropleiding. Docenten van de hogescholen nemen je mee in alle ins en outs. Geen saaie theorie, maar concrete routes die jou helpen om je om te scholen en snel aan de slag te gaan in de klas.</p>
      <p>Er zijn veel manieren om het onderwijs in te gaan. Dit hangt af van je opleidingsniveau en persoonlijke situatie. Daarom is het belangrijk om te ontdekken wat het beste bij jou past. We snappen dat zo’n overstap spannend is, en helpen je graag door antwoord te geven op de vragen die je hebt.</p>
    </section>

    <section>
      <h3>Loop binnen op de informatiemarkt</h3>
      <p>Stel je vragen direct aan onderwijsbesturen en opleiders. Ga in gesprek met mensen uit de praktijk, ontdek welke route bij jou past en krijg persoonlijk advies. Zij vertellen je graag alles wat je moet weten over:</p>
      <ul>
        <li>Werken in het onderwijs: hoe ervaren zij dat?</li>
        <li>Hoe jouw werkervaring van waarde is in het onderwijzen van kinderen</li>
        <li>Hoe combineer je werken, leren én een sociaal leven?</li>
        <li>Je carrièrepad: in salaris en doorgroeimogelijkheden</li>
        <li>Werkgelegenheid en baanzekerheid</li>
        <li>Wat zijn de voorwaarden om als zij-instromer in beroep te mogen starten?</li>
        <li>Een dag meelopen in het onderwijs</li>
        <li>Hoe kies je welk onderwijstype bij je past?</li>
        <li>… en alle andere vragen die je nog hebt!</li>
      </ul>
      <p>De Rotterdamse schoolbesturen zijn erbij – een unieke kans om je goed te oriënteren op jouw volgende stap.</p>
      <p><strong>Nieuwsgierig? Kom naar de informatiebijeenkomst op 27 mei 2025. Meld je aan via de website van de gemeente Rotterdam.</strong></p>
    </section>
    </div> 

    <!-- <iframe src="https://traineesinonderwijs.notion.site/ebd/22ab66e1be6980338690c89caf040742" width="100%" height="600" frameborder="0" allowfullscreen /> -->
  </div>
</template>