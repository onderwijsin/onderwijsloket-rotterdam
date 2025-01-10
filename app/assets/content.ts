import type { HeroSlide, Activity, OwlFaq } from '~/types';


export const pages = {
    home: {
        name: 'Home',
        meta: 'Ontdek jouw mogelijkheden in het Rotterdamse onderwijs. Met een actueel overzicht van vacatures, oriëntatie-activiteiten en informatie over het vinden van een werkplek of opleiding.'
    },
    // besturen: {
    //     name: 'Schoolbesturen',
    //     meta: 'De schoolbesturen die zijn aangesloten bij Onderwijsloket Rotterdam',
    //     image: 'regios/rotterdam/school_corridor_eagqjt'
    // },
    // privacy: {
    //     name: 'Privacybeleid',
    //     meta: 'Hoe Onderwijsloket Rotterdam omgaat met jouw privacy en persoonsgegevens.',
    //     image: 'regios/rotterdam/school_corridor_2_mjqmta'
    // },
    // voorwaarden: {
    //     name: 'Algemene voorwaarden',
    //     meta: 'De algemene voorwaarden die gelden voor de dienstverlening van Onderwijsloket Rotterdam.',
    //     image: 'regios/rotterdam/school_staircase_me9cmk'
    // },
}

export const slides: Array<HeroSlide> = [
    {
        heading: `Kom werken <span class="gradient-text">in het Rotterdamse</span> onderwijs`,
        title: 'Rotterdams onderwijs',
        description: "<p>Maak impact in de klas en bouw mee aan de toekomst van Rotterdam. Het Rotterdamse onderwijs biedt een dynamische werkomgeving vol kansen en mogelijkheden. Ontdek vacatures en routes om leraar te worden en vind de baan die bij jou past.</p>",
        media: 'regios/rotterdam/hero_video_bcgbv5',
        type: 'video',
        actions: [
            { label: 'Bekijk vacatures', to: '#vacatures', scrollOffset: 60 },
        ]
    },
    
    {
        heading: `<span class="gradient-text">Activiteiten</span> om te ontdekken of het onderwijs bij je past`,
        title: 'Oriënteren',
        description: "<p>Wil jij weten of een loopbaan in het onderwijs iets voor jou is? Bezoek een open dag of meld je aan voor onze informatiebijeenkomst voor zij-instromers. Ontdek alle activiteiten in de regio en zet jouw eerste stap richting het onderwijs.</p>",
        media: 'regios/rotterdam/skyline_ltg10e',
        type: 'video',
        actions: [
            { label: 'Bekijk agenda', to: '#activiteiten' }
        ]
    },
    
    {
        heading: `Vind jouw <span class="gradient-text">ideale route</span> naar het onderwijs`,
        title: 'Vind jouw route',
        description: "<p>Welke weg past het beste bij jou? De routetool helpt je om jouw persoonlijke opleidingsroute te ontdekken, afgestemd op jouw achtergrond en ambities. Zet de eerste stap naar een toekomst in het onderwijs.</p>",
        media: 'regios/rotterdam/classmates_ausdox',
        type: 'video',
        actions: [
            { label: 'Vind jouw route', to: '#routes' }
        ]
    },
]

export const bevoegdheden = [
    { id: 'po', label: 'Primair onderwijs', altNames: ['po', 'Primair onderwijs', 'Basisonderwijs'], description: 'Met deze bevoegdheid mag lesgeven als groepsleerkracht in het primair onderwijs.' },
    { id: 'vo-1', label: 'Eerstegraads', altNames: ['Eerstegraads', 'Eerstegraads bevoegdheid', 'vo-1'], description: 'Met een eerstegraads lesbevoegdheid mag je lesgeven in het voortgezet onderwijs (vmbo, havo en vwo), het mbo en als vakleerkracht in het primair onderwijs.' },
    { id: 'vo-2', label: 'Tweedegraads', altNames: ['Tweedegraads', 'Tweedegraads bevoegdheid', 'vo-2'], description: 'Met een tweedegraads lesbevoegdheid mag je lesgeven in het voortgezet onderwijs (het hele vmbo en de onderbouw van havo en vwo), het mbo en als vakleerkracht in het primair onderwijs.' },
    { id: 'vo-2-alt', label: 'Beperkt tweedegraads', altNames: ['Beperkt tweedegraads', 'Beperkt tweedegraads bevoegdheid', 'vo-2-alt'], description: 'Met een beperkt tweedegraads lesbevoegdheid mag je lesgeven in het voortgezet onderwijs (vmbo en de onderbouw van havo en vwo) en als vakleerkracht in het primair onderwijs.' },
] as const


