import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use( VueRouter )

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    // If props set to true, any params will be passed to Home
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue' ),
  },
]

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
} )

export default router
