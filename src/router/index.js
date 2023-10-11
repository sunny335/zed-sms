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
      ,
      meta: { title: 'SignUp' } 
    },
    {
      path: '/logIn',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue'),
      meta: { title: 'LogIn' } 
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue')
      ,
      meta: { title: 'Reset Password' } 
      
    },
    {
      path: '/confirm-email',
      name: 'ConfirmEmail',
      component: () => import('../views/ConfirmEmail.vue'),
      meta: { title: 'Confirm Email' } 
    },
    {
      path: '/reset-password-new',
      name: 'ResetPasswordNew',
      component: () => import('../views/ResetPasswordNew.vue'),
      meta: { title: 'Set New Password' } 
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment/Payment.vue'),
      meta: { title: 'Payment' } 
    },
    {
      path: '/payment-successful',
      name: 'Payment Successful',
      component: () => import('../views/Payment/PaymentSuccessful.vue'),
      meta: { title: 'Payment Successful' } 
    },
    {
      path: '/payment-failed', 
      name: 'Payment Failed',
      component: () => import('../views/Payment/PaymentFailed.vue')
      ,
      meta: { title: 'Payment Failed' } 
    },
    {
      path: '/transfer-successful',
      name: 'Transfer Successful',
      component: () => import('../views/Payment/TransferSuccessful.vue'),
      meta: { title: 'Transfer Successful' } 
    },
    {
      path: '/transfer-failed',
      name: 'Transfer Failed',
      component: () => import('../views/Payment/TransferFailed.vue'),
      meta: { title: 'Transfer Failed' } 
    },
    {
      path: '/top-up-successful', 
      name: 'Top Up Successful',
      component: () => import('../views/Payment/TopUpSuccessful.vue'),
      meta: { title: 'Top Up Successful' } 
    },
    {
      path: '/top-up-failed',
      name: 'Top Up Failed',
      component: () => import('../views/Payment/TopUpFailed.vue'),
      meta: { title: 'Top Up Failed' } 
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/About.vue'),
      meta: { title: 'About' } 
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: () => import('../views/PrivacyPolicy/PrivacyPolicy.vue'),
      meta: { title: 'Privacy Policy' } 
    },
    {
      path: '/terms-condition',
      name: 'Terms Condition',
      component: () => import('../views/TermsCondition/TermsCondition.vue'),
      meta: { title: 'Terms Condition' } 
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () => import('../views/ContactUs/ContactUs.vue'),
      meta: { title: 'Contact Us' } 
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('../views/Blog/Blogs.vue')
      ,
      meta: { title: 'Blog' } 
    },
    {
      path: '/blogs/:id',
      name: 'Blog',
      component: () => import('../views/Blog/Blog.vue'),
      meta: { title: 'Blog' } 
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: () => import('../views/Tutorial.vue'),
      meta: { title: 'Tutorial' } 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: { title: 'ZEDSMS - 404' } 
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/OurService.vue'),
      meta: { title: 'Our Service' } 
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard/Dashboard.vue'),
      children: [
        {
          path: '', 
          component: () => import('../views/Dashboard/DashboardHome.vue'),
           meta: { title: 'Dashboard Home' } 
        },
        {
          path: 'my-number',
          component: () => import('../views/Dashboard/Mynumber.vue'),
          meta: { title: 'My Number' } 
        }, 
        {
          path: 'manage-number',
          component: () => import('../views/Dashboard/ManageNumber.vue'),
          meta: { title: 'Manage Number' } 
        },
        {
          path: 'buy-number',
          component: () => import('../views/Dashboard/BuyNumber.vue'),
          meta: { title: 'Buy Number' } 
        },
        {
          path: 'transaction',
          component: () => import('../views/Dashboard/Transaction.vue'),
          meta: { title: 'Transaction' } 
        },
        {
          path: 'balance-transfer',
          component: () => import('../views/Dashboard/BalanceTransfer.vue'),
          meta: { title: 'Balance Transfer' } 
        },
        {
          path: 'topup-balance',
          component: () => import('../views/Dashboard/TopupBalance.vue'),
          meta: { title: 'TopUp Balance' } 
        },
        {
          path: 'appearance',
          component: () => import('../views/Dashboard/Appearance.vue'),
          meta: { title: 'Appearance' } 
        },
        {
          path: 'account-settings',
          component: () => import('../views/Dashboard/AccountSettings.vue'),
          meta: { title: 'Account Setting' } 
        },
      ],
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.hash) {
    return;
  }
  const pageTitle = to.meta.title || 'ZEDSMS'; // Use a default title if not specified in the route
  document.title = pageTitle; // Update the document's title
  window.scrollTo(0, 0);
  next();
});
export default router
