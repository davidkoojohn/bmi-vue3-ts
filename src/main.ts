import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'normalize.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

let app = createApp(App)
app.use(router)

console.log(app)
app.use(Antd);
app.mount('#app')
