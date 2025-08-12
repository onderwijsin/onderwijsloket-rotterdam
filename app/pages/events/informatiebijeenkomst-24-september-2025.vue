<script lang="ts" setup>

interface BaseEventData {
  title: string;
  headerImage: string;
  headerImageAlt: string;
  startDate: string;
  endDate: string | null;
  startTime: string | null;
  endTime: string | null;
  isOnline: boolean;
  location: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
  locationDescription: string | null;
  mapsLink: string | null;
  roomLink: string | null;
  content: {
    subHeading?: string;
    mainHeading?: string;
    introText?: string;
  }
  cards?: Array<{
    title: string;
    description: string;
  }>;
  faqs?: Array<{ label: string, content: string }>;
}

interface PhysicalEventData extends BaseEventData {
  isOnline: false;
  location: string;
  address: string;
  zip: string;
  city: string;
  locationDescription: string;
  mapsLink: string;
  roomLink: null;
}

interface OnlineEventData extends BaseEventData {
  isOnline: true;
  location: null;
  address: null;
  zip: null;
  city: null;
  locationDescription: null;
  mapsLink: null;
  roomLink: string;
}

type EventData = PhysicalEventData | OnlineEventData;

const faqs: Array<{ label: string; content: string }> = [
  {
    label: "Is de bijeenkomst vrijblijvend?",
    content: "Ja, de bijeenkomst is vrijblijvend. Je kunt na de bijeenkomst beslissen of je interesse hebt in een van de zij-instroomtrajecten."
  },
  {
    label: "Hoe weet ik zeker dat een baan in het onderwijs iets voor mij is?",
    content: "De informatiebijeenkomst is een goede eerste stap in je oriëntatie; praat ook met familie, vrienden of collega’s over je ambities. Je kunt op verschillende scholen een dag meelopen om te ervaren of het onderwijs bij je past. Online is er veel informatie te vinden; onderaan deze pagina vind je handige linkjes."
  },
  {
    label: "Wat is het zij-instroomtraject?",
    content: "Er zijn mogelijkheden voor professionals om zich te laten omscholen tot leraar in het basisonderwijs. Afhankelijk van je vooropleiding en/of werkervaring zijn er verschillende trajecten, waaronder zij-instroom in beroep voor mensen met een hbo- of wo-diploma en de deeltijd-pabo voor mensen met een mbo-4-diploma of via de 21+-toets."
  },
  {
    label: "Wat is het zij-instroomtraject in beroep?",
    content: "Zij-instroom in beroep is een tweejarig traject waarin je tegelijkertijd werkt en leert: je staat vanaf dag 1 voor de klas en volgt vakken aan de lerarenopleiding. Je krijgt direct betaald en je studiekosten worden door het schoolbestuur waarvoor je werkt betaald. Voor toelating heb je minimaal een hbo- of wo-diploma nodig."
  },
  {
    label: "Vanaf dag 1 betaald voor de klas…?",
    content: "Voldoe je aan de voorwaarden voor zij-instroom in beroep? Dan sta je vanaf dag 1 betaald voor de klas. Je combineert werken en leren en past de theorie direct toe in de praktijk."
  },
  {
    label: "Kom ik direct alleen voor de klas te staan?",
    content: "Je staat er niet alleen voor; je wordt stap voor stap begeleid. Het doel is dat je aan het eind van het traject met zelfvertrouwen je eigen klas runt, inclusief alles wat daarbij komt kijken."
  },
  {
    label: "Hoelang duurt de pabo?",
    content: "De voltijd-pabo duurt vier jaar. Als zij-instromer in beroep kun je een verkort traject volgen van ongeveer twee jaar. Er zijn ook flexibele en deeltijdvarianten van de pabo (bijvoorbeeld met mbo-4, havo of vwo + 21+-toets). Afhankelijk van je vooropleiding en eventuele vrijstellingen duurt jouw traject tussen de twee en vier jaar. Goed om te weten: de precieze duur hangt af van je achtergrond en tempo; stel je vragen op 27 mei aan de hogescholen op de informatiemarkt."
  },
  {
    label: "Wat is het startsalaris van een zij-instromer in het basisonderwijs?",
    content: "De salarissen van leraren in het primair onderwijs zijn vastgelegd in de cao primair onderwijs. Volgens de huidige cao verdient een basisschooldocent tussen de € 3.001,- en € 6.568,- bruto per maand."
  },
  {
    label: "Studiekosten? Hoe zit dat?",
    content: "In vrijwel alle zij-instroom-in-beroep-trajecten wordt de opleiding vergoed via de zij-instroomsubsidie, die schoolbesturen kunnen aanvragen. Studiekosten voor de deeltijd-pabo zijn in de meeste gevallen voor eigen rekening."
  },
  {
    label: "Op welke school kan ik aan de slag (als zij-instromer)?",
    content: "Studiekosten voor de deeltijdpabo (bijvoorbeeld voor mensen met een mbo-4-diploma) zijn in de meeste gevallen voor eigen rekening."
  }
];

