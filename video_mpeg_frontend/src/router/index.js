import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/Login'
import Register from '../components/Register'
import NewVueComponent from '../components/NewVueComponent'
// import NewVueComponent from '../components/NewVueComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewVueComponent',
      component: NewVueComponent
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
