import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from "@/views/BookManage"
import BookAdd from "@/views/BookAdd";
import BookUpdate from "@/views/BookUpdate";
import Index from "@/views/Index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图书管理',
    show: true,  //show属性表示当前路由要不要被vue遍历
    component: Index,
    redirect:'/bookManage',
    children:[
      {
        path: '/bookManage',
        name: '查询图书',
        component: BookManage
      },
      {
        path: '/addBook',
        name: '添加图书',
        component: BookAdd
      }
    ]
  },
  {
    path: '/update',
    component: BookUpdate,
    show:false
  },
  // {
  //   path:'/book',
  //   component: Book
  // }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
