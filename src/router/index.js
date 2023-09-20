import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/logIn',
      name: 'LogIn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue')
    },
    {
      path: '/confirm-email',
      name: 'ConfirmEmail',
      component: () => import('../views/ConfirmEmail.vue')
    },
    {
      path: '/reset-password-new',
      name: 'ResetPasswordNew',
      component: () => import('../views/ResetPasswordNew.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
