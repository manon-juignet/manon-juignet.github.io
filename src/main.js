import { createApp } from 'vue'

import '@fontsource-variable/fraunces'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/400-italic.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import './assets/styles.css'

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
