import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Students from '@/views/Students.vue'
import Flows from '@/views/Flows.vue'
import Finance from '@/views/Finance.vue'
import StudentProfile from '@/views/StudentProfile.vue'
import Autorization from '@/views/Autorization.vue'
import Verification from '@/views/Verification.vue'
import StudentPaymentCalendar from '@/views/StudentPaymentCalendar.vue'


const routes = [
  { path: '/',     name: 'Home',     component: Home },
  { path: '/students', name: 'Students', component: Students },
  { path: '/flows',    name: 'Flows',    component: Flows },
  { path: '/finance',  name: 'Finance',  component: Finance },
  { path: '/students/:id', name: 'StudentProfile', component: StudentProfile },
  { path: '/finance/payments', name: 'StudentPayments', component: () => import('@/views/StudentPayments.vue') },
  { path: '/finance/reports', name: 'Reports', component: () => import('@/views/Reports.vue') },
  { path: '/finance/reports/total-revenue', component: () => import('@/views/TotalRevenue.vue') },
  { path: '/finance/reports/debts', component: () => import ('@/views/Debts.vue') },
  { path: '/finance/reports/student-funding', name: 'StudentFunding', component: () => import('@/views/StudentFunding.vue') },
  { path: '/login', name: 'Autorization', component: Autorization },
  { path: '/verification', name: 'Verification', component: Verification },
  {
        path: '/payments/:id/calendar', // /finance/payments/42/calendar
        name: 'StudentPaymentCalendar',
        component: StudentPaymentCalendar,
        props: true
      },
      

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Глобальный навигейшн-гард
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')
  const publicPages = ['Autorization', 'Verification'] // по именам маршрутов

  if (!isAuthenticated && !publicPages.includes(to.name as string)) {
    return next('/login')
  }

  next()
})




