<script setup>
// Galerie d'un projet : vidéo éventuelle en tête, puis photos et schémas.
// Photo : rognée dans la grille. Schéma : jamais rogné, fond blanc ;
// un schéma large (format paysage) prend toute la ligne.
// Clic sur une image : agrandissement (ImageLightbox).
import { ref } from 'vue'
import { asset } from '../utils/typo'
import MediaFrame from './MediaFrame.vue'
import ImageLightbox from './ImageLightbox.vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  video: { type: Object, default: null },
})

const open = ref(null)
const isWide = (img) => img.kind === 'schema' && img.w && img.h && img.w / img.h >= 1.4
const ratio = (img) => (img.w && img.h ? `${img.w} / ${img.h}` : '4 / 3')

defineExpose({ openAt: (src) => { const i = props.images.findIndex((g) => g.src === src); open.value = i >= 0 ? i : 0 } })
</script>

<template>
  <div>
    <figure v-if="video?.src" class="card mb-4 overflow-hidden p-2">
      <video
        :src="asset(video.src)"
        :poster="video.poster ? asset(video.poster) : undefined"
        controls
        preload="none"
        playsinline
        class="aspect-video w-full rounded-2xl bg-title"
      >
        Votre navigateur ne peut pas lire cette vidéo.
      </video>
      <figcaption v-if="video.caption" class="px-2 pb-1 pt-2 text-sm text-muted">{{ video.caption }}</figcaption>
    </figure>

    <ul v-if="images.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(img, i) in images" :key="img.src" :class="isWide(img) ? 'sm:col-span-2 lg:col-span-3' : ''">
        <figure class="card flex h-full flex-col overflow-hidden p-2">
          <button
            type="button"
            class="group relative block w-full overflow-hidden rounded-2xl"
            :class="img.kind === 'schema' ? 'border border-line' : ''"
            :style="isWide(img) ? { aspectRatio: ratio(img) } : null"
            @click="open = i"
          >
            <div :class="isWide(img) ? 'h-full' : 'aspect-[4/3]'">
              <MediaFrame :image="img" />
            </div>
            <span
              class="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-surface/90 text-title shadow-sm transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <AppIcon name="expand" />
            </span>
            <span class="sr-only">Agrandir l’image</span>
          </button>
          <figcaption v-if="img.caption" class="px-2 pb-1 pt-2 text-sm text-muted">{{ img.caption }}</figcaption>
        </figure>
      </li>
    </ul>

    <ImageLightbox v-model:index="open" :images="images" />
  </div>
</template>
