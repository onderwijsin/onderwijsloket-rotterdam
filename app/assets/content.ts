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
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/hero_video_bcgbv5',
        type: 'video',
        actions: [
            { label: 'Verhalen van leraren', to: '#ervaar' },
            { label: 'Onderwijs010', to: 'https://onderwijs010.nl', color: 'primary', variant: 'soft' },
        ]
    },
    
    {
        heading: `<span class="gradient-text">Activiteiten</span> om te ontdekken of het onderwijs bij je past`,
        title: 'Oriënteren',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/skyline_ltg10e',
        type: 'video',
        actions: [
            { label: 'Bekijk agenda', to: '#activiteiten' }
        ]
    },
    {
        heading: `Ga jij voor het <span class="gradient-text">PO, VO, SO of MBO</span>?`,
        title: 'Onderwijssectoren',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/classmates_ausdox',
        type: 'video',
        actions: [
            { label: 'Lees verder', to: '#ontdek' }
        ]
    },
]

export const activity: Activity = {
    title: 'Ontdek werken in het Rotterdamse onderwijs!',
    icon: 'i-heroicons-academic-cap-20-solid',
    badges: [
        {
            icon: 'i-heroicons-calendar-days-20-solid',
            label: '29-01-2025'
        },
        {
            color: 'primary',
            variant: "soft",
            label: 'informatiebijeenkomst'
        },
        {
            icon: 'i-heroicons-currency-euro-20-solid',
            label: 'gratis',
            color: 'primary',
            variant: "soft",
        }
    ],
    description: 'Benieuwd naar een carrière in het onderwijs of de kinderopvang? Kom naar de informatiebijeenkomst op 29 januari en ontdek de mogelijkheden!',
    url: 'https://onderwijs010.nl/agenda/informatiebijeenkomst/',
    btnLabel: 'Meer informatie en aanmelden',
    viewMoreUrl: 'https://onderwijs010.nl/agenda/'
}


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
    btnLabel: 'naar routetool',
    bannerImage: 'regios/rotterdam/routes_uxrtg6',
    bannerImageAlt: 'Routes naar het onderwijs',
    article: {
        title: 'routes naar het leraarschap',
        url: 'https://www.onderwijsloket.com/kennisbank/routes-naar-het-leraarschap/'
    }
}

export const contact = {
    title: 'Contact, hulp en advies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Quare attende, quaeso.',
}



export const partners = {
    vacancies: {
        icon: 'i-heroicons-building-storefront-20-solid',
        title: 'Onderwijsvacatures in de regio Rotterdam',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim.',
        btnLabel: 'Naar vacaturebank Onderwijs010',
        to: 'https://onderwijs010.nl/vacatures/'
    },
    orgs: {
        icon: 'i-heroicons-building-office-2-20-solid',
        title: `Leer de 71 onderwijsbesturen kennen`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. Dempta enim.',
        btnLabel: 'Ontdek de Rotterdamse schoolbesturen',
        to: 'https://onderwijs010.nl/schoolbesturen/'
    },
    opleiding: {
        icon: 'i-heroicons-academic-cap-20-solid',
        title: 'Opleidingsaanbod in de buurt van Rotterdam',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Nullum inveniri verbum potest quod.',
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