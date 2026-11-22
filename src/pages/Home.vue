<script setup>
import { site, featuredProjects } from '../content'
import { useContact } from '../composables/useContact'
import ProjectCard from '../components/ProjectCard.vue'
import MediaFrame from '../components/MediaFrame.vue'
import AppIcon from '../components/AppIcon.vue'

const { openContact } = useContact()
</script>

<template>
  <div>
    <!-- En-tête : présentation -->
    <section class="container-site grid items-center gap-12 pb-12 pt-10 md:grid-cols-[1.25fr_1fr] md:pb-20 md:pt-16">
      <div>
        <p
          v-if="site.availability"
          class="inline-flex items-center gap-2 rounded-full bg-sage/35 px-4 py-1.5 text-sm font-bold text-tag-ink"
        >
          <span class="h-2 w-2 shrink-0 rounded-full bg-tag-ink" aria-hidden="true"></span>
          {{ site.availability }}
        </p>

        <h1 class="mt-5 text-5xl font-semibold leading-[1.05] sm:text-6xl">{{ site.name }}</h1>
        <p v-if="site.role" class="mt-3 font-display text-xl text-primary sm:text-2xl">{{ site.role }}</p>
        <p class="mt-5 max-w-xl text-lg">{{ site.tagline }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="btn btn-primary" @click="openContact">
            <AppIcon name="mail" /> Me contacter
          </button>
          <RouterLink to="/parcours" class="btn">
            Voir mon parcours <AppIcon name="arrow-right" />
          </RouterLink>
        </div>
      </div>

      <!-- Photo dans une forme organique, avec des formes douces derrière -->
      <div class="relative mx-auto w-64 sm:w-80">
        <div aria-hidden="true" class="absolute -left-6 -top-6 h-full w-full rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-peach/60"></div>
        <div aria-hidden="true" class="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-sage/60"></div>
        <div class="relative aspect-square overflow-hidden rounded-[42%_58%_55%_45%/50%_42%_58%_50%] border-4 border-surface bg-surface">
          <MediaFrame :image="site.photo" label="Photo à venir" eager />
        </div>
      </div>
    </section>

    <!-- En bref -->
    <section v-if="site.highlights?.length" class="container-site" aria-labelledby="en-bref">
      <h2 id="en-bref" class="sr-only">En bref</h2>
      <ul class="grid gap-4" :class="site.highlights.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'">
        <li
          v-for="(h, i) in site.highlights"
          :key="h.label"
          class="card flex flex-col gap-1 p-5"
          :class="['border-t-4', ['border-t-primary', 'border-t-sage', 'border-t-peach'][i % 3]]"
        >
          <span class="eyebrow">{{ h.label }}</span>
          <span class="font-bold text-title">{{ h.value }}</span>
        </li>
      </ul>
    </section>

    <!-- Projets mis en avant -->
    <section class="container-site mt-20" aria-labelledby="projets-titre">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="eyebrow">Projets</p>
          <h2 id="projets-titre" class="mt-1 text-3xl font-semibold sm:text-4xl">Quelques réalisations</h2>
        </div>
        <RouterLink to="/projets" class="inline-flex items-center gap-1 font-bold">
          Tous les projets <AppIcon name="arrow-right" />
        </RouterLink>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in featuredProjects" :key="p.slug" :project="p" />
      </div>
    </section>
  </div>
</template>
