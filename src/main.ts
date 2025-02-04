import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

app.use(
    createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { top: 0, behavior: 'smooth' } // Défilement fluide vers le haut
        }
    })
)

app.mount('#app')