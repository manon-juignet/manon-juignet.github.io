<script setup>
// Affiche une image { src, alt, kind, w, h } ou, à défaut, un cadre « image à venir ».
// kind 'schema' : jamais rogné (object-contain sur fond blanc) ; sinon object-cover.
import { computed } from 'vue'
import { asset } from '../utils/typo'

const props = defineProps({
  image: { type: Object, default: null },
  label: { type: String, default: 'Image à venir' },
  eager: { type: Boolean, default: false },
  // Force l'image entière (pas de rognage), même pour une photo
  contain: { type: Boolean, default: false },
})

const isSchema = computed(() => props.image?.kind === 'schema')
const fit = computed(() => (isSchema.value || props.contain ? 'object-contain' : 'object-cover'))
</script>

<template>
  <img
    v-if="image?.src"
    :src="asset(image.src)"
    :alt="image.alt ?? ''"
    :width="image.w"
    :height="image.h"
    :loading="eager ? 'eager' : 'lazy'"
    decoding="async"
    class="h-full w-full"
    :class="[fit, isSchema ? 'bg-paper p-2' : '']"
  />
  <div v-else class="placeholder h-full w-full" role="img" :aria-label="label">
    <span aria-hidden="true">{{ label }}</span>
  </div>
</template>
