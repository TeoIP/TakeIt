import { createRouter, createWebHistory } from 'vue-router'
import  Main  from "./pages/Main.vue";
import  About  from "./pages/About.vue";


const routes = [
   { path: '/', component: Main },
   { path: '/About', component: About },
]

const router = createRouter({
   routes,
   history: createWebHistory()
})

export default router;