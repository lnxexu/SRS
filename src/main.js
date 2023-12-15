import { createApp } from 'vue'
import App from './App.vue'
import router from './routers.js'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App)

app.use(router)

app.mount('#app')
