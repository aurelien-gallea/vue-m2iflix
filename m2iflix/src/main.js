import {createApp} from 'vue'
import {configure} from "vee-validate";
import { setLocale } from "yup";
import { fr} from "yup-locales";
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
// configuer la validation
configure({
    validateOnInput: true,
    validateOnBlur: true,
    validateOnChange: true
})

const pinia = createPinia()
// personnaliser la langue des messages d'erreur
setLocale(fr);
// app.config.globalProperties.BASE_URL = "http://localhost:5555";
app
    .use(router)
    .use(pinia)
    .mount('#app')