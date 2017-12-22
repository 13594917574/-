import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../pages/Home/home.vue')
const select = () => import('../pages/Select/select.vue')
const mypets = () => import('../pages/Mypets/mypets.vue')
const shopcart = () => import('../pages/Shopcart/shopcart.vue')
const goods = () => import('../pages/Select/goods.vue')
const brands = () => import('../pages/Select/brand.vue')





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/select',
      component: select,
      children: [
        {
          path: '/select',
          redirect: '/select/goods'
        },
        {
          path: 'goods',
          component: goods
        },
        {
          path: 'brands',
          component: brands
        }
      ]
    },
    {
      path: '/mypets',
      component: mypets
    },
    {
      path: '/shopcart',
      component: shopcart
    }
  ]
})
