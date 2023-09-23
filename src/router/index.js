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
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment/Payment.vue')
    },
    {
      path: '/payment-successful',
      name: 'Payment Successful',
      component: () => import('../views/Payment/PaymentSuccessful.vue')
    },
    {
      path: '/payment-failed', 
      name: 'Payment Failed',
      component: () => import('../views/Payment/PaymentFailed.vue')
    },
    {
      path: '/transfer-successful',
      name: 'Transfer Successful',
      component: () => import('../views/Payment/TransferSuccessful.vue')
    },
    {
      path: '/transfer-failed',
      name: 'Transfer Failed',
      component: () => import('../views/Payment/TransferFailed.vue')
    },
    {
      path: '/top-up-successful',
      name: 'Top Up Successful',
      component: () => import('../views/Payment/TopUpSuccessful.vue')
    },
    {
      path: '/top-up-failed',
      name: 'Top Up Failed',
      component: () => import('../views/Payment/TopUpFailed.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard/Dashboard.vue'), // Import the Dashboard component
      children: [
        {
          path: '', // Default child route, e.g., '/dashboard'
          component: () => import('../views/Dashboard/DashboardHome.vue'), // Create this component
        },
        {
          path: 'my-number',
          component: () => import('../views/Dashboard/Mynumber.vue'), // Create this component
        },
        {
          path: 'manage-number',
          component: () => import('../views/Dashboard/ManageNumber.vue'), // Create this component
        },
        {
          path: 'buy-number',
          component: () => import('../views/Dashboard/BuyNumber.vue'), // Create this component
        },
        {
          path: 'transaction',
          component: () => import('../views/Dashboard/Transaction.vue'), // Create this component
        },
        {
          path: 'balance-transfer',
          component: () => import('../views/Dashboard/BalanceTransfer.vue'), // Create this component
        },
        {
          path: 'topup-balance',
          component: () => import('../views/Dashboard/TopupBalance.vue'), // Create this component
        },
        {
          path: 'appearance',
          component: () => import('../views/Dashboard/Appearance.vue'), // Create this component
        },
        {
          path: 'account-settings',
          component: () => import('../views/Dashboard/AccountSettings.vue'), // Create this component
        },
        // Add more nested routes for other dashboard pages
      ],
    },
  ]
})

export default router
