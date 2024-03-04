import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { MotionPlugin } from '@vueuse/motion'
// import router from './router.js'

const app = createApp(App)

app.use(MotionPlugin);
// app.use(router);
app.config.globalProperties.$http = axios

app.mount('#app')