export const advies = {
    btnLabel: 'plan een gratis adviesgesprek',
    bannerImage: 'stichting/site/Team_website_02_z4ucym',
    bannerImageAlt: 'Adviseur van het Onderwijsloket',
    info: `
        <p>Tijdens een adviesgesprek met het Onderwijsloket denkt een adviseur met je mee over je mogelijke routes naar het onderwijs. Onze adviseurs geven jou graag een advies op maat. Of je nou wilt weten welke opleiding het best bij jou situatie en beoogde functie past, of voor welk type functies je in aanmerking komt; onze adviseurs helpen je graag verder. De adviseur belt je op een door jou gekozen moment om je ingestuurde vragen met je door te nemen.</p>
        <p>Een adviesgesprek met het Onderwijsloket duurt ongeveer 20 minuten. We vragen je bij het inplannen van het gesprek om wat informatie over jezelf met ons te delen, zoals het telefoonnummer waarop we je kunnen bereiken, informatie over je eerder afgeronde opleiding(en) en waar je het over zou willen hebben tijdens het gesprek. Ook sturen we je na het inplannen van het adviesgesprek alvast wat handige informatie toe, die je ter voorbereiding kunt doornemen.</p>
        <br />
        <h5>Over het Onderwijsloket</h5>
        <p>Het landelijke Onderwijsloket is een informatie- en adviescentrum over <i>werken in het onderwijs</i>. Zij weten alles over routes, bevoegdheden, subsidies, de verschillende sectoren en functies, en andere algemene en praktische zaken om mee te wegen in je oriëntatie.</p>
        <p>Onderwijsloket Rotterdam is géén onderdeel van het Onderwijsloket, maar werkt wel met haar samen.</p>
    `
}

export const routes = {
    btnLabel: 'Naar routetool',
    bannerImage: 'regios/rotterdam/routes_uxrtg6',
    bannerImageAlt: 'Routes naar het onderwijs',
    article: {
        title: 'Routes naar het leraarschap',
        url: 'https://www.onderwijsloket.com/kennisbank/routes-naar-het-leraarschap/'
    }
}

export const partners = {
    vacancies: {
        icon: 'i-heroicons-building-storefront-20-solid',
        title: 'Vind jouw plek in het Rotterdamse onderwijs',
        description: 'Op zoek naar een baan in het onderwijs? Bekijk de nieuwste vacatures voor het basisonderwijs, voortgezet onderwijs en mbo. Met één klik ontdek je alle mogelijkheden en vind je de baan die bij jou past.',
        actions: [
            { label: 'Naar vacaturebank Onderwijs010', to: 'https://onderwijs010.nl/vacatures/' }
        ]
    },
    orgs: {
        icon: 'i-heroicons-building-office-2-20-solid',
        title: `Ontdek de Rotterdamse schoolbesturen`,
        description: 'Rotterdam heeft een breed scala aan schoolbesturen met elk een eigen visie en aanpak. Leer meer over de organisaties achter de scholen en ontdek waar jouw toekomst in het onderwijs kan beginnen.',
        actions: [
            { label: 'Ontdek de Rotterdamse schoolbesturen', to: 'https://onderwijs010.nl/schoolbesturen/' },
            { label: 'Bekijk scholenopdekaart.nl', to: 'https://scholenopdekaart.nl/zoeken/basisscholen?zoektermen=rotterdam&weergave=Kaart' },
        ]
    },
    opleiding: {
        icon: 'i-heroicons-academic-cap-20-solid',
        title: 'Vind jouw opleiding in de regio',
    }
}

