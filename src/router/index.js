import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
  import(
    /* webpackChunkName: 'home', webpackPrefetch: true */ '@/views/Home.vue'
  )
const Lecture = () =>
  import(
    /* webpackChunkName: 'home', webpackPrefetch: true */ '@/views/Lecture.vue'
  )

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Lecture',
    name: 'create-home',
    component: Lecture
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
