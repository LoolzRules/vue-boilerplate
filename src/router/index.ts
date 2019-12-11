import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

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
    // but they will not be present in url
    props: true,
    meta: {
      title: 'views.Home.title',
    },
  },
  {
    path: '/about',
    name: 'about',
    // Lazy component loading
    component: () => import( '../views/About.vue' ),
    meta: {
      title: 'views.About.title',
    },
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: 'views.NotFound.title',
    },
  },
]

const router = new VueRouter( {
  mode: 'history',
  routes,
} )

export default router
