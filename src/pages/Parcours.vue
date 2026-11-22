<script setup>
import { site, timeline, alternance, competences, tools } from '../content'
import { asset } from '../utils/typo'
import AppIcon from '../components/AppIcon.vue'

const KINDS = {
  formation: { label: 'Formation', icon: 'school', dot: 'bg-sage text-tag-ink', badge: 'bg-perso text-perso-ink' },
  experience: { label: 'Expérience', icon: 'briefcase', dot: 'bg-peach text-pro-ink', badge: 'bg-pro text-pro-ink' },
}
const kind = (k) => KINDS[k] ?? KINDS.experience

const accents = ['bg-peach/45', 'bg-sage/45', 'bg-primary/15']
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
          <p v-if="item.place" class="text-muted">{{ item.place }}</p>
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

    <!-- Alternance : missions -->
    <section v-if="alternance?.missions?.length" class="mt-20" aria-labelledby="alternance-titre">
      <p class="eyebrow">{{ alternance.place }}</p>
      <h2 id="alternance-titre" class="mt-1 text-3xl font-semibold sm:text-4xl">{{ alternance.title }}</h2>
      <p v-if="alternance.intro" class="mt-3 text-lg">{{ alternance.intro }}</p>

      <figure v-if="alternance.video?.src" class="mt-6 max-w-3xl overflow-hidden rounded-3xl border border-line bg-surface p-3">
        <video
          :src="asset(alternance.video.src)"
          :poster="alternance.video.poster ? asset(alternance.video.poster) : undefined"
          controls
          preload="none"
          playsinline
          class="aspect-video w-full rounded-2xl bg-black"
        >
          Votre navigateur ne peut pas lire cette vidéo.
        </video>
        <figcaption v-if="alternance.video.title" class="px-2 pt-2 text-sm text-muted">{{ alternance.video.title }}</figcaption>
      </figure>

      <ul class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="(m, i) in alternance.missions" :key="m.title" class="card relative overflow-hidden p-6">
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full"
            :class="accents[i % accents.length]"
          ></div>
          <h3 class="relative text-xl font-semibold">{{ m.title }}</h3>
          <p class="text-justify-md relative mt-2">{{ m.body }}</p>
        </li>
      </ul>
    </section>

    <!-- Compétences du BUT -->
    <section v-if="competences.length" class="mt-20" aria-labelledby="competences-titre">
      <p class="eyebrow">Compétences</p>
      <h2 id="competences-titre" class="mt-1 text-3xl font-semibold sm:text-4xl">Les 4 compétences du BUT GEII</h2>

      <div class="mt-6 grid gap-5 sm:grid-cols-2">
        <article v-for="(c, i) in competences" :key="c.name" class="card relative overflow-hidden p-6">
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full"
            :class="accents[i % accents.length]"
          ></div>
          <div class="relative flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="text-2xl font-semibold">{{ c.name }}</h3>
            <span class="rounded-full bg-cours px-3 py-0.5 text-xs font-bold text-cours-ink">{{ c.level }}</span>
          </div>
          <p class="relative mt-1 text-muted">{{ c.title }}</p>
          <ul class="relative mt-4 space-y-1.5">
            <li v-for="it in c.items" :key="it" class="flex gap-2">
              <AppIcon name="check" class="mt-1 text-tag-ink" />
              <span>{{ it }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Outils -->
    <section v-if="tools.length" class="mt-16" aria-labelledby="outils-titre">
      <h2 id="outils-titre" class="text-2xl font-semibold sm:text-3xl">Outils et logiciels</h2>
      <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in tools" :key="group.title" class="card p-5">
          <h3 class="font-sans text-sm font-bold uppercase tracking-[0.1em] text-muted">{{ group.title }}</h3>
          <ul class="mt-3 flex flex-wrap gap-2">
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
