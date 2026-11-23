<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { findProject, neighbours } from '../content'
import TypeBadge from '../components/TypeBadge.vue'
import MediaFrame from '../components/MediaFrame.vue'
import StoryCards from '../components/StoryCards.vue'
import ProjectGallery from '../components/ProjectGallery.vue'
import AppIcon from '../components/AppIcon.vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const project = computed(() => findProject(route.params.slug))
const nav = computed(() => neighbours(route.params.slug))
const details = computed(() => project.value?.details ?? {})
const gallery = ref(null)
const hasGallery = computed(() => project.value?.gallery?.length || project.value?.video?.src)
</script>

<template>
  <article v-if="project" class="pt-8 md:pt-12">
    <!-- En-tête -->
    <header class="container-site">
      <RouterLink to="/projets" class="inline-flex items-center gap-1 text-sm font-bold">
        <AppIcon name="arrow-left" /> Tous les projets
      </RouterLink>

      <div class="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
        <TypeBadge :type="project.type" />
        <span
          v-if="project.upcoming"
          class="inline-flex items-center rounded-full border border-line px-3 py-0.5 text-xs font-bold text-title"
          >À venir</span
        >
        <span>{{ project.context }}</span>
      </div>
      <h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{{ project.title }}</h1>
      <p class="mt-4 max-w-2xl text-lg">{{ project.summary }}</p>
      <p v-if="project.team" class="mt-2 text-muted"><span class="font-bold">Équipe :</span> {{ project.team }}</p>

      <div class="mt-6 flex flex-wrap items-center gap-3">
        <ul class="flex flex-wrap gap-1.5" aria-label="Outils et méthodes">
          <li v-for="tag in project.tags" :key="tag" class="rounded-md bg-tag px-2.5 py-1 text-sm font-bold text-tag-ink">
            {{ tag }}
          </li>
        </ul>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn px-4 py-1.5 text-sm">
          <AppIcon name="code" /> Voir le code
          <span class="sr-only">(nouvel onglet)</span>
        </a>
      </div>
    </header>

    <!-- Image principale : un clic l'agrandit dans la galerie -->
    <div class="container-site mt-10">
      <div class="aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface p-3">
        <button
          v-if="project.image?.src && project.gallery?.length"
          type="button"
          class="block h-full w-full overflow-hidden rounded-2xl"
          @click="gallery?.openAt(project.image.src)"
        >
          <MediaFrame :image="project.image" eager contain />
          <span class="sr-only">Agrandir l’image</span>
        </button>
        <div v-else class="h-full overflow-hidden rounded-2xl">
          <MediaFrame :image="project.image" eager contain />
        </div>
      </div>
    </div>

    <!-- Galerie : vidéo, photos puis schémas -->
    <section v-if="hasGallery" class="container-site mt-6" aria-label="Galerie">
      <ProjectGallery ref="gallery" :images="project.gallery ?? []" :video="project.video" />
    </section>

    <!-- En détail -->
    <section v-if="details.story?.length" class="container-site mt-16" aria-labelledby="detail-titre">
      <p class="eyebrow">Le projet</p>
      <h2 id="detail-titre" class="mb-6 mt-1 text-3xl font-semibold">En détail</h2>
      <StoryCards :items="details.story" />
    </section>

    <!-- Gros chiffres -->
    <section v-if="details.stats?.length" class="container-site mt-12" aria-label="Chiffres clés">
      <dl class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="s in details.stats" :key="s.label" class="card flex flex-col-reverse gap-1 border-pro bg-pro p-6">
          <dt class="text-muted">{{ s.label }}</dt>
          <dd class="font-display text-4xl font-semibold text-title">{{ s.value }}</dd>
        </div>
      </dl>
    </section>

    <!-- Ce que j'en retiens -->
    <section v-if="details.lesson" class="container-site mt-12">
      <div class="relative overflow-hidden rounded-3xl bg-perso p-8 md:p-10">
        <div aria-hidden="true" class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sage/50"></div>
        <h2 class="eyebrow relative font-sans text-tag-ink">Ce que j’en retiens</h2>
        <p class="relative mt-3 max-w-3xl font-display text-2xl leading-snug text-title">{{ details.lesson }}</p>
      </div>
    </section>

    <!-- Précédent / suivant -->
    <nav
      v-if="nav.previous || nav.next"
      class="container-site mt-16 grid gap-4 sm:grid-cols-2"
      aria-label="Autres projets"
    >
      <RouterLink
        v-if="nav.previous"
        :to="`/projets/${nav.previous.slug}`"
        class="card group flex flex-col gap-1 p-5 no-underline hover:border-primary"
      >
        <span class="flex items-center gap-1 text-sm text-muted"><AppIcon name="arrow-left" /> Projet précédent</span>
        <span class="font-display text-lg font-semibold text-title group-hover:text-primary">{{ nav.previous.title }}</span>
      </RouterLink>
      <span v-else class="hidden sm:block"></span>
      <RouterLink
        v-if="nav.next"
        :to="`/projets/${nav.next.slug}`"
        class="card group flex flex-col items-end gap-1 p-5 text-right no-underline hover:border-primary"
      >
        <span class="flex items-center gap-1 text-sm text-muted">Projet suivant <AppIcon name="arrow-right" /></span>
        <span class="font-display text-lg font-semibold text-title group-hover:text-primary">{{ nav.next.title }}</span>
      </RouterLink>
    </nav>
  </article>

  <NotFound v-else />
</template>
