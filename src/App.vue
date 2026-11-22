<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import ContactModal from './components/ContactModal.vue'
import DecoBackground from './components/DecoBackground.vue'
import { useReducedMotion } from './composables/useReducedMotion'

const reduced = useReducedMotion()

// Lien d'évitement : un bouton (et non un lien #ancre, qui changerait la
// route en mode hash) qui place le focus clavier sur le contenu principal.
function skipToContent() {
  document.getElementById('contenu')?.focus()
}
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <DecoBackground />

    <button
      type="button"
      class="btn btn-primary sr-only left-4 top-3 z-50 focus:not-sr-only focus:fixed"
      @click="skipToContent"
    >
      Aller au contenu
    </button>

    <NavBar />

    <main id="contenu" tabindex="-1" class="flex-1 focus:outline-none">
      <RouterView v-slot="{ Component, route }">
        <Transition :name="reduced ? 'none' : 'fade'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
    <ContactModal />
  </div>
</template>
