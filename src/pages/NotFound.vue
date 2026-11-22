<script setup>
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <section class="container-site flex flex-col items-center py-20 text-center md:py-28">
    <div class="relative" aria-hidden="true">
      <div class="absolute inset-0 -z-10 scale-125 rounded-full bg-peach/40"></div>
      <p class="px-6 font-display text-8xl font-semibold text-primary/80">404</p>
    </div>
    <h1 class="mt-8 text-4xl font-semibold">Page introuvable</h1>
    <p class="mt-3 max-w-md text-lg">Cette page n’existe pas ou a changé d’adresse.</p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <RouterLink to="/" class="btn btn-primary"><AppIcon name="arrow-left" /> Retour à l’accueil</RouterLink>
      <RouterLink to="/projets" class="btn">Voir les projets</RouterLink>
    </div>
  </section>
</template>
