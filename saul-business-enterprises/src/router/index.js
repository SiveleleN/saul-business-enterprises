import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Team from '../views/TeamView.vue'
import contact from '../views/ContactView.vue'
import services from '../views/servicesView.vue'
import portfolio from '../views/PortfolioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Portfolio',
    name: 'portfolio',
    component: portfolio

  },
  {
    path: '/about',
    name: 'about',
    component: About

  },
  {
    path: '/team',
    name: 'team',
    component: Team

  },
  {
    path: '/services',
    name: 'services',
    component: services

  },
  {
    path: '/contact',
    name: 'contact',
    component: contact

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
