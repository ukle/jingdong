import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/HomeView.vue')
  },
  {
    path: '/shop/:id',
    name: 'ShopView',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/ShopView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginView.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import(/* webpackChunkName: "login" */ '../views/register/RegisterView.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const isLoginOrRegister = to.name === 'LoginView' || to.name === 'RegisterView'
  isLogin || isLoginOrRegister ? next() : next({ name: 'LoginView' })
})

export default router
