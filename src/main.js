import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/css/style.css';
import '../src/assets/css/src/bootstrap/bootstrap.min.css';
// import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
// app.use(Toast);
app.mount('#app');