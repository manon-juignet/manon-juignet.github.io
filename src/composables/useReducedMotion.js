import { onBeforeUnmount, onMounted, ref } from 'vue'

const QUERY = '(prefers-reduced-motion: reduce)'

/** Lecture ponctuelle (utilisable hors composant, ex. dans le router). */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.(QUERY).matches
}

/** Ref réactive : true si l'utilisateur a demandé de réduire les animations. */
export function useReducedMotion() {
  const reduced = ref(prefersReducedMotion())
  let mq = null
  const update = () => {
    reduced.value = mq.matches
  }

  onMounted(() => {
    mq = window.matchMedia(QUERY)
    update()
    mq.addEventListener('change', update)
  })
  onBeforeUnmount(() => mq?.removeEventListener('change', update))

  return reduced
}
