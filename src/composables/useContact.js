import { ref } from 'vue'

// État partagé : la fenêtre Contact peut être ouverte depuis n'importe où.
const isOpen = ref(false)

export function useContact() {
  return {
    isOpen,
    openContact: () => (isOpen.value = true),
    closeContact: () => (isOpen.value = false),
  }
}
