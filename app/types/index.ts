import type { ButtonColor, ButtonVariant } from '#ui/types'

export type Action = {
    label: string
    to: string
    color?: ButtonColor
    variant?: ButtonVariant
}
  
export type HeroSlide = {
      heading: string
      title: string
      description: string
      actions?: Action[]
      media: string
      type: 'image' | 'video'
}