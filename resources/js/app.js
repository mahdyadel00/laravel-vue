import './bootstrap';
import router from './router';
import { createApp } from 'vue';
import Login from './login/Login.vue';

const app = createApp({});
app.component('login-component', Login);
app.use(router);
app.mount('#app');



