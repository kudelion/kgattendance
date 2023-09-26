import {createApp} from "vue"
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'  //This import is use to make bootstrap CSS usable


createApp(App).use(router).mount('#app')

