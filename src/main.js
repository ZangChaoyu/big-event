import './assets/main.scss'

import router from '@/router'
import locale from 'element-plus/dist/locale/zh-cn.js'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'


//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'

const app = createApp(App)
const pinia = createPinia()
const persist = createPersistedState()


pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale})


app.mount('#app')
