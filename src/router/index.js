import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book',
      name: 'book-create',
      component: UserCreate
    },
    {
      path: '/book/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/book/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/books',
      name: 'books',
      component: UserIndex
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    

  ]
})
