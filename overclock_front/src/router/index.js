import { createRouter, createWebHistory } from "vue-router"

import Parts from "@/components/Parts.vue"
import Used from "@/components/Used.vue"
import Peri from "@/components/Peripherals.vue"
import Used from "@/components/Posts/Used.vue"
import Main from "@/components/Main.vue"
import Login from "@/components/Login.vue"
import Join from "@/components/Join.vue"

const routes = [
    {path:"/",name:"Main", component: Main}, 
    {path:"/parts",name:"Parts", component: Parts}, 
    {path:"/peri",name:"Peri", component: Peri}, 
    {path:"/used",name:"Used", component: Used}, 
    {path:"/login",name:"Login", component: Login}, 
    {path:"/join",name:"Join", component: Join}, 
  ]
  
  const router = createRouter({
    history: createWebHistory(), routes
  })
  
  export default router
