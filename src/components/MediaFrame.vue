<script setup>
// Affiche une image { src, alt } ou, à défaut, un cadre « image à venir ».
import { asset } from '../utils/typo'

defineProps({
  image: { type: Object, default: null },
  label: { type: String, default: 'Image à venir' },
  eager: { type: Boolean, default: false },
})
</script>

<template>
  <img
    v-if="image?.src"
    :src="asset(image.src)"
    :alt="image.alt ?? ''"
    :loading="eager ? 'eager' : 'lazy'"
    class="h-full w-full object-cover"
  />
  <div v-else class="placeholder h-full w-full" role="img" :aria-label="label">
    <span aria-hidden="true">{{ label }}</span>
  </div>
</template>
