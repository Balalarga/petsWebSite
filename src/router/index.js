import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Info from '@/components/Info'
import AboutUs from '@/components/AboutUs'
import PrivateOffice from '@/views/PrivateOffice'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Info',
    component: Info
  },
  {
    path: '/AboutUs',
    component: AboutUs
  },
  {
    path: '/PrivateOffice',
    component: PrivateOffice
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
