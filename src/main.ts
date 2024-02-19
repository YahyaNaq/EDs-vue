import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { configure } from 'vee-validate';


configure({
    validateOnBlur: false, 
    validateOnChange: true, 
    validateOnInput: true, 
    validateOnModelUpdate: true,
  });

// import router from './router'

const app = createApp(App)

// app.use(router)

app.mount('#app')
