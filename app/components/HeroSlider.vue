<template>
  <div class="slider relative w-screen h-[100dvh] overflow-hidden">
    <!-- Previous and Next Hover Areas -->
    <div 
      class="nav-panel prev absolute left-0 h-full w-[120px] z-20" 
      :class="{ 'hover-active': showPrevPreview }"
      @mouseenter="handleSlideHoverPreview(true, -1)"
      @mouseleave="handleSlideHoverPreview(false)"
      @click="navigateToPrev"
    />
    <div 
      class="nav-panel next absolute right-0 h-full w-[120px] z-20" 
      :class="{ 'hover-active': showNextPreview }"
      @mouseenter="handleSlideHoverPreview(true, 1)"
      @mouseleave="handleSlideHoverPreview(false)"
      @click="navigateToNext"
    />

    <!-- Custom Pointer -->
    <div 
      v-if="showPrevPreview || showNextPreview" 
      class="custom-pointer fixed z-50 pointer-events-none"
      :style="{ 
        left: `${x - 16}px`, 
        top: `${y - 16}px` 
      }"
    >
      <div class="preview-container fade-in">
          <div v-if="showPrevPreview" class="flex gap-4 items-center">
            <div class="shrink-0 h-8 w-8 rounded-full grid place-items-center border border-1 bg-white/40 shadow-lg">
              <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5" />
            </div>
            <span class="font-bold text-white whitespace-nowrap">{{ prevSlideTitle }}</span>
          </div>
          <div v-else-if="showNextPreview" class="flex gap-4 items-center">
            <span class="font-bold text-white whitespace-nowrap">{{ nextSlideTitle }}</span>
            <div class="shrink-0 h-8 w-8 rounded-full grid place-items-center border border-1 bg-white/40 shadow-lg">
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </div>
          </div>
      </div>
    </div>


    <div class="track absolute inset-0" :style="`--hover-transform: translateX(${trackPosition}px);`">
      <div 
        v-for="(slide, index) in data" 
        :key="index"
        class="slide parallelogram flex items-end"
        :style="`--index: ${getRelativeIndex(index, currentIndex)};`"
        :class="[
          getPosClass(index, currentIndex),
        ]"
        @mouseenter="handleSlideHover(index)"
        @mouseleave="handleSlideHoverEnd"
        @click="getSlide(index)"
      >
        <NuxtImg
          v-if="slide.type === 'image'"
          :src="slide.media"
          width="1920"
          height="1080"
          sizes="480px md:600px lg:1080px xl:1280px"
          class="media"
          :preload="index === currentIndex"
          :alt="slide.heading"
        />
        <HeroVideo
          v-else 
          class="media"
          :media="slide.media"
          :heading="slide.heading"
          :is-active="index === currentIndex"
        />
       
        <div class="absolute circle -bottom-[120%] -left-1/2" />
        <div class="slide-content z-10 text-white px-32 py-24 relative max-w-full md:max-w-5xl">
          <h1 class="text-5xl lg:text-8xl">{{ slide.heading }}</h1>
          <div class="text-lg" v-html="slide.description"></div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script lang="ts" setup>

// TODO
// - fix flashy state of prev slide. (something to do with .circle and opacity??!) Not sure what causes it. But removing .circle div also prevents the issue from occurring., We do however need this div :)
// - fix .slide.next:hover and .slide.prev.hover since this pseudo states are no longer triggered since implementing Previous and Next Hover Areas

import type { HeroSlide } from '~/types';

const props = defineProps<{
  slides: Array<HeroSlide>
  autoplay?: number
}>()

const data = computed(() => {
  if (props.slides.length > 4) return props.slides
  return [
    ...props.slides,
    ...props.slides,
  ]
})

const currentIndex = ref(0)

const { pause } = useIntervalFn(() => {
  goTo(data.value.length - 1 === currentIndex.value ? 0 : currentIndex.value + 1)
}, props.autoplay)

if (!props.autoplay) {
  pause()
}


const goTo = (index: number) => {
  currentIndex.value = index
} 
const getSlide = (index: number) => {
  pause()
  trackPosition.value = 0
  goTo(index)
}

