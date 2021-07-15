import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'normalize.css';
import antComponents from './components/ant-components'
import AppLayout from './layouts/AppLayout.vue'

let app = createApp(App)
app.use(router)
app.component('AppLayout', AppLayout)
antComponents(app)
app.mount('#app')
