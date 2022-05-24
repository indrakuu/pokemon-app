import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'tw-elements';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).use(router).mount('#app')
