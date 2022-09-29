import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueAnimateOnScroll from 'vue3-animate-onscroll';

import App from './App.vue';
import router from './router';

import './assets/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAnimateOnScroll);

app.mount('#app');
