import type { HeroSlide, Activity } from '~/types';

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
        heading: `Ga jij voor het <span class="gradient-text">PO, VO, of MBO</span>?`,
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

export const cards = [
    {
        to: "https://google.com",
        image: '',
        title: 'Leer de verschillende onderwijssectoren kennen'
    },
    {
        to: "https://google.com",
        image: '',
        title: 'Docent worden? Er zijn zó veel meer toffe functies in het onderwijs!'
    },
    {
        to: "https://google.com",
        image: '',
        title: 'Over salaris, werkdruk, opleidingskosten en andere praktische vragen'
    },
]