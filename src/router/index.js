import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'
import TrainingPage from '@/pages/TrainingPage'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/training',
    name: 'training',
    component: TrainingPage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/training/:slug',
    name: 'trainingday',
    component: () => import('../components/TrainingDay.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
