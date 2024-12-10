import type { HeroSlide } from '~/types';

export const slides: Array<HeroSlide> = [
    {
        heading: `Kom werken <span class="gradient-text">in het Rotterdamse</span> onderwijs`,
        title: 'Rotterdams onderwijs',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/hero_video_bcgbv5',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' },
            { label: 'Link to another page', to: 'https://google.com', color: 'secondary' },
        ]
    },
    
    {
        heading: `<span class="gradient-text">Activiteiten</span> om te ontdekken of het onderwijs bij je past`,
        title: 'Oriënteren',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/skyline_ltg10e',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' }
        ]
    },
    {
        heading: `Ga jij voor het <span class="gradient-text">PO, VO, of MBO</span>?`,
        title: 'PO, VO of MBO?',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/classmates_ausdox',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' }
        ]
    },
]