import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/new',
    name: 'NewProject',
    component: NewProject
  },
  {
    path: '/projects/edit/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