const data: EventData = {
  title: 'Informatiebijeenkomst carrièreswitch Rotterdamse onderwijs',
  headerImage: 'regios/rotterdam/905_OCW_WmdT_Beeldbank_5_sd3ptl',
  headerImageAlt: 'Routes naar het onderwijs',
  isOnline: false,
  startDate: '2025-09-24',
  endDate: '2025-09-24',
  startTime: '18:45',
  endTime: '21:15',
  location: 'Wolfert College',
  address: 'Walenburgerweg 128-130',
  zip: '3033 AK',
  city: 'Rotterdam',
  locationDescription: 'Wolfert College is een school voor voortgezet onderwijs in Rotterdam, op loopafstand van Rotterdam Centraal Station.',
  mapsLink: 'https://maps.app.goo.gl/vwTYnmUAkkr4T1fF8',
  roomLink: null,
  content: {
    subHeading: 'Werken in Rotterdam',
    mainHeading: 'Ontdek het onderwijs',
    introText: 'Rotterdam biedt een dynamische omgeving vol diversiteit, innovatie en ambitie. Ontdek het brede opleidingsaanbod en welke plek in het onderwijs bij je past - en ervaar waarom werken in Rotterdam zoveel meer is dan alleen lesgeven!'
  },
  cards: [
    {
      title: 'Aan de slag als zij-instromer in beroep',
      description: 'Als zij-instromer kun je in Rotterdam direct aan de slag én krijg je vanaf dag één een volwaardig salaris, ook op je studiedagen. Geen zorgen dus over je inkomen.'
    },
    {
      title: 'Werken en leren',
      description: 'Je combineert werken en leren: je staat voor de klas en volgt vakken aan een van de pabo-opleidingen. Zo pas je de theorie meteen toe in de praktijk en behaal je na twee jaar je lesbevoegdheid.'
    },
    {
      title: 'Hoe kom ik in aanmerking?',
      description: 'Met een hbo- óf wo-diploma kom je als werkend professional in aanmerking voor het zij-instroomtraject in beroep. Hierdoor kan je direct starten aan het leer-werktraject.'
    },
  ],
  faqs
}


definePageMeta({
  name: 'event-details',
  layout: 'base',
});

const  { grid } = useResponsive()
const { scrollTo } = useSnapScroll()

const hasEnded = computed(() => {
  const today = new Date();
  const end = data.endDate || data.startDate;
  const eventDate = new Date(end);
  return eventDate < today;
});

const prettyStartDate = computed(() => {
  const date = new Date(data.startDate);
  return date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
});

