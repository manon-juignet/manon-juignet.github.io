// Typographie française automatique : remplace l'espace ordinaire avant
// « : ; ! ? » » et après « « » par une espace insécable, pour éviter
// qu'un signe se retrouve seul en début de ligne.
// Manon n'a donc rien de spécial à taper dans les fichiers de données.
const NBSP = ' '

export function fr(text) {
  if (typeof text !== 'string') return text
  return text.replace(/[ \t]+([:;!?»])/g, `${NBSP}$1`).replace(/«[ \t]+/g, `«${NBSP}`)
}

/** Applique fr() à toutes les chaînes d'un objet ou tableau (récursif). */
export function frDeep(value) {
  if (typeof value === 'string') return fr(value)
  if (Array.isArray(value)) return value.map(frDeep)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, frDeep(v)]))
  }
  return value
}

/** Vrai si un texte est encore un contenu factice entre crochets. */
export function isPlaceholder(text) {
  return typeof text === 'string' && text.trim().startsWith('[')
}

/** Chemin d'un fichier de public/ (images, CV) adapté à l'URL du site. */
export function asset(path) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}
