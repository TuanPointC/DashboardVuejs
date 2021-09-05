import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//import store from './store'
import { store } from '@/store/index'
import installElementPlus from './plugins/element'
import i18n from './plugins/i18n'
import './element-variables.scss'
import "@mdi/font/css/materialdesignicons.min.css";
import VueClickAway from "vue3-click-away";

const app = createApp(App).use(i18n)
app.use(VueClickAway)
installElementPlus(app)
app.use(store).use(router).mount('#app')