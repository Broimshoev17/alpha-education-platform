import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Students from '@/views/Students.vue'
import Flows from '@/views/Flows.vue'
import Finance from '@/views/Finance.vue'
import StudentProfile from '@/views/StudentProfile.vue'




const routes = [
  { path: '/',     name: 'Home',     component: Home },
  { path: '/students', name: 'Students', component: Students },
  { path: '/flows',    name: 'Flows',    component: Flows },
  { path: '/finance',  name: 'Finance',  component: Finance },
  { path: '/students/:id', name: 'StudentProfile', component: StudentProfile },
  { path: '/finance/payments', name: 'StudentPayments', component: () => import('@/views/StudentPayments.vue') },
  { path: '/finance/reports', name: 'Reports', component: () => import('@/views/Reports.vue') },
  { path: '/finance/overview', name: 'FinanceOverview', component: () => import('@/views/FinanceOverview.vue') },

 
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

