import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'normalize.css';
import antComponents from './components/ant-components'

let app = createApp(App)
app.use(router)
antComponents(app)
app.mount('#app')