const dateString = computed(() => {
  const start = new Date(data.startDate);
  const end = data.endDate ? new Date(data.endDate) : start;
  const equalStartAndEnd = start.getTime() === end.getTime();
  const date = equalStartAndEnd ? start.toLocaleDateString() : `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  const noTime = !data.startTime
  if (noTime) return `${date}`;

  const startAndEndTime = !noTime && data.endTime && data.startTime !== data.endTime;
  const time = noTime ? null : startAndEndTime ? `van ${data.startTime} tot ${data.endTime} uur` : `om ${data.startTime} uur`
  
  return `${date} ${time}`;
});

const location = computed(() => {
  if (data.isOnline) return 'Online';
  if (!data.location) return 'Locatie volgt later';

  return `${data.location}, ${data.address} ${data.city}`;
});


const successMessage = computed(() => {
  let message = `Leuk dat je er bij bent op ${prettyStartDate.value}.`
  if (data.isOnline) {
    message += ' Je ontvangt een paar dagen voor de bijeenkomst een link naar de online meeting room.';
  } else {
    if (data.startTime) {
      message += ` We ontvangen je graag om ${data.startTime} uur bij ${data.location}.`;
    } else {
      message += ` We ontvangen je graag op ${data.location}`;
    }
    message += ' Een paar dagen voor de bijeenkomst ontvang je een e-mail met meer informatie.'
  }

  return message;
});


</script>

<template>
  <div class="fluid relative z-20 pb-12 md:pb-20">
    <UContainer>
      <section style="padding-top: 0px">
        <div class="relative grid min-h-[500px] bg-gradient-to-br from-secondary-800 to-secondary-600 dark:from-gray-700/40 dark:to-secondary-800/50">
          <InnerContainer class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12 h-full">
            <div class="w-full flex flex-col items-start justify-end h-full pb-6 md:pb-12 mt-12">
              <h1 class="text-white"> {{ data.title }}</h1>
              <div>
                
                  <ClientOnly><UBadge v-if="hasEnded" color="warn" variant="subtle" class="mb-6">Deze activiteit is geweest</UBadge></ClientOnly>
                  <div class="space-y-4">
                    <ClientOnly>
                      <p class="text-white flex flex-row gap-2 items-start leading-none text-lg">
                        <UIcon name="heroicons:calendar-date-range-20-solid" size="sm" />
                        <span>{{ dateString }}</span>
                      </p>
                    </ClientOnly>
                    <p class="text-white flex flex-row gap-2 items-start leading-none text-lg">
                      <UIcon name="heroicons:map-pin-20-solid" size="sm" />
                      <span>{{ location }}</span>
                    </p>
                  </div>

                  <UButtonGroup size="xl" class="mt-8 md:mt-12">
                      <UButton
                        label="Meld je aan"
                        color="secondary"
                        variant="soft"
                        class="px-6"
                        @click="scrollTo('#aanmelden')"
                      />
                      <UButton
                        label="Bekijk route"
                        color="gray"
                        variant="ghost"
                        class="text-white px-6"
                        :to="data.mapsLink"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </UButtonGroup>
                  
                
              </div>
            </div>
            <div class="h-full">
              <Frame size="lg" animated class="h-full">
                <NuxtImg :src="data.headerImage" width="600" height="400" fit="fill" class="w-full h-full object-cover dark:opacity-80" :modifiers="{g:'faces'}" :alt="data.headerImageAlt" />
              </Frame>
            </div>
          </InnerContainer>
          
        </div>
        
      </section>
      <InnerContainer v-if="data.content.mainHeading" id="rotterdam" class="mb-20 md:mb-32 pt-12">
          <div class="relative text-center py-6 md:py-0">
            
            <h2 v-if="data.content.subHeading" class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">{{  data.content.subHeading }}</h2>
            <h3 class="text-3xl md:text-5xl ">{{  data.content.mainHeading }}</h3>
            <p v-if="data.content.introText">{{ data.content.introText}}</p>

            <span class="absolute -bottom-8 md:-bottom-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
          </div>
          
        </InnerContainer>
        <InnerContainer v-if="data.cards?.length" from="xl" class="grid md:grid-cols-3 gap-8 md:gap-12 pb-12 md:pb-16">
          <UCard 
            v-for="card in data.cards"
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
                {{ card.title}}
              </h3>
            </template>
            <p>{{ card.description }}</p>
          </UCard>
          
        </InnerContainer>

        <InnerContainer v-if="data.content.mainHeading" id="rotterdam" class="mb-20 md:mb-32 pt-12">
          <div class="relative text-center py-6 md:py-0">
            
            <h2 v-if="data.content.subHeading" class="sm:text-lg uppercase text-primary-500 dark:text-primary-400">Meld je aan</h2>
            <h3 class="text-3xl md:text-5xl ">Kom naar de {{ data.title }}</h3>
            <UButton size="xl" color="primary" label="Meld je aan" @click="scrollTo('#aanmelden')" />

            <span class="absolute -bottom-8 md:-bottom-16 left-[calc(50%-16px)] animate-bounce">
              <Arrow variant="outline" type="triangle" class="rotate-90 " animated size="sm" :amount="2" />
            </span>
          </div>
          
        </InnerContainer>
        <Prose class="mb-12 md:mb-20">
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
        </Prose> 
        <InnerContainer class="mb-12 md:mb-20" from="xl">
          <ClientOnly>
            <ArrowHeading type="h2">
              Meld je aan
            </ArrowHeading>
            <p class="mb-6">Door onderstaand je gegevens achter te laten, laat je ons weten dat je aanwezig bent bij {{ data.title }} op {{ prettyStartDate }}.</p>
            <SignupForm 
              :event="data.title"
              :success-message="successMessage"
            />
          </ClientOnly>
          
        </InnerContainer>
        <Faqs
          heading="Veelgestelde vragen"
          description="Wil je meer weten over zij-instromen in het onderwijs? Of heb je vragen over de aanstaande informatiebijeenkomst? Lees dan snel de veelgestelde vragen."
          :data="data.faqs || []"
          class="relative z-20"
        />



         
    </UContainer>
  </div>
</template>