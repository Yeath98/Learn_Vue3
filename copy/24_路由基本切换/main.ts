// 引入createApp函数和根组件App.vue
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 将路由器挂载到应用实例上
//创建应用实例
const app = createApp(App)
//使用路由器
app.use(router)
//挂载整个应用到app容器中
app.mount('#app')

// 创建应用实例并挂载到id为'app'的DOM元素上
//createApp(App).mount('#app')