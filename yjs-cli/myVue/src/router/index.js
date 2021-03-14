import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/hhh',
      component: () => import(/* webpackChunkName: "hhh" */ '../views/Hhh.vue')
    },
    {
      path: '/other',
      component: () => import(/* webpackChunkName: "other" */ '../views/Other.vue')
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})