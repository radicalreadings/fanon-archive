<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    sources: string[]
    alt?: string
    /** How long each cover is shown before cycling to the next, in ms. */
    intervalMs?: number
  }>(),
  { alt: '', intervalMs: 3000 },
)

const index = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (props.sources.length > 1) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % props.sources.length
    }, props.intervalMs)
  }
})
onUnmounted(() => {
  clearInterval(timer)
})

// Resolves against Vite's configured base (currently "/") so cover paths
// still work if the site is ever served from a subpath again.
const currentSrc = computed(() =>
  props.sources.length
    ? `${import.meta.env.BASE_URL}${props.sources[index.value].replace(/^\/+/, '')}`
    : undefined,
)
</script>

<template>
  <div class="cover-frame">
    <Transition name="cover-fade">
      <img v-if="currentSrc" :key="currentSrc" :src="currentSrc" :alt="alt" class="cover-image" loading="lazy" />
    </Transition>
  </div>
</template>

<style scoped>
/* Fixed aspect ratio on the frame itself (not on the image) so the box
   never resizes as images with different native dimensions cycle through. */
.cover-frame {
  position: relative;
  aspect-ratio: 0.68;
  border: var(--border-accent);
  overflow: hidden;
}
.cover-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cover-fade-enter-active,
.cover-fade-leave-active {
  transition: opacity 0.6s ease;
}
.cover-fade-enter-from,
.cover-fade-leave-to {
  opacity: 0;
}
</style>
