import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
  import(
    /* webpackChunkName: 'home', webpackPrefetch: true */ '@/views/Home.vue'
  )
const Todo = () =>
  import(
    /* webpackChunkName: 'home', webpackPrefetch: true */ '@/views/Todo.vue'
  )

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'create-home',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
