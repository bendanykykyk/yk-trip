import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import '@/assets/css/index.less'

// 引入部分vant按需插件不能支持的组件的样式
import '@/plugins/vant.js'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
