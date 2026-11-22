import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import { site, findProject } from '../content'
import { prefersReducedMotion } from '../composables/useReducedMotion'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: null } },
  {
    path: '/projets',
    name: 'projects',
    component: () => import('../pages/Projects.vue'),
    meta: { title: 'Projets' },
  },
  {
    path: '/projets/:slug',
    name: 'project',
    component: () => import('../pages/ProjectDetail.vue'),
    meta: { title: 'Projet' },
  },
  {
    path: '/parcours',
    name: 'parcours',
    component: () => import('../pages/Parcours.vue'),
    meta: { title: 'Parcours' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Page introuvable' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: prefersReducedMotion() ? 'auto' : 'instant' }
  },
})

// Titre de l'onglet
router.afterEach((to) => {
  let title = to.meta.title
  if (to.name === 'project') title = findProject(to.params.slug)?.title ?? 'Projet introuvable'
  document.title = title ? `${title} · ${site.name}` : `${site.name} · Portfolio`
})

export default router
