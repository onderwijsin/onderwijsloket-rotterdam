import type { BadgeColor, BadgeVariant, ButtonColor, ButtonVariant } from '#ui/types'

export type Action = {
    label: string
    to: string
    color?: ButtonColor
    variant?: ButtonVariant
    icon?: string
    scrollOffset?: number
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


export type OwlFaq = {
    answer: string;
    createdAt: string; // ISO 8601 date string
    externalId: string;
    faqCategories: {
      name: string;
    }[];
    id: number;
    name: string;
    status: "published" | "draft" | "archived"; // Assuming other statuses could exist
    updatedAt: string; // ISO 8601 date string
    objectID: string
  }