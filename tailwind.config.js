// Les couleurs sont définies une seule fois, en variables CSS, dans
// src/assets/styles.css. Ici on ne fait que les brancher dans Tailwind.
const role = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        page: role('page'),
        surface: role('surface'),
        ink: role('ink'),
        title: role('title'),
        muted: role('muted'),
        line: role('line'),
        primary: role('primary'),
        'on-primary': role('on-primary'),
        link: role('link'),
        tag: role('tag'),
        'tag-ink': role('tag-ink'),
        paper: role('paper'),
        peach: role('peach'),
        sage: role('sage'),
        pro: role('pro'),
        'pro-ink': role('pro-ink'),
        perso: role('perso'),
        'perso-ink': role('perso-ink'),
        cours: role('cours'),
        'cours-ink': role('cours-ink'),
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Atkinson Hyperlegible"', 'system-ui', 'sans-serif'],
      },
      height: {
        nav: 'var(--nav-h)',
      },
    },
  },
  plugins: [],
}
