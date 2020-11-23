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
import UpdatePet from '@/components/UpdatePet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/aboutUs',
    component: AboutUs
  },
  {
    path: '/privateoffice',
    name: 'PrivateOffice',
    component: PrivateOffice
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/log',
    component: Logining
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: Announcement
  },
  {
    path: '/postdetails/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/updatepet/:id',
    name: 'UpdatePet',
    component: UpdatePet
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
