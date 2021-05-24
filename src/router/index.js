import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alumnos from '@/components/Alumnos'
import Añadir from '@/components/Añadir'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/alumnos/:level',
      name: 'Alumnos',
      component: Alumnos
    },
    {
      path: '/anadir',
      name: 'Anadir',
      component: Añadir
    },
    {
      path: '/anadir/:id',
      name: 'Anadir',
      component: Añadir
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
