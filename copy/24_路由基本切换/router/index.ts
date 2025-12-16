// 创建一个路由器，并暴露出区

//1.引入创建路由器的方法createRouter
import { createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'


//2.创建路由器

/**
 * 我的路径是这样的http://localhost:5173/#/news
 * 在#/后面的路径，才是路由器匹配的路径
 * 比如：#/news  -> /news
 * 
 */
const router = createRouter({
    history: createWebHashHistory(),//路由器的工作模式
    //配置路由规则
    routes:[
        {path:'/',component:Home},
        {path:'/news',component:News},
        {path:'/about',component:About}
]
})

//3.暴露出路由器
export default router