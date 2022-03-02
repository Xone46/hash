import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Client from '../views/Client.vue'
import Admin from '../views/Admin.vue'
import DashClient from '../views/DashClient.vue'
import DashAdmin from '../views/DashAdmin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gthconsult',
    component: Home
  },
  {
    path: '/solutions',
    component: Home
  },
  {
    path: '/contacter',
    component: Home
  },
  {
    path: '/prestation',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/dashclient',
    name: 'DashClient',
    component: DashClient
  },

  {
    path: '/dashadmin',
    name: 'DashAdmin',
    component: DashAdmin
  },
]

const router = new VueRouter({
  routes
})

export default router
