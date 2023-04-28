import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/style.css'
import '../src/assets/css/src/bootstrap/bootstrap.min.css'

createApp(App).use(router).mount('#app')
