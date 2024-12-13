<template>
  <header>
    <UContainer ref="header" class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 transition-colors z-50">
      <nav class="relative flex justify-between items-center h-[2.75rem]">
        <div 
          class="relative bg-white dark:bg-gray-950 transition-logo pl-1 -left-1"
          :class="!atTop ? 'py-2 top-0' : 'py-4 pr-4 sm:py-6 sm:pr-6 md:py-8 md:pr-8 top-4 sm:top-6 md:top-8'"
        >
          <div 
            class="transition-width" 
            :class="!atTop ? 'w-24' : 'w-40 md:w-48'"
          >
            <LogoRotterdam  class="w-full"/>
          </div>
        
        </div>
        
        <div class="hidden md:flex items-center gap-3">
          <ul class="hidden md:flex gap-3">
            <li v-for="item in headerItems">
              <UButton
                :variant="item.variant"
                :color="item.color"
                size="xs"
                :icon="item.icon"
                :label="item.label"
                @click="() => item.click ? item.click() : null"
              />
            </li>
          </ul>
          <ThemeToggle v-if="useDarkMode" />
          <FontToggle v-if="useDyslexicFont" />
        </div>
        <UDropdown  
          v-model:open="open" 
          :items="mobileItems" 
          :popper="{ placement: 'bottom-end', offsetDistance: 5 }"
          class="md:hidden"
          :ui="{
            rounded: 'rounded-none',
            width: 'min-w-48 w-[calc(65%-16px)] sm:w-[calc(50%-24px)]',
            // @ts-expect-error
            item: { icon: 'w-4 h-4', label: 'font-bold' }
          }"
        >
          <UButton
            color="gray"
            variant="ghost"
            class="w-[40px] swap -mr-2 "
            square
          >
            <UIcon
              name="i-heroicons-bars-3-bottom-right-20-solid"
              class="w-6 h-6"
              :class="!open ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'"
            />
            <UIcon
              name="i-heroicons-x-mark-20-solid"
              class="w-6 h-6"
              :class="open ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'"
            />
          </UButton>

          <template v-if="useDarkMode" #theme="{ item }">
            <ThemeToggle label class="w-[calc(100%+2rem)] -mx-4 -my-2.5" />
          </template>
          <template v-if="useDyslexicFont" #font="{ item }">
            <FontToggle label  class="w-[calc(100%+2rem)] -mx-4 -my-2.5" />
          </template>
        </UDropdown>
      </nav>
    </UContainer>
  </header>
  
</template>

<script lang="ts" setup>

const { scrollTo } = useSnapScroll()

const { useDarkMode, useDyslexicFont } = useAppConfig().settings.ui;

const { atTop } = useSnapScroll()
const { y } = useWindowScroll()

watchDebounced(y, (val) => {
  atTop.value = val < 50
}, { debounce: 50, maxWait: 500, immediate: true })

import type { ButtonColor, ButtonVariant, DropdownItem } from '#ui/types'

type Item = DropdownItem & {
  id: string
  color?: ButtonColor
  variant?: ButtonVariant
}

const route = useRoute()
const isHome = computed(() => route.path === '/')

const headerItems: Ref<Item[]> = computed(() => [
  {
    id: 'ontdek',
    label: 'Ontdek het onderwijs',
    icon: 'i-heroicons-light-bulb-16-solid',
    click: () => isHome.value ? scrollTo('ontdek') : navigateTo('/#ontdek'),
    color: 'gray',
    variant: 'ghost'
  },
  {
    id: 'ervaar',
    label: 'Ervaar het onderwijs',
    icon: 'i-heroicons-bolt-16-solid',
    click: () => isHome.value ? scrollTo('ervaar') : navigateTo('/#ervaar'),
    color: 'gray',
    variant: 'ghost'
  },
  {
    id: 'advies',
    label: 'Hulp en advies',
    icon: 'i-heroicons-chat-bubble-left-right-16-solid',
    click: () => isHome.value ? scrollTo('advies') : navigateTo('/#advies'),
    color: 'primary',
    variant: 'soft'
  },
])


const open = ref(false)

const mobileItems = computed(() => [
  headerItems.value,
  [
    {
      label: 'Wijzig kleurthema',
      slot: 'theme'
    },
    {
      label: 'Wijzig lettertype',
      slot: 'font'
    }
  ]
])

</script>

<style lang="postcss">
.transition-logo {
  transition: padding 0.2s ease-in, top 0.2s ease-in, background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.transition-width {
  transition: width 0.2s ease-in;
}


.cls-1, .cls-4 {
  @apply fill-primary-500;
}
.cls-2, .cls-3 {
  @apply fill-gray-950 dark:fill-white
}


[data-font="dyslexic"] {
  font-size-adjust: 0.38;
}
</style>
