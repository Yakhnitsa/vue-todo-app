import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locations/:id?',
    name: 'Locations',
    component: Locations
  },

  {
    path: '/people/:id?',
    name: 'People',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
