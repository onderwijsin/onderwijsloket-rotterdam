import { pages, slides, advies, routes, partners, contact, faqs, bevoegdheden } from "~/assets/content"

import type { Sector } from '~/types'

type ColorShade = 'primary' | 'secondary' | 'tertiary' | 'aux1' | 'aux2' | 'aux3'
export const useContent = () => {

  const colors = {
    'basisschool': 'secondary',
    'middelbare school': 'tertiary',
    'mbo': 'aux1',
    'speciaal onderwijs': 'aux2',
    'hoger onderwijs': 'aux3',
  } as const

  const getSectorColor = (val: Sector): ColorShade => {
      return colors[val] || 'primary'
  }

  const getSectorBackgroundColor = (val?: Sector) => {
    if (!val) return 'bg-gray-200 dark:bg-gray-600'
    const color = getSectorColor(val)
  
    let base = 'transition-colors '
    if (color === 'primary')    base += 'bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-950 dark:group-hover:bg-primary-800'
    if (color === 'secondary')  base += 'bg-secondary-100 group-hover:bg-secondary-200 dark:bg-secondary-950 dark:group-hover:bg-secondary-800'
    if (color === 'tertiary')   base += 'bg-tertiary-100 group-hover:bg-tertiary-200 dark:bg-tertiary-950 dark:group-hover:bg-tertiary-800'
    if (color === 'aux1')       base += 'bg-aux1-100 group-hover:bg-aux1-200 dark:bg-aux1-950 dark:group-hover:bg-aux1-800'
    if (color === 'aux2')       base += 'bg-aux2-200 group-hover:bg-aux2-300 dark:bg-aux2-950 dark:group-hover:bg-aux2-800'
    if (color === 'aux3')       base += 'bg-aux3-200 group-hover:bg-aux3-300 dark:bg-aux3-950 dark:group-hover:bg-aux3-800'

    return base
  }



  return { 
    getSectorColor, getSectorBackgroundColor,
    
    pages, slides, advies, routes, contact, partners, faqs, bevoegdheden
  }
}
