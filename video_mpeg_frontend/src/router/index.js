import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import NewVueComponent from '../components/NewVueComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
