import type { BadgeColor, BadgeVariant, ButtonColor, ButtonVariant } from '#ui/types'

export type Action = {
    label: string
    to: string
    color?: ButtonColor
    variant?: ButtonVariant
    icon?: string
}
  
export type HeroSlide = {
      heading: string
      title: string
      description: string
      actions?: Action[]
      media: string
      type: 'image' | 'video'
}

export type Activity = {
    title: string
    icon: string
    description: string
    url: string
    btnLabel?: string
    viewMoreUrl?: string
    badges?: {
        icon?: string
        label: string
        variant?: BadgeVariant
        color?: BadgeColor
    }[]
}