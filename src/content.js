// Point d'entrée unique du contenu pour les composants.
// Manon : tu n'as pas besoin de toucher ce fichier, modifie plutôt src/data/.
import { frDeep } from './utils/typo'
import siteData from './data/site'
import projectsData from './data/projects'
import { timeline as timelineData, skills as skillsData } from './data/parcours'

export const site = frDeep(siteData)
export const projects = frDeep(projectsData)
export const timeline = frDeep(timelineData)
export const skills = frDeep(skillsData)

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured - b.featured)

export function findProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export function neighbours(slug) {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    previous: i > 0 ? projects[i - 1] : null,
    next: i >= 0 && i < projects.length - 1 ? projects[i + 1] : null,
  }
}
