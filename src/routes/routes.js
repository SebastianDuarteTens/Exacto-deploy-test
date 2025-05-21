import { createRouter, createWebHashHistory } from "vue-router"
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../components/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage }
    ]
  }
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})