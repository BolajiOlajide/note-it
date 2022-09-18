import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './reset.css'
import './style.css'

import App from './App.vue'
import Home from './pages/Home.vue'
import Note from './pages/Note.vue'
import NewNote from './pages/NewNote.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/note', component: NewNote, name: 'new-note' },
  { path: '/note/:id', component: Note, name: 'note' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
