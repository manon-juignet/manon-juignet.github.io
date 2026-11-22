<script setup>
import { computed, ref } from 'vue'
import { site, projects } from '../content'
import ProjectCard from '../components/ProjectCard.vue'

// Filtres construits à partir du champ `level` des projets (BUT 1, BUT 2…)
const levels = computed(() =>
  [...new Set(projects.map((p) => p.level).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'fr')),
)
const filters = computed(() => [{ value: 'all', label: 'Tous' }, ...levels.value.map((l) => ({ value: l, label: l }))])

const active = ref('all')
const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.level === active.value),
)
const count = (value) => (value === 'all' ? projects.length : projects.filter((p) => p.level === value).length)
</script>

<template>
  <div class="container-site pt-10 md:pt-16">
    <header class="max-w-2xl">
      <p class="eyebrow">Projets</p>
      <h1 class="mt-1 text-4xl font-semibold sm:text-5xl">Mes projets</h1>
      <p v-if="site.projectsIntro" class="mt-4 text-lg">{{ site.projectsIntro }}</p>
    </header>

    <div v-if="levels.length > 1" class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer par année">
      <button
        v-for="f in filters"
        :key="f.value"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors"
        :class="active === f.value ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-title hover:border-primary'"
        :aria-pressed="active === f.value"
        @click="active = f.value"
      >
        {{ f.label }}
        <span
          class="rounded-full px-1.5 text-xs"
          :class="active === f.value ? 'bg-surface text-primary' : 'bg-tag text-tag-ink'"
        >
          {{ count(f.value) }}
        </span>
      </button>
    </div>

    <p class="sr-only" aria-live="polite">{{ visible.length }} projets affichés</p>

    <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in visible" :key="p.slug" :project="p" />
    </div>
  </div>
</template>
