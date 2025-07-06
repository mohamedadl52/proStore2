import { createRouter, createWebHistory } from 'vue-router'

// صفحات المستخدم
import Home from '../views/HoMe.vue'
import Starlink from '../views/StarlinkPage.vue'
import Login from '../views/loGin.vue'
import Signup from '../views/signUp.vue'
import Profile from '../views/proFile.vue'
import Whous from '../views/howUs.vue'
import Contact from '../views/contactUs.vue'
import Tagdem from '../views/tagdemElec.vue'

// صفحات الأدمن
import Admin from '../views/admin/AdminPanel.vue'
import Dashboard from '../views/admin/AdminDashboard.vue'
import Users from '../views/admin/AdminUsers.vue'
import Orders from '../views/admin/AdminOrders.vue'

import test from '../views/testImage.vue'
// إعداد التوجيه
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/starlink', name: 'Starlink', component: Starlink },
    { path: '/tagdem', name: 'Tagdem', component: Tagdem },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/admin', name: 'Admin', component: Admin },
    { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/admin/users', name: 'Users', component: Users },
    { path: '/admin/orders', name: 'Orders', component: Orders },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/whous', name: 'Whous', component: Whous } , 
    { path: '/test', name: 'test', component: test } 
  ]
})

export default router
