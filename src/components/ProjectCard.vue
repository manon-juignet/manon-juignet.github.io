<script setup>
import TypeBadge from './TypeBadge.vue'
import MediaFrame from './MediaFrame.vue'
import AppIcon from './AppIcon.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article
    class="card group relative flex flex-col overflow-hidden transition-transform duration-200 focus-within:-translate-y-1 hover:-translate-y-1"
  >
    <div class="aspect-[4/3] overflow-hidden border-b border-line p-3">
      <div class="h-full overflow-hidden rounded-2xl">
        <MediaFrame :image="project.image" />
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5">
      <div class="flex flex-wrap items-center gap-2 text-sm text-muted">
        <TypeBadge :type="project.type" />
        <span>{{ project.context }}</span>
      </div>

      <h3 class="text-xl font-semibold leading-snug">
        <RouterLink
          :to="`/projets/${project.slug}`"
          class="text-title no-underline after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
        >
          {{ project.title }}
        </RouterLink>
      </h3>

      <p class="text-[0.98rem]">{{ project.summary }}</p>

      <ul class="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Outils et méthodes">
        <li v-for="tag in project.tags" :key="tag" class="rounded-md bg-tag px-2 py-0.5 text-xs font-bold text-tag-ink">
          {{ tag }}
        </li>
      </ul>

      <p class="flex items-center gap-1 text-sm font-bold text-link" aria-hidden="true">
        Voir le projet <AppIcon name="arrow-right" class="transition-transform group-hover:translate-x-1" />
      </p>
    </div>
  </article>
</template>
