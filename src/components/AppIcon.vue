<script setup>
// Petites icônes au trait, décoratives (aria-hidden) : le texte voisin porte le sens.
defineProps({ name: { type: String, required: true } })

const paths = {
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
  mail: ['M3 6h18v12H3z', 'M3 7l9 6 9-6'],
  linkedin: ['M4 4h16v16H4z', 'M8 11v5', 'M8 8v.01', 'M12 16v-5', 'M12 13.5a2.5 2.5 0 0 1 5 0V16'],
  code: ['M8 8l-4 4 4 4', 'M16 8l4 4-4 4', 'M13.5 5l-3 14'],
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  'chevron-left': ['M15 5l-7 7 7 7'],
  'chevron-right': ['M9 5l7 7-7 7'],
  expand: ['M14 4h6v6', 'M10 20H4v-6', 'M20 4l-7 7', 'M4 20l7-7'],
  download: ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'],
  copy: ['M9 9h11v11H9z', 'M5 15H4V4h11v1'],
  check: ['M5 12l5 5 9-10'],
  school: ['M3 9l9-5 9 5-9 5-9-5z', 'M7 11.5V16c3 2 7 2 10 0v-4.5'],
  briefcase: ['M4 8h16v11H4z', 'M9 8V5h6v3', 'M4 13h16'],
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    width="1.15em"
    height="1.15em"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    class="shrink-0"
  >
    <path v-for="d in paths[name]" :key="d" :d="d" />
  </svg>
</template>
