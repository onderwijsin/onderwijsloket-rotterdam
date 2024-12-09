<template>
  <UContainer ref="header" class="sticky top-0 transition-all duration-200 ease-in z-50">
    <nav class="flex justify-between items-center h-[2.75rem]">
      <Logo class="w-40" />
      <div class="flex items-center gap-3">
        <ul class="flex gap-3">
          <li>
            <UButton
              variant="ghost"
              color="gray"
              size="xs"
              icon="i-heroicons-light-bulb-16-solid"
              @click="scrollTo('ontdek')"
            >
              Ontdek het onderwijs
            </UButton>
          </li>
          <li>
            <UButton
              variant="ghost"
              color="gray"
              size="xs"
              icon="i-heroicons-bolt-16-solid"
              @click="scrollTo('ervaar')"
            >
              Ervaar het onderwijs
            </UButton>
          </li>
          <li>
            <UButton
              variant="soft"
              size="xs"
              icon="i-heroicons-chat-bubble-left-right-16-solid"
              @click="scrollTo('ervaar')"
            >
              Hulp en advies
            </UButton>
          </li>
        </ul>
        <ThemeToggle v-if="useDarkMode" />
        <FontToggle v-if="useDyslexicFont" />
      </div>
    </nav>
  </UContainer>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const { useDarkMode, useDyslexicFont } = useAppConfig().settings.ui;

</script>

<style>

</style>
