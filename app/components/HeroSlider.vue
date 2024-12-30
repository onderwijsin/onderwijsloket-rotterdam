<template>
  <div ref="swipeTarget" class="slider relative w-full h-full overflow-hidden">
    <!-- Navigation Panels -->
    <div 
      class="nav-panel prev z-20" 
      :class="{ 'hover-active': showPrevPreview }"
      tabindex="0"
      @mouseenter="handleSlideHoverPreview(true, -1)"
      @mouseleave="handleSlideHoverPreview(false)"
      @click="navigateToPrev"
      @keydown.enter="navigateToPrev"
    />
    <div 
      class="nav-panel next z-20" 
      :class="{ 'hover-active': showNextPreview }"
      tabindex="0"
        @mouseenter="handleSlideHoverPreview(true, 1)"
        @mouseleave="handleSlideHoverPreview(false)"
        @click="navigateToNext"
        @keydown.enter="navigateToNext"
    />

    <!-- Custom Pointer -->
    <div 
      v-if="showPrevPreview || showNextPreview" 
      class="custom-pointer fixed z-50 pointer-events-none"
      :style="{ 
        left: `${x + (showNextPreview ? -45 : 45)}px`, 
        top: `${y}px` 
      }"
    >
      <div class="flex gap-4 items-center" :class="showNextPreview ? 'flex-row-reverse' : 'flex-row'">
        <div class="shrink-0 h-8 w-8 rounded-full grid place-items-center border border-1 bg-white/40 shadow-lg">
          <Arrow fill="primary" size="sm" :class="showNextPreview ? '' : 'rotate-180'" />
        </div>
        <span class="font-bold text-white whitespace-nowrap">{{ showNextPreview ? nextSlideTitle : prevSlideTitle }}</span>
      </div>
    </div>

    <!-- Slider Track -->
    <div 
      class="track absolute inset-0" 
      :style="`--hover-transform: translateX(${trackPosition}px);`"
    >
      <div 
        v-for="(slide, index) in data" 
        :key="index"
        :aria-hidden="index > slides.length - 1"
        class="slide parallelogram flex items-end"
        :style="`--index: ${getRelativeIndex(index, currentIndex)};`"
        :class="[
          getPosClass(index, currentIndex),
          {
            'hover-prev': showPrevPreview && getPosClass(index, currentIndex) === 'prev', 
            'hover-next': showNextPreview && getPosClass(index, currentIndex) === 'next'
          }
        ]"

        @mouseenter="() => handleSlideHover(index)"
        @mouseleave="handleSlideHoverEnd"
        @click="() => getSlide(index)"
      >
        <NuxtImg
          v-if="slide.type === 'image'"
          :src="slide.media"
          width="1920"
          height="1080"
          sizes="480px md:600px lg:1080px xl:1280px"
          class="media"
          fit="fill"
          :preload="index === currentIndex"
          :alt="slide.heading"
        />
        <HeroVideo
          v-else 
          class="media"
          :media="slide.media"
          :heading="slide.heading"
          :preload="index === currentIndex || getPosClass(index, currentIndex) === 'prev' || getPosClass(index, currentIndex) === 'next'"
          :is-active="index === currentIndex"
        />

        <div class="transition-colors absolute inset-0 z-10 bg-primary-900/0" :class="index === currentIndex ? 'dark:bg-primary-900/20' : 'dark:bg-primary-900/10'" />
        
        <InnerContainer>
          <div class="slide-content z-10 text-white py-8 pt-12 md:py-24 relative max-w-full md:max-w-3xl">
            <div class="circle" />
            <div class="relative">
              <component :is="index === 0 ? 'h1' : 'h2'" class="text-5xl lg:text-8xl uppercase font-black"><span v-html="slide.heading"></span></component>
              <div class="text-lg" v-html="slide.description"></div>
              <UButtonGroup v-if="!!slide.actions?.length" size="lg" class="mt-8 md:mt-12">
                <UButton 
                  v-for="btn in slide.actions"
                  :color="btn.color" 
                  :variant="btn.variant"  
                  :icon="btn.icon"
                  :label="btn.label"
                  @click="handleLink(btn.to)"
                />
              </UButtonGroup>
            </div>
          </div>
        </InnerContainer>
        
      </div>
    </div>

    
  </div>
