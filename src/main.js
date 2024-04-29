import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router";
import {MotionPlugin} from '@vueuse/motion';
import {createHead} from '@unhead/vue'

const head = createHead()

const app = createApp(App)


app.use(router).use(MotionPlugin).use(head);
app.config.globalProperties.$http = axios;
app.mount('#app');
