import Vue from 'vue'
import Router from 'vue-router'
import {
  getUser
} from '../utils/auth';
Vue.use(Router)
const router = new Router({
  routes: [
    // 登录主页面
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
  
    // 主页home
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home')
    },
  
  ]
})
// 控制登录
// router.beforeEach((to, from, next) => {
//   const userInfo = getUser()
//   if (to.path == '/login' ||to.path =='/zhuce' || to.path =='/pwd') {
//     next()
//   } else {
//     if (!userInfo) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   }
// })
export default router