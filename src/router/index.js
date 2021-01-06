import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from "@/views/Book";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import PageThree from "@/views/PageThree";
import PageFour from "@/views/PageFour";
import Index from "@/views/Index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'router导航1',
    component: Index,
    redirect:'/page1',
    children:[
      {
        path: '/page1',
        name: '页面1',
        component: PageOne
      },
      {
        path: '/page2',
        name: '页面2',
        component: PageTwo
      }
    ]
  },
  {
    path: '/nav',
    name: 'router导航2',
    component: Index,
    children:[
      {
        path: '/page3',
        name: '页面3',
        component: PageThree
      },
      {
        path: '/page4',
        name: '页面4',
        component: PageFour
      }
    ]
  },
  {
    path:'/book',
    component: Book
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
