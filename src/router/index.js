import { createRouter, createWebHashHistory } from 'vue-router'

//路由规则
const routes = []

//创建路由实例
//2.0  new Vue.Router({})
//3.0  createRouter({})
const router = createRouter({
  //使用hash的路由模式
  history: createWebHashHistory(),
  //配置路由规则，写法和之前一样
  routes
})

export default router
