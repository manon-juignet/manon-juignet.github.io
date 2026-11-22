<script setup>
import { site, timeline, skills } from '../content'
import { asset } from '../utils/typo'
import AppIcon from '../components/AppIcon.vue'

const KINDS = {
  formation: { label: 'Formation', icon: 'school', dot: 'bg-sage text-tag-ink', badge: 'bg-perso text-perso-ink' },
  experience: { label: 'Expérience', icon: 'briefcase', dot: 'bg-peach text-pro-ink', badge: 'bg-pro text-pro-ink' },
}
const kind = (k) => KINDS[k] ?? KINDS.experience
</script>

<template>
  <div class="container-site pt-10 md:pt-16">
    <header class="max-w-2xl">
      <p class="eyebrow">Parcours</p>
      <h1 class="mt-1 text-4xl font-semibold sm:text-5xl">Formation et expériences</h1>
      <p v-if="site.parcoursIntro" class="mt-4 text-lg">{{ site.parcoursIntro }}</p>
    </header>

    <!-- Frise -->
    <ol class="relative ml-5 mt-12 max-w-3xl space-y-8 border-l-2 border-dashed border-line pl-8 sm:pl-10">
      <li v-for="(item, i) in timeline" :key="i" class="relative">
        <!-- Pastille centrée sur la ligne : padding de la liste + demi-pastille + demi-bordure -->
        <span
          class="absolute -left-[calc(3.25rem+1px)] top-5 grid h-10 w-10 place-items-center rounded-full ring-4 ring-page sm:-left-[calc(3.75rem+1px)]"
          :class="kind(item.kind).dot"
          aria-hidden="true"
        >
          <AppIcon :name="kind(item.kind).icon" />
        </span>

        <div class="card p-6">
          <div class="flex flex-wrap items-center gap-2 text-sm">
            <span class="rounded-full px-3 py-0.5 text-xs font-bold" :class="kind(item.kind).badge">
              {{ kind(item.kind).label }}
            </span>
            <span class="font-bold text-muted">{{ item.period }}</span>
          </div>
          <h2 class="mt-3 text-2xl font-semibold">{{ item.title }}</h2>
          <p class="text-muted">{{ item.place }}</p>
          <p v-if="item.description" class="text-justify-md mt-3">{{ item.description }}</p>
          <ul v-if="item.points?.length" class="mt-3 space-y-1.5">
            <li v-for="pt in item.points" :key="pt" class="flex gap-2">
              <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
              <span>{{ pt }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ol>

    <!-- Compétences -->
    <section class="mt-20" aria-labelledby="competences-titre">
      <p class="eyebrow">Compétences</p>
      <h2 id="competences-titre" class="mb-6 mt-1 text-3xl font-semibold sm:text-4xl">Ce que je sais faire</h2>
      <div class="grid gap-5 md:grid-cols-3">
        <div v-for="(group, i) in skills" :key="group.title" class="card relative overflow-hidden p-6">
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full"
            :class="['bg-peach/40', 'bg-sage/40', 'bg-primary/10'][i % 3]"
          ></div>
          <h3 class="relative text-xl font-semibold">{{ group.title }}</h3>
          <ul class="relative mt-4 flex flex-wrap gap-2">
            <li v-for="s in group.items" :key="s" class="rounded-md bg-tag px-2.5 py-1 text-sm font-bold text-tag-ink">
              {{ s }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CV -->
    <section class="mt-16">
      <div class="card flex flex-col items-start gap-4 border-pro bg-pro p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <div>
          <h2 class="text-2xl font-semibold">Mon CV</h2>
          <p class="mt-1 text-muted">Toutes ces informations sur une page, en PDF.</p>
        </div>
        <a v-if="site.cv" :href="asset(site.cv)" class="btn btn-primary" download>
          <AppIcon name="download" /> Télécharger le CV (PDF)
        </a>
        <span v-else class="btn" aria-disabled="true">CV bientôt disponible</span>
      </div>
    </section>
  </div>
</template>
