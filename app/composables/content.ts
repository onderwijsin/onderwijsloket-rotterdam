import { pages, slides, cards, activity, advies, routes, stories, partners, contact, faqs } from "~/assets/content"

import type { Sector } from '~/types'
export const useContent = () => {

  const colors = {
    'basisschool': 'secondary',
    'middelbare school': 'tertiary',
    'mbo': 'aux1',
    'speciaal onderwijs': 'aux2',
    'hoger onderwijs': 'aux3',
  } as const

  const getSectorColor = (val: Sector) => {
      return colors[val] || undefined
  }

  return { 
    getSectorColor,
    
    pages, slides, activity, cards, advies, routes, stories, contact, partners, faqs
  }
}
