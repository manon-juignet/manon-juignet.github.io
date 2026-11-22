<script setup>
import { computed, ref } from 'vue'
import { site, projects } from '../content'
import ProjectCard from '../components/ProjectCard.vue'

const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'pro', label: 'Pro' },
  { value: 'cours', label: 'Cours' },
  { value: 'perso', label: 'Perso' },
]
// N'affiche que les filtres qui correspondent à au moins un projet
const available = computed(() =>
  filters.filter((f) => f.value === 'all' || projects.some((p) => p.type === f.value)),
)

const active = ref('all')
const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.type === active.value),
)
</script>

<template>
  <div class="container-site pt-10 md:pt-16">
    <header class="max-w-2xl">
      <p class="eyebrow">Projets</p>
      <h1 class="mt-1 text-4xl font-semibold sm:text-5xl">Mes projets</h1>
      <p v-if="site.projectsIntro" class="mt-4 text-lg">{{ site.projectsIntro }}</p>
    </header>

    <div v-if="available.length > 2" class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer par type de projet">
      <button
        v-for="f in available"
        :key="f.value"
        type="button"
        class="rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors"
        :class="active === f.value ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-title hover:border-primary'"
        :aria-pressed="active === f.value"
        @click="active = f.value"
      >
        {{ f.label }}
      </button>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in visible" :key="p.slug" :project="p" />
    </div>
  </div>
</template>
