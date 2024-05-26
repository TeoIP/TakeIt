import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router";
import {MotionPlugin} from '@vueuse/motion';

const app = createApp(App)


app.use(router).use(MotionPlugin);
app.config.globalProperties.$http = axios;
app.mount('#app');
