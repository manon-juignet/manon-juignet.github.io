<script setup>
import { site } from '../content'
import { useContact } from '../composables/useContact'

const { openContact } = useContact()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 border-t border-line bg-surface/70">
    <div class="container-site flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} {{ site.name }}</p>
      <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <li><RouterLink to="/projets">Projets</RouterLink></li>
        <li><RouterLink to="/parcours">Parcours</RouterLink></li>
        <li>
          <button type="button" class="text-link underline underline-offset-[3px] hover:decoration-2" @click="openContact">
            Contact
          </button>
        </li>
      </ul>
    </div>
  </footer>
</template>