</template>

<script lang="ts" setup>

// TODO cleanup component
// TODO refactor logic and fns for better readability and maintability
// TODO split into subcomponents
// TODO pause slider if window loses focus (and resume once in focus). Same is true for onActivated and onDeactivated hooks (keep-alive is not used, but it might be in the future!)


import type { HeroSlide } from '~/types';

interface HeroSliderProps {
  slides: HeroSlide[]
  autoplay?: number
}

const props = withDefaults(defineProps<HeroSliderProps>(), {
  autoplay: 0
})

const data = computed(() => {
  // Duplicate slides if less than 4 to ensure smooth navigation
  return props.slides.length > 4 
    ? props.slides 
    : [...props.slides, ...props.slides]
})

const currentIndex = ref(0)
const trackPosition = ref(0)
const showPrevPreview = ref(false)
const showNextPreview = ref(false)

// Autoplay functionality
const { pause } = useIntervalFn(() => {
  goTo(data.value.length - 1 === currentIndex.value ? 0 : currentIndex.value + 1)
}, props.autoplay || undefined)

// Pause autoplay if no autoplay prop is set
if (!props.autoplay) {
  pause()
}

// Navigation methods
const goTo = (index: number) => {
  currentIndex.value = index
}

const getSlide = (index: number) => {
  pause()
  trackPosition.value = 0
  goTo(index)
}

const navigateToPrev = () => {
  pause()
  const prevIndex = currentIndex.value === 0 
    ? data.value.length - 1 
    : currentIndex.value - 1
  goTo(prevIndex)
}

const navigateToNext = () => {
  pause()
  const nextIndex = currentIndex.value === data.value.length - 1 
    ? 0 
    : currentIndex.value + 1
  goTo(nextIndex)
}


import type { UseSwipeDirection } from '@vueuse/core'
const swipeTarget = ref()

const { lengthX } = useSwipe(
  swipeTarget,
  {
    passive: false,
    threshold: 50,
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
      if (direction === 'down' || direction === 'up' || direction === 'none') return
      if (lengthX.value < 0) navigateToPrev()
      else navigateToNext()
    },
  },
)

// Utility functions for slide positioning
function getRelativeIndex(index: number, currentIndex: number): number {
  const normalizedCurrentIndex = currentIndex % data.value.length
  
  let relativeIndex = index - normalizedCurrentIndex
  
  if (relativeIndex > data.value.length / 2) {
    relativeIndex -= data.value.length
  } else if (relativeIndex < -data.value.length / 2) {
    relativeIndex += data.value.length
  }
  
  return relativeIndex
}

function getPosClass(index: number, currentIndex: number) {
  const rel = getRelativeIndex(index, currentIndex)
  return rel === 0 ? 'current' : 
    rel === -1 ? 'prev' : 
    rel === -2 ? 'prev-oob' : 
    rel === 1 ? 'next' : 
    rel ? 'next-oob' : 
    ''
}

// Hover and preview handling
function handleSlideHover(index: number) {
  const rel = getRelativeIndex(index, currentIndex.value)
  
  trackPosition.value = rel === 1 ? -50 : 
    rel === -1 ? 50 : 
    0
}

function handleSlideHoverEnd() {
  trackPosition.value = 0
}

// Mouse tracking for custom pointer
const { x, y } = useMouse()

// Slide title computations
const prevSlideTitle = computed(() => {
  const prevIndex = currentIndex.value === 0 
    ? data.value.length - 1 
    : currentIndex.value - 1
  return (data.value[prevIndex] as HeroSlide).title
})

const nextSlideTitle = computed(() => {
  const nextIndex = currentIndex.value === data.value.length - 1 
    ? 0 
    : currentIndex.value + 1
  return (data.value[nextIndex] as HeroSlide).title
})

