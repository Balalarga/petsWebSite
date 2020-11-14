import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Info from '@/components/Info'
import AboutUs from '@/components/AboutUs'
import PrivateOffice from '@/components/PrivateOffice'
import Registration from '@/components/aut/registration'
import Logining from '@/components/aut/logining'
import Announcement from '@/components/Announcement'
import PostDetails from '@/components/PostDetails'

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
    name: 'PrivateOffice',
    component: PrivateOffice
  },
  {
    path: '/Registration',
    component: Registration
  },
  {
    path: '/log',
    component: Logining
  },
  {
    path: '/Announcement/:id',
    name: 'Announcement',
    component: Announcement
  },
  {
    path: '/PostDetails/:id',
    name: 'PostDetails',
    component: PostDetails
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
