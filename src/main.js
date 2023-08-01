import { createApp} from "vue";
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';  //This import is use to make bootstrap CSS usable
import router from './router'


createApp(App).use(router).mount('#app')

