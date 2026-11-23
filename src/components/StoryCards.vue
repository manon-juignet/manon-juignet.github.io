<script setup>
// « En détail » : un bloc par paragraphe, numéroté.
defineProps({ items: { type: Array, required: true } })

const accents = ['bg-blush/45', 'bg-sand/45', 'bg-primary/15']
</script>

<template>
  <ol class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="(item, i) in items" :key="item.title" class="card relative overflow-hidden p-6">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full"
        :class="accents[i % accents.length]"
      ></div>
      <span
        class="relative grid h-10 w-10 place-items-center rounded-full font-display text-lg font-semibold text-title"
        :class="accents[i % accents.length]"
        aria-hidden="true"
      >
        {{ String(i + 1).padStart(2, '0') }}
      </span>
      <h3 class="relative mt-4 text-xl font-semibold">{{ item.title }}</h3>
      <p class="text-justify-md relative mt-2">{{ item.body }}</p>
    </li>
  </ol>
</template>
