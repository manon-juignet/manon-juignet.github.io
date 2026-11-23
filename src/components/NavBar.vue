<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../content'
import { useContact } from '../composables/useContact'

const route = useRoute()
const { openContact } = useContact()

const initials = computed(() =>
  site.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)

const links = [
  { to: '/', label: 'Accueil', mobile: false },
  { to: '/projets', label: 'Projets', mobile: true },
  { to: '/parcours', label: 'Parcours', mobile: true },
]

const isActive = (to) =>
  to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(to + '/')
</script>

<template>
  <header class="sticky top-0 z-40 h-nav border-b border-line/70 bg-page/90 backdrop-blur-md">
    <nav class="container-site flex h-full items-center justify-between gap-2" aria-label="Navigation principale">
      <RouterLink
        to="/"
        class="flex items-center gap-2.5 font-display text-lg font-semibold text-title no-underline"
      >
        <span
          aria-hidden="true"
          class="grid h-9 w-9 place-items-center rounded-full bg-primary font-sans text-sm font-bold text-on-primary"
        >
          {{ initials }}
        </span>
        <span class="hidden md:inline">{{ site.name }}</span>
        <span class="sr-only md:hidden">{{ site.name }}, accueil</span>
      </RouterLink>

      <ul class="flex items-center gap-0.5 text-sm sm:gap-1 sm:text-base">
        <li v-for="link in links" :key="link.to" :class="link.mobile ? '' : 'hidden sm:block'">
          <RouterLink
            :to="link.to"
            class="rounded-full px-2.5 py-1.5 font-bold no-underline transition-colors sm:px-3"
            :class="isActive(link.to) ? 'bg-blush/45 text-title' : 'text-ink hover:bg-blush/25'"
            :aria-current="route.path === link.to ? 'page' : undefined"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li class="ml-1">
          <button type="button" class="btn btn-primary px-4 py-1.5 text-sm sm:text-base" @click="openContact">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
