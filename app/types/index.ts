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



export type Sector = 'basisschool' | 'middelbare school' | 'mbo' | 'speciaal onderwijs'
type BaseStory = {
    sectors: Sector[]
    source: string,
    duration: number
    title: string
    url: string
    // type: 'article' | 'video' | 'podcast'
}

export type Article = BaseStory & {
    type: 'article'
    author: {
        image_id: string
        name: string
        subtitle: string
    }
}

export type Media = BaseStory & {
    type: 'video' | 'podcast'
    media: {
        thumb_id: string
    }
}

export type Story = Media | Article