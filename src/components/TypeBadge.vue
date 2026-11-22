<script setup>
import { computed } from 'vue'

const props = defineProps({ type: { type: String, required: true } })

const TYPES = {
  pro: { label: 'Pro', classes: 'bg-pro text-pro-ink' },
  perso: { label: 'Perso', classes: 'bg-perso text-perso-ink' },
  cours: { label: 'Cours', classes: 'bg-cours text-cours-ink' },
}

const badge = computed(() => TYPES[props.type] ?? { label: props.type, classes: 'bg-tag text-tag-ink' })
</script>

<template>
  <span class="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold" :class="badge.classes">
    <span class="sr-only">Type de projet : </span>{{ badge.label }}
  </span>
</template>
