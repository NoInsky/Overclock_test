import { createRouter, createWebHistory } from "vue-router"

import Parts from "@/components/Parts.vue"
import Used from "@/components/Used.vue"
import Peri from "@/components/Peripherals.vue"
import BoardDetail from '@/views/board/BoardDetail.vue'
import Main from "@/components/Main.vue"
import Login from "@/components/Login.vue"
import Join from "@/components/Join.vue"

const routes = [
    {path:"/",name:"Main", component: Main}, 
    {path:"/parts",name:"Parts", component: Parts}, 
    {path:"/used",name:"Used", component: Used},
    {path:"/peri",name:"Peri", component: Peri},
    {path:"/board/detail",name:"BoardDetail", component: BoardDetail},
    {path:"/login",name:"Login", component: Login}, 
    {path:"/join",name:"Join", component: Join}, 
  ]
  
  const router = createRouter({
    history: createWebHistory(), routes
  })
  
  export default router
