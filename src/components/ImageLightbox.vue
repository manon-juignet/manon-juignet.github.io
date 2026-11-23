<script setup>
// Agrandissement plein écran d'une image, avec <dialog> natif :
// Échap ferme, le focus reste dans la boîte et revient au déclencheur.
// Flèches gauche / droite : image précédente / suivante.
import { ref, computed, watch, nextTick } from 'vue'
import { asset } from '../utils/typo'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  images: { type: Array, required: true },
  // Index de l'image ouverte, ou null quand la boîte est fermée
  index: { type: Number, default: null },
})
const emit = defineEmits(['update:index'])

const dialog = ref(null)
const zoomed = ref(false)
const closeBtn = ref(null)
let opener = null

const current = computed(() => (props.index == null ? null : props.images[props.index]))
const many = computed(() => props.images.length > 1)

watch(
  () => props.index,
  async (i, before) => {
    zoomed.value = false
    const el = dialog.value
    if (!el) return
    if (i != null && before == null) {
      opener = document.activeElement
      el.showModal()
      document.documentElement.style.overflow = 'hidden'
      await nextTick()
      closeBtn.value?.focus()
    } else if (i == null && el.open) {
      el.close()
    }
  },
)

function close() {
  emit('update:index', null)
}
function onClose() {
  document.documentElement.style.overflow = ''
  if (props.index != null) emit('update:index', null)
  opener?.focus?.()
  opener = null
}
function go(step) {
  const n = props.images.length
  emit('update:index', (props.index + step + n) % n)
}
function onKey(e) {
  if (!many.value) return
  if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
}
// Clic sur le fond (hors de l'image et des boutons) : fermeture
function onBackdrop(e) {
  if (e.target === e.currentTarget || e.target.dataset.backdrop !== undefined) close()
}
</script>

<template>
  <dialog
    ref="dialog"
    class="lightbox"
    :aria-label="current ? `Image agrandie : ${current.caption ?? current.alt}` : 'Image agrandie'"
    @close="onClose"
    @cancel.prevent="close"
    @keydown="onKey"
    @click="onBackdrop"
  >
    <div v-if="current" class="flex h-full w-full flex-col" data-backdrop>
      <div class="flex items-center justify-between gap-3 p-3 text-page sm:p-4" data-backdrop>
        <p v-if="many" class="text-sm font-bold" aria-live="polite">{{ index + 1 }} / {{ images.length }}</p>
        <span v-else></span>
        <button ref="closeBtn" type="button" class="lightbox-btn" @click="close">
          <AppIcon name="close" /><span class="sr-only">Fermer</span>
        </button>
      </div>

      <figure class="flex min-h-0 flex-1 flex-col items-center gap-3 px-2 pb-4 sm:px-16" data-backdrop>
        <div
          class="flex min-h-0 w-full flex-1"
          :class="zoomed ? 'overflow-auto' : 'items-center justify-center'"
          data-backdrop
        >
          <button
            type="button"
            class="m-auto block shrink-0 rounded-lg"
            :class="zoomed ? 'cursor-zoom-out' : 'max-h-full max-w-full cursor-zoom-in'"
            :aria-pressed="zoomed"
            @click="zoomed = !zoomed"
          >
            <img
              :src="asset(current.src)"
              :alt="current.alt ?? ''"
              :width="current.w"
              :height="current.h"
              class="block rounded-lg"
              :class="[
                zoomed ? 'max-w-none' : 'max-h-[calc(100dvh-9rem)] w-auto max-w-full object-contain',
                current.kind === 'schema' ? 'bg-paper p-1 sm:p-2' : '',
              ]"
            />
            <span class="sr-only">{{ zoomed ? 'Ajuster à l’écran' : 'Afficher en taille réelle' }}</span>
          </button>
        </div>
        <figcaption v-if="current.caption" class="max-w-3xl text-center text-page">
          {{ current.caption }}
          <span class="mt-1 block text-xs opacity-80" aria-hidden="true">
            <span class="[@media(hover:hover)]:hidden">Touchez</span><span class="hidden [@media(hover:hover)]:inline">Cliquez sur</span>
            {{ zoomed ? 'l’image pour l’ajuster à l’écran' : 'l’image pour l’afficher en taille réelle' }}
          </span>
        </figcaption>
      </figure>

      <template v-if="many">
        <button type="button" class="lightbox-btn lightbox-nav left-2 sm:left-4" @click="go(-1)">
          <AppIcon name="chevron-left" /><span class="sr-only">Image précédente</span>
        </button>
        <button type="button" class="lightbox-btn lightbox-nav right-2 sm:right-4" @click="go(1)">
          <AppIcon name="chevron-right" /><span class="sr-only">Image suivante</span>
        </button>
      </template>
    </div>
  </dialog>
</template>