function handleSlideHoverPreview(isHovering: boolean, direction?: number) {
  if (isHovering) {
    if (direction === 1) {
      showNextPreview.value = true
      trackPosition.value = -50
    } else if (direction === -1) {
      showPrevPreview.value = true
      trackPosition.value = 50
    }
  } else {
    showPrevPreview.value = false
    showNextPreview.value = false
    trackPosition.value = 0
  }
}


const handleLink = (val: string) => {
  if (val.startsWith('#')) {
    const id = val.split('#')[1] as string
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    return
  }

  navigateTo(val, {
    external: true,
  })
}
</script>

<style lang="postcss">
.track {
  --skew: 8%;
  --hover-transform: translateX(0);

  /* Optimize transition with will-change for better performance */
  will-change: transform;
  transition: transform 0.3s ease-in-out;
  transform: var(--hover-transform);

  .slide {
    /* Combine multiple transitions for performance */
    transition: 
      transform 0.5s ease-in-out, 
      background-color 0.5s ease-in-out, 
      z-index 0.3s;
    
    transform: translateX(calc(var(--index) * 100% - (var(--index) * var(--skew))));
    z-index: 1;
    @apply absolute inset-0 overflow-hidden bg-primary-900/30;

    .media {
      /* Use will-change for opacity and filter */
      will-change: opacity, filter;
      transition: 
        opacity 0.5s ease-in-out, 
        filter 0.5s ease-in-out;
      opacity: 0;
    }

    .circle {
      /* Optimize circle gradient */
      opacity: 0;
      aspect-ratio: 1;
      background: radial-gradient(
        circle, 
        rgba(0, 0, 0, 0.6) 10%, 
        rgba(0, 0, 0, 0) 70%
      );
      border-radius: 50%;
      transition: opacity 0.3s ease-in;


      @apply absolute -bottom-[600px] w-[1200px] -left-[400px] lg:-bottom-[130%] md:w-[150%] md:-left-1/2;
    }

    /* Consolidated current slide styles */
    &.current {
      z-index: 6;
      background-color: white;

      .media {
        opacity: 0.7;
      }
      .circle {
        opacity: 1;
      }
      .slide-content {
        opacity: 1;
        transform: translateX(0)
      }
    }

    /* Simplified hover and adjacent slide styles */
    &.next,
    &.prev {
      cursor: pointer;
      
      .media {
        opacity: 0.4;
        filter: blur(4px);
      }
    }

    /* Combine hover states */
    &.hover-next,
    &.hover-prev {
      .media {
        transition: 
          opacity 0.2s ease-in, 
          filter 0.2s ease-in;
        filter: blur(0px);
        opacity: 1;
      }
    }

    /* Z-index optimization */
    &.next { z-index: 4; }
    &.prev { z-index: 5; }

    /* Simplified out-of-bounds styles */
    &.next-oob,
    &.prev-oob {
      .media {
        opacity: 0;
      }
    }
    &.next-oob { z-index: 2; }
    &.prev-oob { z-index: 3; }
  }

  /* Existing parallelogram and media styles remain the same */
  .parallelogram {
    @media screen and (min-width: 768px) {
      clip-path: polygon(var(--skew) 0, 100% 0, calc(100% - var(--skew)) 100%, 0% 100%);
    }
  }

  .media { 
    @apply absolute inset-0 w-full h-full object-cover;
  }

  .slide-content {
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.2s ease-in 0.4s, transform 0.2s ease-in 0.4s;
  }
}

.nav-panel {
  /* Performance and readability improvements */
  width: 120px;
  height: 100%;
  position: absolute;
  top: 0;
  
  /* Simplified gradient */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  width: 120px;
  cursor: none;
  @apply hidden sm:block target:ring-1 ring-offset-1 ring-primary;

  &:hover {
    opacity: 1;
  }

  /* Prev and Next panel specifics */
  &.prev {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &.next {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

.custom-pointer {
  transform: translate(-50%, -50%);
  @apply hidden sm:block;
}

.gradient-text {
  @apply bg-gradient-to-r from-primary-200 to-primary-300 inline text-transparent bg-clip-text
}

</style>