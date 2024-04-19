import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'



 
const app:any = createApp(App)

axios.defaults.withCredentials = true
 

app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
  })
app.mount('#app')

