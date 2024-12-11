<template>
  <div class="media-container">
    <img
      v-if="!videoLoaded"
      :src="getPlaceholderImageUrl(media)"
      width="1280"
      height="768"
      sizes="480px sm:600px md:768px lg:1024px xl:1280px"
      class="placeholder-image media"
      :preload="preload"
      :alt="alt"
    />
    <video
      ref="elem"
      class="media-item"
      muted
      loop
      @canplay="onVideoCanPlay"
    >
      <!-- Portrait variations -->
      <source
        v-for="source in portraitSources"
        :key="source.src"
        :src="source.src"
        :type="source.type"
        :media="source.media"
      />

      <!-- Default landscape variations -->
      <source
        v-for="source in landscapeSources"
        :key="source.src"
        :src="source.src"
        :type="source.type"
        :media="source.media"
      />
    </video>
  </div>
</template>

<script lang="ts" setup>

interface VideoSource {
  src: string
  type: string
  media: string
}

const props = defineProps<{
  media: string
  isActive: boolean
  alt?: string
  preload?: boolean
}>()

const videoLoaded = ref(false)

function getPlaceholderImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/onderwijsin/video/upload/c_fill,w_1920,h_1080,q_auto,f_jpg,so_0/${publicId}.jpg`
}

function getVideoUrl(publicId: string, width: number, height: number | null, format: 'mp4' | 'webm'): string {
  const heightParam = height ? `,h_${height}` : ''
  return `https://res.cloudinary.com/onderwijsin/video/upload/c_fill,w_${width}${heightParam},q_auto,f_${format}/${publicId}.${format}`
}

function onVideoCanPlay() {
  videoLoaded.value = true
}

const portraitSources: VideoSource[] = [
  { src: getVideoUrl(props.media, 480, 720, 'webm'), type: 'video/webm', media: '(orientation: portrait) and (max-width: 600px)' },
  { src: getVideoUrl(props.media, 480, 720, 'mp4'), type: 'video/mp4', media: '(orientation: portrait) and (max-width: 600px)' },
  { src: getVideoUrl(props.media, 600, 900, 'webm'), type: 'video/webm', media: '(orientation: portrait) and (min-width: 601px) and (max-width: 768px)' },
  { src: getVideoUrl(props.media, 600, 900, 'mp4'), type: 'video/mp4', media: '(orientation: portrait) and (min-width: 601px) and (max-width: 768px)' },
  { src: getVideoUrl(props.media, 768, 1152, 'webm'), type: 'video/webm', media: '(orientation: portrait) and (min-width: 769px) and (max-width: 1080px)' },
  { src: getVideoUrl(props.media, 768, 1152, 'mp4'), type: 'video/mp4', media: '(orientation: portrait) and (min-width: 769px) and (max-width: 1080px)' },
  { src: getVideoUrl(props.media, 1080, 1620, 'webm'), type: 'video/webm', media: '(orientation: portrait) and (min-width: 1081px) and (max-width: 1280px)' },
  { src: getVideoUrl(props.media, 1080, 1620, 'mp4'), type: 'video/mp4', media: '(orientation: portrait) and (min-width: 1081px) and (max-width: 1280px)' },
  { src: getVideoUrl(props.media, 1280, 1920, 'webm'), type: 'video/webm', media: '(orientation: portrait) and (min-width: 1281px)' },
  { src: getVideoUrl(props.media, 1280, 1920, 'mp4'), type: 'video/mp4', media: '(orientation: portrait) and (min-width: 1281px)' }
]

const landscapeSources: VideoSource[] = [
  { src: getVideoUrl(props.media, 480, null, 'webm'), type: 'video/webm', media: '(max-width: 600px)' },
  { src: getVideoUrl(props.media, 480, null, 'mp4'), type: 'video/mp4', media: '(max-width: 600px)' },
  { src: getVideoUrl(props.media, 600, null, 'webm'), type: 'video/webm', media: '(min-width: 601px) and (max-width: 768px)' },
  { src: getVideoUrl(props.media, 600, null, 'mp4'), type: 'video/mp4', media: '(min-width: 601px) and (max-width: 768px)' },
  { src: getVideoUrl(props.media, 768, null, 'webm'), type: 'video/webm', media: '(min-width: 769px) and (max-width: 1080px)' },
  { src: getVideoUrl(props.media, 768, null, 'mp4'), type: 'video/mp4', media: '(min-width: 769px) and (max-width: 1080px)' },
  { src: getVideoUrl(props.media, 1080, null, 'webm'), type: 'video/webm', media: '(min-width: 1081px) and (max-width: 1280px)' },
  { src: getVideoUrl(props.media, 1080, null, 'mp4'), type: 'video/mp4', media: '(min-width: 1081px) and (max-width: 1280px)' },
  { src: getVideoUrl(props.media, 1280, null, 'webm'), type: 'video/webm', media: '(min-width: 1281px)' },
  { src: getVideoUrl(props.media, 1280, null, 'mp4'), type: 'video/mp4', media: '(min-width: 1281px)' }
]

const elem: Ref<HTMLVideoElement | null> = ref(null)

onMounted(() => {
  watch(() => props.isActive, (newVal) => {
    if (newVal) elem.value?.play()
    else elem.value?.pause()
  }, {
    immediate: true
  })
})
</script>

<style scoped>
.media-container {
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>