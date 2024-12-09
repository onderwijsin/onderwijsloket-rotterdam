import type { HeroSlide } from '~/types';

export const slides: Array<HeroSlide> = [
    {
        heading: "Quae in controversiam veniunt, de iis, si placet",
        title: 'Hero slide 1',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/hero_video_bcgbv5',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' },
            { label: 'Link to another page', to: 'https://google.com', color: 'secondary' },
        ]
    },
    
    {
        heading: "Quae in controversiam veniunt, de iis, si placet",
        title: 'Hero slide 2',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/skyline_ltg10e',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' }
        ]
    },
    {
        heading: "Quae in controversiam veniunt, de iis, si placet",
        title: 'Hero slide 3',
        description: "<p>Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio.</p>",
        media: 'regios/rotterdam/classmates_ausdox',
        type: 'video',
        actions: [
            { label: 'Link to page', to: 'https://google.com' }
        ]
    },
]