export const faqs = {
    defaultItems: [
        {
            "answer": "De voltijdvariant van de pabo duurt vier jaar. Bij flexibele of verkorte deeltijdvarianten kan je traject twee tot vier jaar duren, afhankelijk van eventuele vrijstellingen waar je recht op hebt vanwege je vooropleidingen. Vraag hiernaar bij de hogeschool waar jij de pabo wilt volgen.  ",
            "createdAt": "2020-04-28T09:24:00.000Z",
            "externalId": "166",
            "faqCategories": [
                {
                    "name": "Lerarenopleidingen"
                },
                {
                    "name": "Lerarenopleiding primair onderwijs (pabo)"
                }
            ],
            "id": 58,
            "name": "Hoelang duurt de pabo?",
            "status": "published",
            "updatedAt": "2024-09-25T05:55:17.000Z",
            "objectID": "58",
            "_highlightResult": {
                "answer": {
                    "value": "De voltijdvariant van de pabo duurt vier jaar. Bij flexibele of verkorte deeltijdvarianten kan je traject twee tot vier jaar duren, afhankelijk van eventuele vrijstellingen waar je recht op hebt vanwege je vooropleidingen. Vraag hiernaar bij de hogeschool waar jij de pabo wilt volgen.  ",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "Hoelang duurt de pabo?",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "answer": "De salarissen van leraren in het primair onderwijs zijn vastgelegd in de cao van het primair onderwijs. Volgens de huidige cao verdient een basisschooldocent tussen de € € 3.001,- en € 6.568,- bruto per maand.",
            "createdAt": "2020-04-22T09:34:00.000Z",
            "externalId": "160",
            "faqCategories": [
                {
                    "name": "Salaris"
                }
            ],
            "id": 56,
            "name": "Wat is het salaris van een leraar in het basisonderwijs?",
            "status": "published",
            "updatedAt": "2024-09-25T05:55:17.000Z",
            "objectID": "56",
            "_highlightResult": {
                "answer": {
                    "value": "De salarissen van leraren in het primair onderwijs zijn vastgelegd in de cao van het primair onderwijs. Volgens de huidige cao verdient een basisschooldocent tussen de € € 3.001,- en € 6.568,- bruto per maand.",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "Wat is het salaris van een leraar in het basisonderwijs?",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "answer": "Als je geen mbo4-, havo- of vwo-diploma hebt, dan kun je met behulp van een 21+-toets toch aantonen dat jij het juiste werk/denkniveau hebt om aan een hbo-opleiding te beginnen. Je moet daarvoor wel 21 jaar of ouder zijn.",
            "createdAt": "2020-04-22T09:01:00.000Z",
            "externalId": "127",
            "faqCategories": [
                {
                    "name": "Lerarenopleidingen"
                },
                {
                    "name": "Andere routes"
                },
                {
                    "name": "Wetten en regels"
                }
            ],
            "id": 23,
            "name": "Wanneer moet ik een 21+-toets maken?",
            "status": "published",
            "updatedAt": "2024-09-25T05:55:13.000Z",
            "objectID": "23",
            "_highlightResult": {
                "answer": {
                    "value": "Als je geen mbo4-, havo- of vwo-diploma hebt, dan kun je met behulp van een 21+-toets toch aantonen dat jij het juiste werk/denkniveau hebt om aan een hbo-opleiding te beginnen. Je moet daarvoor wel 21 jaar of ouder zijn.",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "name": {
                    "value": "Wanneer moet ik een 21+-toets maken?",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "answer": "Het zij-instroomtraject is een tweejarig traject waarbij je tegelijkertijd werkt en leert. Je staat vanaf dag 1 voor de klas als leraar en je volgt daarnaast vakken op een lerarenopleiding. Om in aanmerking te komen voor een zij-instroomtraject heb je minimaal een hbo- of wo-diploma nodig.",
            "createdAt": "2020-04-22T08:43:00.000Z",
            "externalId": "115",
            "faqCategories": [
                {
                    "name": "Zij-instroom"
                },
                {
                    "name": "Stap 1: Oriënteren en solliciteren"
                },
                {
                    "name": "Begrippen en afkortingen"
                },
                {
                    "name": "Overige begrippen"
                }
            ],
            "id": 11,
            "name": "Wat is een zij-instroomtraject?",
            "status": "published",
            "updatedAt": "2024-09-25T05:55:12.000Z",
            "objectID": "11",
        }
    ] as OwlFaq[],
    topCats: ['Zij-instroom', "Salaris", "Lerarenopleidingen", "De drie bevoegdheden"]
}