function getRelativeIndex(index: number, currentIndex: number): number {
  const normalizedCurrentIndex = currentIndex % data.value.length;
  
  if (index === normalizedCurrentIndex) {
    return 0;
  }
  
  let relativeIndex = index - normalizedCurrentIndex;
  
  if (relativeIndex > data.value.length / 2) {
    relativeIndex -= data.value.length;
  } else if (relativeIndex < -data.value.length / 2) {
    relativeIndex += data.value.length;
  }
  
  return relativeIndex;
}

function getPosClass(index: number, currentIndex: number) {
  const rel = getRelativeIndex(index, currentIndex)
  return rel === 0 ? 'current ' : 
    rel === -1 ? 'prev' : 
    rel === -2 ? 'prev-oob' : 
    rel === 1 ? 'next' : 
    rel ? 'next-oob' : 
    ''
}

const trackPosition = ref(0)

function handleSlideHover(index: number) {
  const rel = getRelativeIndex(index, currentIndex.value)
  
  if (rel === 1) {
    // Hovering on next slide
    trackPosition.value = -50
  } else if (rel === -1) {
    // Hovering on previous slide
    trackPosition.value = 50
  } else {
    trackPosition.value = 0
  }
}

function handleSlideHoverEnd() {
  trackPosition.value = 0
}

const showPrevPreview = ref(false)
const showNextPreview = ref(false)
const { x, y } = useMouse()

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
      // Hovering on next slide
      showNextPreview.value = true
      trackPosition.value = -50
    } else if (direction === -1) {
      // Hovering on previous slide
      showPrevPreview.value = true
      trackPosition.value = 50
    }
  } else {
    // Reset preview and track position
    showPrevPreview.value = false
    showNextPreview.value = false
    trackPosition.value = 0
  }
}

// Navigation methods
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

</script>

<style lang="postcss">
.track {
  --skew: 8%;
  --hover-transform: translateX(0);

  transition: transform 0.3s ease-in-out;
  transform: var(--hover-transform);

  .slide {
    transition: transform 0.5s ease-in, background-color 0.5s ease-in;
    transform: translateX(calc(var(--index) * 100% - (var(--index) * var(--skew))));
    z-index: 1;
    background-color: black;
    @apply absolute inset-0 overflow-hidden;

    .media {
      transition: opacity 0.5s ease-in-out, filter 0.5s ease-in;
      opacity: 0;
    }

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
        transform: translateX(0px)
      }
    }
    &.next {
      cursor: pointer;
      z-index: 4;
      .media {
        opacity: 0.4;
        filter: blur(4px)
      }
      &:hover {
        .media {
          transition: opacity 0.2s ease-in, filter 0.2s ease-in;
          filter: blur(0px);
          opacity: 0.7
        }
      }
    }
    
    &.prev {
      z-index: 5;
      .media {
        opacity: 0.4;
        filter: blur(4px)
      }
      &:hover {
        .media {
          transition: opacity 0.2s ease-in, filter 0.2s ease-in;
          filter: blur(0px);
          opacity: 0.7
        }
      }
    }

    &.next-oob {
      z-index: 2;
      .media {
        opacity: 0;
      }
    }
    &.prev-oob {
      z-index: 3;
      .media {
        opacity: 0;
      }
    }
  }

  .parallelogram {
    clip-path: polygon(var(--skew) 0, 100% 0, calc(100% - var(--skew)) 100%, 0% 100%);
  }

  .circle {
    opacity: 0;
    width: 150%;
    aspect-ratio: 1;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    transition: opacity 0.5s ease-in;
  }

  .media { 
    @apply absolute inset-0 w-full h-full object-cover;
  }

  .slide-content {
      opacity: 0;
      transform: translateX(20px);
      transition: .2s ease-in 0.4s
    }
}

.nav-panel {

  width: 200px;
  height: 100%;
  cursor: none;
  top: 0px;
  position: absolute;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }

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
}

.preview-container {
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: 0;
  transform: scale(0.9);
}

.preview-container.fade-in {
  opacity: 1;
  transform: scale(1);
}
</style>