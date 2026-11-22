<script setup>
import { computed, ref, watch } from 'vue'
import { site } from '../content'
import { isPlaceholder } from '../utils/typo'
import { useContact } from '../composables/useContact'
import AppIcon from './AppIcon.vue'

const { isOpen, closeContact } = useContact()
const dialog = ref(null)
const copied = ref(false)

watch(isOpen, (open) => {
  const d = dialog.value
  if (!d) return
  if (open && !d.open) {
    copied.value = false
    d.showModal()
  } else if (!open && d.open) {
    d.close()
  }
})

// Clic sur le fond assombri (en dehors de la boîte) : on ferme
function onDialogClick(event) {
  if (event.target === dialog.value) closeContact()
}

const emailReady = computed(() => site.email && !isPlaceholder(site.email))

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email)
    copied.value = true
  } catch {
    copied.value = false
  }
}

const links = computed(() => [
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin', url: site.linkedin },
  { key: 'github', label: 'GitHub', icon: 'code', url: site.github },
])
</script>

<template>
  <dialog
    ref="dialog"
    class="contact-dialog w-[min(92vw,30rem)] rounded-3xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-ink/50"
    aria-labelledby="contact-title"
    @close="closeContact"
    @click="onDialogClick"
  >
    <div class="relative overflow-hidden p-6 sm:p-8">
      <div aria-hidden="true" class="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-peach/40"></div>

      <div class="relative flex items-start justify-between gap-4">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title" class="mt-1 text-3xl font-semibold">Écrivez-moi</h2>
        </div>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border-2 border-line bg-surface text-title hover:border-primary hover:text-primary"
          aria-label="Fermer la fenêtre Contact"
          @click="closeContact"
        >
          <AppIcon name="close" />
        </button>
      </div>

      <ul class="relative mt-6 space-y-3">
        <li class="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-page/60 p-4">
          <span class="grid h-10 w-10 place-items-center rounded-full bg-sage/40 text-tag-ink"><AppIcon name="mail" /></span>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-muted">E-mail</p>
            <a v-if="emailReady" :href="`mailto:${site.email}`" class="break-all font-bold">{{ site.email }}</a>
            <p v-else class="font-bold text-muted">{{ site.email || '[E-mail à ajouter]' }}</p>
          </div>
          <button v-if="emailReady" type="button" class="btn px-3 py-1.5 text-sm" @click="copyEmail">
            <AppIcon :name="copied ? 'check' : 'copy'" />
            {{ copied ? 'Copié' : 'Copier' }}
          </button>
        </li>

        <li v-for="l in links" :key="l.key" class="flex items-center gap-3 rounded-2xl border border-line bg-page/60 p-4">
          <span class="grid h-10 w-10 place-items-center rounded-full bg-peach/45 text-pro-ink"><AppIcon :name="l.icon" /></span>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-muted">{{ l.label }}</p>
            <a v-if="l.url" :href="l.url" target="_blank" rel="noopener" class="inline-flex items-center gap-1 font-bold">
              Voir le profil {{ l.label }}
              <AppIcon name="external" />
              <span class="sr-only">(nouvel onglet)</span>
            </a>
            <p v-else class="font-bold text-muted">[Lien {{ l.label }} à ajouter]</p>
          </div>
        </li>
      </ul>

      <p class="sr-only" aria-live="polite">{{ copied ? 'Adresse e-mail copiée' : '' }}</p>
    </div>
  </dialog>
</template>

<style scoped>
.contact-dialog[open] {
  animation: pop 0.22s ease-out;
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
}
</style>
